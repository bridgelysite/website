import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bridgely – Création d'entreprise en Pologne & LLC USA",
  description:
    "Bridgely accompagne les entrepreneurs dans la création de sociétés en Pologne et de LLC aux États-Unis, ainsi que dans l’optimisation juridique et fiscale internationale.",
  metadataBase: new URL("https://bridgely.fr"),
  openGraph: {
    title: "Bridgely – Votre passerelle business Europe & USA",
    description:
      "Création de sociétés en Pologne, LLC aux États-Unis et consulting international pour entrepreneurs et freelances.",
    url: "https://bridgely.fr",
    siteName: "Bridgely",
    type: "website",
    locale: "fr_FR",
  },
  verification: {
    google: "yzdB5I9HsmiNPm5zayUGcocDYMZqInEK3HIz6x-Bxc0",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
