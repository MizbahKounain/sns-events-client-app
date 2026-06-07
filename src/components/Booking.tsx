"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Toast from "@/components/ui/Toast";
import SubmitButton from "@/components/ui/SubmitButton";
import { inputClass, labelClass, formCardClass } from "@/components/ui/formStyles";
import { EVENT_TYPES } from "@/lib/site";
import { sendFormEmail } from "@/lib/emailjs";

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
];

export default function Booking() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    try {
      // EmailJS template should include these variables (configure in EmailJS dashboard)
      await sendFormEmail(
        {
          from_name: String(form.get("name") ?? ""),
          phone: String(form.get("phone") ?? ""),
          event_date: String(form.get("eventDate") ?? ""),
          event_type: String(form.get("eventType") ?? ""),
          location: String(form.get("location") ?? ""),
          guest_count: String(form.get("guestCount") ?? ""),
          budget: String(form.get("budget") ?? ""),
          notes: String(form.get("notes") ?? ""),
        },
        "booking"
      );
      formElement.reset();
      showToast("Booking sent successfully! We'll confirm shortly.", "success");
    } catch (error) {
      console.error("BOOKING ERROR FULL:", error);

      if (error instanceof Error) {
        console.error("MESSAGE:", error.message);
        showToast(error.message, "error");
      } else {
        showToast("Unknown error occurred", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-radiant-purple/20 via-black to-radiant-pink/10" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Book Your Dream Event"
          description="Premium booking — details are emailed directly to SNS Events."
          light
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className={formCardClass}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="book-name" className={labelClass}>Name</label>
              <input id="book-name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="book-phone" className={labelClass}>Phone Number</label>
              <input id="book-phone" name="phone" type="tel" required className={inputClass} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label htmlFor="book-date" className={labelClass}>Event Date</label>
              <input id="book-date" name="eventDate" type="date" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="book-type" className={labelClass}>Event Type</label>
              <select id="book-type" name="eventType" required className={inputClass}>
                <option value="">Select type</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-elegant-dark">{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="book-location" className={labelClass}>Location</label>
              <input id="book-location" name="location" required className={inputClass} placeholder="Venue / city" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="guest-count" className={labelClass}>
                Expected Guests
              </label>

              <input
                id="guest-count"
                name="guestCount"
                type="number"
                min="1"
                required
                className={inputClass}
                placeholder="Approximate guest count"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="book-budget" className={labelClass}>Budget</label>
              <select id="book-budget" name="budget" required className={inputClass}>
                <option value="">Select budget</option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b} className="bg-elegant-dark">{b}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="book-notes" className={labelClass}>Additional Notes</label>
              <textarea id="book-notes" name="notes" rows={4} className={`${inputClass} resize-none`} placeholder="Theme ideas, guest count, special requests..." />
            </div>
          </div>
          <div className="mt-8">
            <SubmitButton loading={loading} label="Submit Booking" loadingLabel="Sending to SNS Events..." />
          </div>
        </motion.form>
      </div>

      <Toast message={toast.message} visible={toast.visible} type={toast.type} onClose={() => setToast((t) => ({ ...t, visible: false }))} />
    </section>
  );
}
