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
      console.warn('SMTP_PASS is not configured in Railway variables. Careers application received:', data);
      return NextResponse.json({ 
        success: true, 
        message: 'Application received successfully (SMTP password pending in Railway variables).' 
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
      from: `"BexaVolt Careers" <${smtpUser}>`,
      to: 'sales@bexavolt.com.au',
      replyTo: data.email,
      subject: `New Job Application: ${data.role || 'Role'} - ${data.fullName || ''}`.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; border-radius: 8px;">
          <h2 style="color: #18181b; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">New Installer / Careers Application</h2>
          <p><strong>Applicant Name:</strong> ${data.fullName || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Role Applied For:</strong> ${data.role || 'N/A'}</p>
          <p><strong>State / Territory:</strong> ${data.state || 'N/A'}</p>
          <p><strong>Years of Experience:</strong> ${data.experience || 'N/A'}</p>
          <p><strong>Resume / Portfolio Link:</strong> ${data.resumeLink ? `<a href="${data.resumeLink}" target="_blank">${data.resumeLink}</a>` : 'Not provided'}</p>
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;"/>
          <h3 style="color: #27272a;">Additional Notes:</h3>
          <p style="white-space: pre-wrap; background-color: #f4f4f5; padding: 15px; border-radius: 6px; line-height: 1.5;">${data.notes || 'None'}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Application sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending careers application email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send application' }, { status: 500 });
  }
}
