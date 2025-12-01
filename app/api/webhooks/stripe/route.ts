import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";

// Ceci devra être ajouté dans vos variables d'environnement Vercel
// Vous l'obtiendrez dans Stripe > Développeurs > Webhooks > Ajouter un endpoint
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  let event;

  try {
    if (!signature || !webhookSecret) {
      // Si pas de secret configuré, on laisse passer pour le dev ou on log l'erreur
      console.error("Webhook signature or secret missing");
      return new NextResponse("Webhook signature or secret missing", { status: 400 });
    }

    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // On écoute l'événement "checkout.session.completed" (paiement réussi)
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    
    // Récupérer l'email du client et les infos
    const customerEmail = session.customer_details?.email;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    
    // Pour simplifier, on prend le premier article (souvent un seul par achat)
    const priceId = lineItems.data[0]?.price?.id;

    if (customerEmail && priceId) {
      try {
        // Logique d'envoi d'email selon le produit acheté
        // C'est ici qu'on fera la correspondance ID PRIX -> CONTENU EMAIL
        await sendProductEmail(customerEmail, priceId);
        console.log(`Email envoyé à ${customerEmail} pour le produit ${priceId}`);
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'email Resend:", error);
      }
    }
  }

  return NextResponse.json({ received: true });
}

// Fonction pour choisir quel email envoyer selon l'ID du prix
async function sendProductEmail(email: string, priceId: string) {
  let subject = "Votre commande Bridgely";
  let htmlContent = "<p>Merci pour votre achat !</p>";

  // TODO: Remplacer les "price_..." ci-dessous par VOS VRAIS IDs
  
  // Exemple de logique :
  // if (priceId === "price_1Qj...") {
  //   subject = "Votre Pack Pologne Premium 🇵🇱";
  //   htmlContent = "<h1>Merci !</h1><p>Voici votre lien de téléchargement : ...</p>";
  // }

  await resend.emails.send({
    from: "Bridgely <commandes@bridgely.fr>", // Il faudra configurer ce domaine dans Resend
    to: email,
    subject: subject,
    html: htmlContent,
  });
}

