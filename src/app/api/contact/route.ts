import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'nhymer@brighttorchconsulting.com';
const SUBJECT = 'Bright Torch Consulting Request';

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email is not configured. Set RESEND_API_KEY in environment.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, company, message, serviceInterest } = body;

    const from = process.env.RESEND_FROM ?? 'Bright Torch Consulting <onboarding@resend.dev>';

    const text = [
      `Name: ${name ?? ''}`,
      `Email: ${email ?? ''}`,
      `Phone: ${phone ?? '(not provided)'}`,
      `Company: ${company ?? '(not provided)'}`,
      `Service interest: ${serviceInterest ?? '(not selected)'}`,
      '',
      'Message:',
      message ?? '',
    ].join('\n');

    const { data, error } = await resend.emails.send({
      from,
      to: TO_EMAIL,
      subject: SUBJECT,
      text,
      replyTo: email || undefined,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send message';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
