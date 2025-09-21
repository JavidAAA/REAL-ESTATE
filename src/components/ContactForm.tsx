"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/resend";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Validasi form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus("❌ Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus("✅ Email berhasil dikirim!");
        // Reset form setelah berhasil
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(`❌ Error: ${result.error || "Gagal mengirim email"}`);
        console.error("Send email error:", result.details);
      }
    } catch (error) {
      setStatus("❌ Terjadi kesalahan tidak terduga");
      console.error("Form submission error:", error);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-black border border-neutral-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Request Information
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              required
              className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:border-blue-500 focus:outline-none"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name *"
              required
              className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:border-blue-500 focus:outline-none"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            required
            className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:border-blue-500 focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone"
            className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:border-blue-500 focus:outline-none"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Message *"
            rows={4}
            required
            className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:border-blue-500 focus:outline-none resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary text-black font-semibold py-2 hover:bg-primary/85 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <div className={`text-sm mt-4 p-3 rounded-md ${
            status.includes('✅') ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
          }`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}