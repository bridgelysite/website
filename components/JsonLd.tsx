import Script from "next/script";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bridgely",
    image: "https://bridgely.fr/og-image.jpg", // Placeholder
    description:
      "Cabinet de conseil en création de sociétés en Pologne et LLC aux USA pour entrepreneurs francophones.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
    priceRange: "$$",
    url: "https://bridgely.fr",
    telephone: "", // Add if available
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}




