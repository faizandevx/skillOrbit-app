import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'SkillOrbit <onboarding@resend.dev>', // Update this with your verified sender
      to: 'muazammughal11111@gmail.com', // Your email address
      replyTo: email,
      subject: subject || 'New Contact From SkillOrbit',
      html: `
        <h2>New Contact From SkillOrbit</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email resend" + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Email sent successfully',
      data
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email catch my sa' + error },
      { status: 500 }
    );
  }
}
