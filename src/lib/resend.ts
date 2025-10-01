// "use server";

// import { Resend } from "resend";

// export const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendEmail(formData: {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   message: string;
// }) {
//   try {
//     // Validasi API key
//     if (!process.env.RESEND_API_KEY) {
//       console.error("RESEND_API_KEY not found in environment variables");
//       return { success: false, error: "API key not configured" };
//     }

//     console.log("Attempting to send email with Resend...");
    
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: 'putu.gpi@gmail.com',
//       subject: 'New Property Inquiry',
//       html: `
//         <h1>New Contact Form Submission</h1>
//         <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
//         <p><strong>Email:</strong> ${formData.email}</p>
//         <p><strong>Phone:</strong> ${formData.phone}</p>
//         <p><strong>Message:</strong></p>
//         <p>${formData.message}</p>
//       `,
//     });

//     if (error) {
//       console.error("Resend API error:", error);
//       return { success: false, error: error.message || "Email API error" };
//     }

//     console.log("Email sent successfully:", data);
//     return { success: true, data };

//   } catch (err) {
//     console.error("Unexpected error:", err);
//     return { 
//       success: false, 
//       error: "Unexpected error occurred",
//       details: err instanceof Error ? err.message : String(err)
//     };
//   }
// }

import { Resend } from "resend";

let resendInstance: Resend | null = null;

export function getResend(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}