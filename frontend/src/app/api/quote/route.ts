import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'Sales@BexaVolt.com.au',
      subject: `New EV Charger Quote Request - ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New EV Charger Quote Request</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <hr/>
        <h3>Charger Details</h3>
        <p><strong>Car Brand:</strong> ${data.brand}</p>
        <p><strong>Charger Model:</strong> ${data.charger}</p>
        <p><strong>Power Rating:</strong> ${data.power}</p>
        <p><strong>Installation Preference:</strong> ${data.installer}</p>
        <p><strong>Estimated Quote Value:</strong> $${data.estimate}</p>
        <hr/>
        <h3>Preferences</h3>
        <p><strong>Installation Timeframe:</strong> ${data.installTime}</p>
        <p><strong>Preferred Call Time:</strong> ${data.callTime}</p>
        <p><strong>Subscribed to Updates:</strong> ${data.updates ? 'Yes' : 'No'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
