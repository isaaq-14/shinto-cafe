const FALLBACK_URL = "https://www.example.com";

/**
 * Resolve the public site URL without ever throwing at build time.
 * Order: NEXT_PUBLIC_SITE_URL (if non-empty) -> Vercel's production domain -> placeholder.
 * Accepts values with or without "https://" and strips any path or trailing slash.
 */
function resolveSiteUrl(): string {
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (vercelHost ? `https://${vercelHost}` : "") ||
    FALLBACK_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK_URL;
  }
}

/**
 * Single source of truth for everything about the business.
 * Nav, footer, Visit section, structured data and metadata all read from here.
 */
export const site = {
  name: "Shinto",
  title: "Shinto | All day Asian eatery & Speciality Coffee bar in Indiranagar, Bengaluru",
  description:
    "an Asian eatery and Speciality coffee shop heavily influenced by pan-asian sub-cultures and a rooted, Wabi-Sabi way of living. Pet friendly. Open every day, 11 am to 11 pm.",
  url: resolveSiteUrl(),
  timezone: "Asia/Kolkata",

  phone: { display: "+91 80033 05723", tel: "+918003305723" },

  address: {
    street:
      "3721/A, Service Road, 10th Cross, 13th B Main Road, HAL 2nd Stage, Indiranagar",
    locality: "Bengaluru",
    region: "Karnataka",
    country: "IN",
    /** One-line version for display. */
    full: "3721/A, Service Road, 10th Cross, 13th B Main Road, HAL 2nd Stage, Indiranagar, Bengaluru",
  },

  /** 24h "HH:MM". Same hours every day. */
  hours: {
    label: "Every day",
    text: "11 am to 11 pm",
    open: "11:00",
    close: "23:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  costForTwo: "About ₹600 for two.",

  links: {
    instagram: "https://www.instagram.com/shinto.blr/",
    instagramHandle: "@shinto.blr",
    zomato: "https://www.zomato.com/bangalore/cafe-shinto-domlur-bangalore",
    swiggy: undefined as string | undefined, // add when known
    maps: "https://www.google.com/maps/search/?api=1&query=Shinto+Cafe+3721%2FA+Service+Road+Indiranagar+Bengaluru",
  },

  cuisines: ["Japanese", "Korean", "Thai", "Vietnamese", "Indonesian", "Coffee"],
} as const;

export type Site = typeof site;
