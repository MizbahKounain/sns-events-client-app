"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Toast from "@/components/ui/Toast";
import SubmitButton from "@/components/ui/SubmitButton";
import {
  inputClass,
  labelClass,
  formCardClass,
} from "@/components/ui/formStyles";
import { EVENT_TYPES } from "@/lib/site";
import { sendFormEmail } from "@/lib/emailjs";

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
];

const THEMES = [
  "Royal Wedding",
  "Luxury Floral",
  "Traditional South Indian",
  "Modern Elegant",
  "Bollywood Theme",
  "Minimal Luxury",
  "Garden Theme",
  "Custom Theme",
];


export default function CustomDecor() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: "success" | "error";
  }>({
    visible: false,
    message: "",
    type: "success",
  });

  const showToast = (
    message: string,
    type: "success" | "error"
  ) => {
    setToast({
      visible: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast((t) => ({
        ...t,
        visible: false,
      }));
    }, 5000);
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    setLoading(true);

    try {
      await sendFormEmail(
        {
          from_name: String(form.get("name") ?? ""),
          phone: String(form.get("phone") ?? ""),
          event_date: String(form.get("eventDate") ?? ""),
          event_type: String(form.get("eventType") ?? ""),
          theme: String(form.get("theme") ?? ""),
          colors: String(form.get("colors") ?? ""),
          budget: String(form.get("budget") ?? ""),
          notes: String(form.get("message") ?? ""),
        },
        "custom"
      );

      formElement.reset();

      showToast(
        "Custom decoration request sent successfully! We'll confirm shortly.",
        "success"
      );
    } catch (error) {
      console.error("CUSTOM DECOR ERROR:", error);

      showToast(
        "Could not send request. Please try again or contact us on WhatsApp.",
        "error"
      );
    } finally {
      setLoading(false);
    }

  };

  return (<section
    id="custom-decor"
    className="relative py-24 sm:py-32"
  > <div className="absolute inset-0 bg-radiant-aurora opacity-50" />

    
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-start gap-12 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            align="left"
            title="Customized Decorations"
            description="Share your dream theme — we'll design a radiant, luxury setup tailored to your celebration."
            light
          />

          <ul className="space-y-3 text-white/70">
            {[
              "Personalized Decor Concepts",
              "Luxury Floral Arrangements",
              "Royal Wedding Themes",
              "Stage & Mandap Design",
              "Instagram-Worthy Photo Corners",
              "Custom Color Coordination",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2"
              >
                <Palette className="h-4 w-4 text-radiant-pink" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className={formCardClass}
        >
          <div className="space-y-5">

            <div>
              <label
                htmlFor="custom-name"
                className={labelClass}
              >
                Name
              </label>

              <input
                id="custom-name"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="custom-phone"
                className={labelClass}
              >
                Phone Number
              </label>

              <input
                id="custom-phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="custom-date"
                className={labelClass}
              >
                Event Date
              </label>

              <input
                id="custom-date"
                name="eventDate"
                type="date"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="custom-event"
                className={labelClass}
              >
                Event Type
              </label>

              <select
                id="custom-event"
                name="eventType"
                required
                className={inputClass}
              >
                <option value="">
                  Select event
                </option>

                {EVENT_TYPES.map((t) => (
                  <option
                    key={t}
                    value={t}
                    className="bg-elegant-dark"
                  >
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="theme" className={labelClass}>
                Theme Preference
              </label>

              <select
                id="theme"
                name="theme"
                required
                className={inputClass}
              >
                <option value="">Select Theme</option>

                {THEMES.map((theme) => (
                  <option
                    key={theme}
                    value={theme}
                    className="bg-elegant-dark"
                  >
                    {theme}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="colors" className={labelClass}>
                Preferred Colors
              </label>

              <input
                id="colors"
                name="colors"
                placeholder="Gold & White, Pink & Purple, Custom..."
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="custom-budget"
                className={labelClass}
              >
                Budget
              </label>

              <select
                id="custom-budget"
                name="budget"
                required
                className={inputClass}
              >
                <option value="">
                  Select budget
                </option>

                {BUDGET_OPTIONS.map((b) => (
                  <option
                    key={b}
                    value={b}
                    className="bg-elegant-dark"
                  >
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="referenceImage"
                className={labelClass}
              >
                Reference Image (Optional)
              </label>

              <input
                id="referenceImage"
                name="referenceImage"
                type="file"
                accept="image/*"
                className={inputClass}
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />

              <p className="mt-2 text-sm text-white/60">
                ✨ Share a reference image to help us understand your vision. If additional images or details are required, our design team will reach out to you via WhatsApp for further discussion.
              </p>
            </div>
            {preview && (
              <div className="overflow-hidden rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Reference Preview"
                  className="h-56 w-full object-cover"
                />
              </div>
            )}



            <div>
              <label
                htmlFor="custom-message"
                className={labelClass}
              >
                Message
              </label>

              <textarea
                id="custom-message"
                name="message"
                rows={4}
                required
                placeholder="Describe your dream decoration, theme, colours, floral ideas, special requirements..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <SubmitButton
              loading={loading}
              label="Submit Request"
              loadingLabel="Sending Request..."
            />
          </div>
        </motion.form>
      </div>
    </div>

    <Toast
      message={toast.message}
      visible={toast.visible}
      type={toast.type}
      onClose={() =>
        setToast((t) => ({
          ...t,
          visible: false,
        }))
      }
    />
  </section>
  );
}
