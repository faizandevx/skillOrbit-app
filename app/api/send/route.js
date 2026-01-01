import { Resend } from "resend";

// Use environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await resend.emails.send({
      from: "you@domain.com",
      to: body.to,
      subject: body.subject,
      html: body.html,
    });

    return new Response(JSON.stringify({ success: true, data: response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
