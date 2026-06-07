"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/data/gallery";
import { GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/site";

const heightMap = { short: "h-48", medium: "h-64", tall: "h-80" };

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a0e] via-[#120a18] to-[#0c0a0e]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Dynamic Event Gallery"
          description="Explore our radiant portfolio — hover to reveal, click for fullscreen preview."
          light
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-btn-radiant text-elegant-dark shadow-glow"
                  : "glass text-white/80 hover:border-radiant-gold/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.button
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ delay: index * 0.02 }}
                onClick={() => setSelectedImage(image)}
                className={`masonry-item group relative block w-full overflow-hidden rounded-2xl border border-white/10 ${heightMap[image.height]} hover-glow`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="text-radiant-gold" />
                  <span className="rounded-full bg-radiant-gold/90 px-3 py-1 text-xs font-bold text-elegant-dark">
                    {image.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl"
            >
              <Image
                src={selectedImage.src.replace("w=600", "w=1200")}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-glow"
              />
              <p className="mt-4 text-center text-white/80">{selectedImage.alt}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-radiant-gold font-bold text-elegant-dark"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
