import emailjs from "@emailjs/browser";

/**
 * EmailJS — how it works (beginner-friendly)
 * ----------------------------------------
 * 1) Customer fills a form on your website (browser).
 * 2) Your site calls EmailJS using PUBLIC keys (safe to expose).
 * 3) EmailJS sends an email using your Email Service + Email Template.
 * 4) The owner receives the submission in the business email inbox connected in EmailJS.
 *
 * Where responses are received:
 * - In the inbox you connect inside EmailJS (Gmail/Outlook/etc).
 * - Usually configured as the template "To Email" in EmailJS dashboard.
 *
 * Change owner email later:
 * - Best: update recipient in EmailJS template settings.
 * - Optional: pass `to_email` using NEXT_PUBLIC_BUSINESS_EMAIL (if your template uses it).
 */

export type EmailFormType = "booking" | "custom" | "contact";

export interface EmailJsConfig {
  serviceId: string;
  publicKey: string;
  bookingTemplateId: string;
  customTemplateId: string;
  businessEmail: string;
}

export function getEmailJsConfig(): EmailJsConfig {
  return {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    bookingTemplateId:
      process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID ?? "",
    customTemplateId:
      process.env.NEXT_PUBLIC_EMAILJS_CUSTOM_TEMPLATE_ID ?? "",
    businessEmail:
      process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "",
  };
}

export function isEmailJsConfigured(config: EmailJsConfig) {
  return Boolean(
  config.serviceId &&
  config.publicKey &&
  config.bookingTemplateId &&
  config.customTemplateId
);
}

export async function sendFormEmail(
  templateParams: Record<string, string>,
  formType: EmailFormType
) {
  const config = getEmailJsConfig();

  if (!isEmailJsConfigured(config)) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* values in .env.local"
    );
  }

  const templateId =
    formType === "booking"
      ? config.bookingTemplateId
      : config.customTemplateId;

  const params = {
    ...templateParams,
    form_type: formType,
    to_email: config.businessEmail,
    business_email: config.businessEmail,
  };

  const response = await emailjs.send(
    config.serviceId,
    templateId,
    params,
    {
      publicKey: config.publicKey,
    }
  );

  console.log(
    `EMAILJS ${formType.toUpperCase()} SUCCESS:`,
    response
  );

  return response;
}
