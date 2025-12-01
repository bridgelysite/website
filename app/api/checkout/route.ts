import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { priceId, extraItems } = body;

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
    }

    // Construction des lignes de la facture
    const line_items = [
      {
        price: priceId,
        quantity: 1,
      },
    ];

    // Ajout des options (ex: associés supplémentaires)
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
      mode: "payment", // On revient au mode "payment" forcé par défaut (le plus sûr)
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
    console.error("Stripe Checkout Error:", error);
    // Si l'erreur vient du mode (ex: le prix est récurrent), on retente en mode subscription
    if (error.raw?.code === 'price_type_mismatch' || error.message?.includes("recurring")) {
       try {
          const sessionSub = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: line_items,
            success_url: `${process.env.NEXT_PUBLIC_URL || "https://bridgely.fr"}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL || "https://bridgely.fr"}/`,
            allow_promotion_codes: true,
            metadata: { mainPriceId: priceId },
          });
          return NextResponse.json({ url: sessionSub.url });
       } catch (subError: any) {
          return NextResponse.json({ error: subError.message }, { status: 500 });
       }
    }

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
