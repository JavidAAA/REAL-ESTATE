"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Request Info */}
      <div className="bg-black border border-neutral-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Request Information
        </h2>

        <form className="space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone"
            className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-md border border-neutral-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-black font-semibold py-2 hover:bg-primary/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Schedule Tour */}
      <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold text-white mb-2">
          Schedule a Tour
        </h2>
        <p className="text-sm text-neutral-400 mb-4">
          Experience this property in person. <br />
          Schedule a private tour at your convenience.
        </p>

        <button className="w-full rounded-md bg-primary text-black font-semibold py-2 hover:bg-primary/80 transition">
          Schedule Tour
        </button>
      </div>
    </div>
  );
}
