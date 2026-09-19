import { site } from "@/data/site";

/** schema.org markup so Google can show hours, cuisine and address. Generated from data/site.ts. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    url: site.url,
    description: site.description,
    servesCuisine: site.cuisines,
    priceRange: "₹₹",
    telephone: site.phone.tel,
    hasMenu: `${site.url}/#menu`,
    sameAs: [site.links.instagram, site.links.zomato],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.open,
      closes: site.hours.close,
    },
  };
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never break out of the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
