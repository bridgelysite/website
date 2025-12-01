import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { priceId, extraItems } = body;

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
    }

    // Récupérer les infos du prix pour savoir si c'est un abonnement ou un paiement unique
    const price = await stripe.prices.retrieve(priceId);
    const mode = price.type === 'recurring' ? 'subscription' : 'payment';

    // Construction des lignes de la facture
    const line_items = [
      {
        price: priceId,
        quantity: 1,
      },
    ];

    // Ajout des options
    if (extraItems && Array.isArray(extraItems)) {
      extraItems.forEach((item) => {
        if (item.priceId && item.quantity > 0) {
          line_items.push({
            price: item.priceId,
            quantity: item.quantity,
          });
        }
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: mode, // Mode dynamique (payment ou subscription)
      payment_method_types: ["card"],
      line_items: line_items,
      success_url: `${process.env.NEXT_PUBLIC_URL || "https://bridgely.fr"}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || "https://bridgely.fr"}/`,
      allow_promotion_codes: true,
      metadata: {
        mainPriceId: priceId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout Error FULL:", error); // Log complet
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
