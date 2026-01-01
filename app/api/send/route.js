import { Resend } from "resend";

export async function POST(req) {
  try {
    // ✅ Initialize ONLY when API is called (not during build)
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }

    const body = await req.json();

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: body.to,
      subject: body.subject,
      html: body.html,
    });

    return new Response(
      JSON.stringify({ success: true, data: response }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
