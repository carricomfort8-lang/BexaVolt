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
      console.warn('SMTP_PASS is not configured in Railway variables. Contact enquiry received:', data);
      return NextResponse.json({ 
        success: true, 
        message: 'Enquiry received successfully (SMTP password pending in Railway variables).' 
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
      from: `"BexaVolt Contact Form" <${smtpUser}>`,
      to: 'sales@bexavolt.com.au',
      replyTo: data.email,
      subject: `New Website Enquiry: ${data.enquiryType || 'General'} - ${data.firstName || ''} ${data.lastName || ''}`.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
          <h2 style="color: #18181b; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">New Website Contact Enquiry</h2>
          <p><strong>Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Type of Enquiry:</strong> ${data.enquiryType || 'General enquiry'}</p>
          <p><strong>State / Territory:</strong> ${data.state || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;"/>
          <h3 style="color: #27272a;">Message:</h3>
          <p style="white-space: pre-wrap; background-color: #f4f4f5; padding: 15px; border-radius: 6px; line-height: 1.5;">${data.message || 'No message provided'}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Enquiry sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending contact enquiry email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send enquiry' }, { status: 500 });
  }
}
