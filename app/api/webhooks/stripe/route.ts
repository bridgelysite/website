import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// MAPPING DES PRODUITS
const PRODUCTS = {
  // --- PACKS & GUIDES ---
  "price_1SZU3FRPyuf04COPmYuydh24": {
    type: "digital",
    name: "Pack Pologne Premium 🇵🇱",
    fileUrl: "https://bridgely.fr/downloads/pack-pologne-premium.zip", // À remplacer par votre vrai fichier
  },
  "price_1SZU3rRPyuf04COPYzN4y4KX": {
    type: "digital",
    name: "Guide Pologne (Fiscalité) 🇵🇱",
    fileUrl: "https://bridgely.fr/downloads/guide-pologne-fiscalite.pdf",
  },
  "price_1SZU4SRPyuf04COPwcxYwxtO": {
    type: "digital",
    name: "Pack LLC USA Pro 🇺🇸",
    fileUrl: "https://bridgely.fr/downloads/pack-llc-usa-pro.zip",
  },
  "price_1SZU4sRPyuf04COPckroruE7": {
    type: "digital",
    name: "Guide LLC Delaware 🇺🇸",
    fileUrl: "https://bridgely.fr/downloads/guide-llc-delaware.pdf",
  },
  "price_1SZU5HRPyuf04COPwhU1zQMS": {
    type: "digital",
    name: "Kit Freelance Nomad 🌍",
    fileUrl: "https://bridgely.fr/downloads/kit-freelance-nomad.pdf",
  },
  "price_1SZU5fRPyuf04COPxtVyrsQ4": {
    type: "digital",
    name: "Pack Contrats Pro 📄",
    fileUrl: "https://bridgely.fr/downloads/pack-contrats-pro.zip",
  },

  // --- CONSULTING ---
  "price_1SZUrARPyuf04COPFZdQyXwa": {
    type: "consulting",
    name: "Session Consulting Expert",
    calendlyUrl: "https://calendly.com/votre-lien-calendly", // Mettez votre lien ici
  },

  // --- SERVICES (CRÉATION) ---
  "price_1SZVOiRPyuf04COPv5rrXKrP": { type: "service", name: "Création Société Pologne (Standard)" },
  "price_1SZVQ3RPyuf04COPAt7wWulO": { type: "service", name: "Création Société Pologne (Plus)" },
  "price_1SZVSqRPyuf04COPQmrC6lJk": { type: "service", name: "Création LLC Standard" },
  "price_1SZVtVRPyuf04COPUiX3tdow": { type: "service", name: "Création LLC Formule Plus" },
};

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  let event;

  try {
    if (!signature || !webhookSecret) {
      console.warn("Webhook signature or secret missing");
      return new NextResponse("Webhook signature or secret missing", { status: 400 });
    }
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || "Entrepreneur";

    // Récupérer les articles achetés (pour gérer les paniers multiples)
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    if (customerEmail) {
      for (const item of lineItems.data) {
        const priceId = item.price?.id;
        if (priceId && PRODUCTS[priceId as keyof typeof PRODUCTS]) {
          const product = PRODUCTS[priceId as keyof typeof PRODUCTS];
          await sendEmail(customerEmail, customerName, product);
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}

async function sendEmail(email: string, name: string, product: any) {
  let subject = `Votre commande Bridgely : ${product.name}`;
  let html = "";

  if (product.type === "digital") {
    html = `
      <h1>Merci pour votre commande, ${name} !</h1>
      <p>Voici votre lien pour télécharger <strong>${product.name}</strong> :</p>
      <p>
        <a href="${product.fileUrl}" style="background-color: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Télécharger mon pack
        </a>
      </p>
      <p>Ou cliquez ici : <a href="${product.fileUrl}">${product.fileUrl}</a></p>
      <p>À très vite,<br>L'équipe Bridgely</p>
    `;
  } else if (product.type === "consulting") {
    html = `
      <h1>Merci ${name}, votre session est réservée !</h1>
      <p>Il ne reste plus qu'une étape : choisir votre créneau dans l'agenda.</p>
      <p>
        <a href="${product.calendlyUrl}" style="background-color: #2563EB; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Choisir mon créneau horaire
        </a>
      </p>
      <p>À très vite pour notre échange.</p>
    `;
  } else if (product.type === "service") {
    html = `
      <h1>Félicitations ${name} !</h1>
      <p>Nous avons bien reçu votre commande pour : <strong>${product.name}</strong>.</p>
      <p>Un expert de l'équipe Bridgely va prendre contact avec vous sous 24h ouvrées pour démarrer la procédure et récupérer les pièces nécessaires.</p>
      <p>Si vous avez la moindre question d'ici là, répondez simplement à cet email.</p>
      <p>Bienvenue chez Bridgely.</p>
    `;
  }

  try {
    await resend.emails.send({
      from: "Bridgely <commandes@bridgely.fr>", // Doit être un domaine vérifié sur Resend
      to: email,
      subject: subject,
      html: html,
    });
    console.log(`Email sent to ${email} for ${product.name}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
