import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const smtpHost = process.env.SMTP_HOST || 'smtp.titan.email';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : (smtpPort === 465);
    const smtpUser = process.env.SMTP_USER || 'sales@bexavolt.com.au';
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      console.warn('SMTP_PASS is not configured in Railway variables. Quote received:', data);
      return NextResponse.json({ 
        success: true, 
        message: 'Quote received successfully (SMTP password pending in Railway variables).' 
      }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"BexaVolt Quotes" <${smtpUser}>`,
      to: 'sales@bexavolt.com.au',
      replyTo: data.email,
      subject: `New EV Charger Quote Request - ${data.firstName || ''} ${data.lastName || ''}`.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
          <h2 style="color: #18181b; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">New EV Charger Quote Request</h2>
          <p><strong>Customer Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>State / Territory:</strong> ${data.state || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;"/>
          <h3 style="color: #27272a;">Charger & Vehicle Details</h3>
          <p><strong>Car Brand:</strong> ${data.brand || 'N/A'}</p>
          <p><strong>Charger Model:</strong> ${data.charger || 'N/A'}</p>
          <p><strong>Power Rating:</strong> ${data.power || 'N/A'}</p>
          <p><strong>Installation Preference:</strong> ${data.installer || 'N/A'}</p>
          <p><strong>Estimated Quote Value:</strong> $${data.estimate || 0}</p>
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;"/>
          <h3 style="color: #27272a;">Preferences</h3>
          <p><strong>Installation Timeframe:</strong> ${data.installTime || 'N/A'}</p>
          <p><strong>Preferred Call Time:</strong> ${data.callTime || 'N/A'}</p>
          <p><strong>Subscribed to Updates:</strong> ${data.updates ? 'Yes' : 'No'}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
