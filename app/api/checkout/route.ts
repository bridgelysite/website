import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Checkout Request Body:", body); // DEBUG LOG

    const { priceId, extraItems } = body;

    if (!priceId) {
      console.error("Missing priceId");
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

    console.log("Creating Stripe Session with items:", line_items); // DEBUG LOG

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
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
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
