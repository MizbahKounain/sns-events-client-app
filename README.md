# SNS Events — Premium Event Management Website

Luxury, cinematic event decoration website built with **Next.js**, **Tailwind CSS**, **Framer Motion**, **EmailJS**, and **Lucide Icons**.

## Run locally

```bash
npm install
cp .env.example .env.local
# Fill in .env.local (see EmailJS setup below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## EmailJS setup (booking & custom forms)

1. Create a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Add an **Email Service** (Gmail/Outlook)
3. Create an **Email Template** with variables like:
   - `{{from_name}}`, `{{phone}}`, `{{event_date}}`, `{{event_type}}`, `{{location}}`, `{{budget}}`, `{{notes}}`, `{{message}}`, `{{form_type}}`
4. Set template **To Email** to your business inbox
5. Copy IDs into `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_BUSINESS_EMAIL=you@business.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_INSTAGRAM_LINK=https://instagram.com/snsevents
NEXT_PUBLIC_PHONE_NUMBER=+91 98765 43210
NEXT_PUBLIC_BUSINESS_ADDRESS=Mumbai, India
```

**Where submissions go:** Your EmailJS-connected business email inbox.

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Add the same `NEXT_PUBLIC_*` variables in Project → Settings → Environment Variables
4. Deploy

## Build

```bash
npm run build
npm start
```

## Features

- Cinematic hero with parallax, particles, glowing brand text
- Radiant purple/gold/pink/orange palette
- Glassmorphism cards, hover glow, cursor glow
- EmailJS booking + custom decor forms (loading + success/error toasts)
- Masonry gallery with modal preview
- Animated stats, testimonials, luxury footer
