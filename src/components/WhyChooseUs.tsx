"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  "25 Years of Experience",
  "Complete Event Solutions Under One Roof",
  "Premium Decorations & Floral Designs",
  "Catering & Hospitality Services",
  "Mehendi Artists & Bridal Makeup",
  "Photography & Videography",
  "DJ, Sound & Entertainment",
  "Events Across Karnataka & India",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#120a18] to-[#0c0a0e]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="Why Choose SNS Events?"
          description="From luxury decorations and catering to photography, mehendi artists, entertainment, and full event coordination — SNS Events manages every detail so you can enjoy your special day stress-free."
          light
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass hover-glow rounded-2xl p-6 text-center"
            >
              <div className="mb-3 text-3xl">
                ✨
              </div>

              <p className="font-medium text-white">
                {feature}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}