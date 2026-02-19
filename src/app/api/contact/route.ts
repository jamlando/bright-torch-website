import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const TO_EMAIL = 'nhymer@brighttorchconsulting.com';
const SUBJECT = 'Bright Torch Consulting Request';

export async function POST(request: Request) {
  // Check for Gmail SMTP credentials
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: 'Email is not configured. Set SMTP_USER and SMTP_PASS (Gmail App Password) in environment.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, company, message, serviceInterest } = body;

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass, // Gmail App Password
      },
    });

    const emailText = [
      `Name: ${name ?? ''}`,
      `Email: ${email ?? ''}`,
      `Phone: ${phone ?? '(not provided)'}`,
      `Company: ${company ?? '(not provided)'}`,
      `Service interest: ${serviceInterest ?? '(not selected)'}`,
      '',
      'Message:',
      message ?? '',
    ].join('\n');

    const info = await transporter.sendMail({
      from: `"Bright Torch Consulting" <${smtpUser}>`,
      to: TO_EMAIL,
      subject: SUBJECT,
      text: emailText,
      replyTo: email || undefined,
    });

    return NextResponse.json({ message: 'Email sent successfully', messageId: info.messageId });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send message';
    console.error('Email send error:', err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
