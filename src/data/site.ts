/**
 * Single source of truth for everything about the business.
 * Nav, footer, Visit section, structured data and metadata all read from here.
 */
export const site = {
  name: "Shinto",
  title: "Shinto | Asian café and coffee bar in Indiranagar, Bengaluru",
  description:
    "Ramen, sandos, matcha and cold brew in Indiranagar, Bengaluru. Japanese, Korean, Thai, Vietnamese and Indonesian plates with specialty coffee. Pet friendly. Open every day, 11 am to 11 pm.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
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
