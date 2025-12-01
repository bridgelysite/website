import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // @ts-ignore Stripe SDK version mismatch workaround
  apiVersion: "2024-12-18.acacia", 
  typescript: true,
});
