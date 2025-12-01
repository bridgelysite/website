import Stripe from "stripe";

// Initialize Stripe only if the key allows it, or use a dummy for build time
const apiKey = process.env.STRIPE_SECRET_KEY || "dummy_key_for_build";

export const stripe = new Stripe(apiKey, {
  // @ts-ignore Stripe SDK version mismatch workaround
  apiVersion: "2024-12-18.acacia",
  typescript: true,
});
