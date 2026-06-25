import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  // Initialize inside the handler to prevent build-time errors when the env variable is missing
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const { name, email, interest, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Send the email to the vendor/team
    // Note: When using the free tier of Resend, you can only send emails to the email address
    // you verified in your Resend account, or you must use the onboarding@resend.dev 'from' address
    // while testing. Be sure to verify your domain (e.g. vidian.in) in Resend before going to production.
    const { data, error } = await resend.emails.send({
      from: "Vidian <onboarding@resend.dev>", 
      to: ["hr@vidian.in"], // Replace with the actual email you want to receive these messages at
      replyTo: email, // This allows you to click "Reply" in your email client and reply directly to the user
      subject: `New Contact Request: ${interest} - ${name}`,
      text: `
New contact form submission from Vidian website:

Name: ${name}
Email: ${email}
Interest: ${interest}

Message:
${message || "No message provided."}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
