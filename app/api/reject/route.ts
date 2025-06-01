import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

interface Payload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSKEY,
  },
});

const generateEmailTemplate = (name: string, userMessage: string): string => {
  const formattedMessage = userMessage.replace(/\n/g, '<br/>');

  return `
    <div>
      <p>${formattedMessage}<br/><br/>Yours Faithfully,<br/>${name},<br/>Citizen of Kenya.</p>
    </div>
  `;
};

async function sendEmail(payload: Payload, message: string): Promise<boolean> {
  const { name, email, subject, message: userMessage } = payload;

  const mailOptions = {
    from: email,
    replyTo: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: subject,
    text: message,
    html: generateEmailTemplate(name, userMessage),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error: any) {
    console.error('Error while sending email:', error.message);
    return false;
  }
}


export async function POST(request: Request): Promise<NextResponse> {
  try {
    const payload: Payload = await request.json();
    const { name, email, subject, message: userMessage } = payload;

    const message = `${subject}\n\n${userMessage}\n\n${name},\n${email}`;

    const emailSuccess = await sendEmail(payload, message);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Email sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email.',
    }, { status: 500 });
  } catch (error: any) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
};
