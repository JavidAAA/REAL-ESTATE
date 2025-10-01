"use server";

import { Resend } from "resend";
import type { SendEmailResult } from "../lib/types";

export async function sendEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}): Promise<SendEmailResult> {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: "API key not configured", details: "Missing key" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "putu.gpi@gmail.com",
      subject: "New Property Inquiry",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message || "Email API error", details: error };
    }

    return { success: true, data, details: null };

  } catch (err) {
    return { 
      success: false, 
      error: "Unexpected error occurred", 
      details: err instanceof Error ? err.message : String(err) 
    };
  }
}
