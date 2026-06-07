// Central place for all public site configuration.
// Values come from NEXT_PUBLIC_* environment variables for easy deployment on Vercel.
// These are NOT secrets (they are exposed to the browser).

function env(key: string, fallback: string) {
  const value = process.env[key];
  return value && value.trim().length > 0 ? value : fallback;
}

export const SITE_CONFIG = {
  name: "SNS Events",
  tagline: "Turning Celebrations Into Beautiful Memories",

  phone: env("NEXT_PUBLIC_PHONE_NUMBER", "+919740333903"),
  whatsapp: env("NEXT_PUBLIC_WHATSAPP_NUMBER", "919740333903"),
  email: env("NEXT_PUBLIC_BUSINESS_EMAIL", "snsevents10@gmail.com"),
  instagram: env("NEXT_PUBLIC_INSTAGRAM_LINK", "https://www.instagram.com/_sns_events?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="),
  address: env("NEXT_PUBLIC_BUSINESS_ADDRESS", "60 feet road, Near Sahara Wedding Hall, Chikmagalur, Karnataka, India"),
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Customized Decor", href: "#custom-decor" },
  { label: "Contact", href: "#contact" },
] as const;

export const EVENT_TYPES = [
  "Haldi Decoration",
  "Mehendi Decoration",
  "Wedding Decoration",
  "Reception Decoration",
  "Birthday Decoration",
  "Baby Shower Decoration",
  "Other",
] as const;

export const GALLERY_CATEGORIES = ["All", "Haldi", "Wedding", "Birthday", "Reception","Corporate Anniversary", "Mehendi"] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

