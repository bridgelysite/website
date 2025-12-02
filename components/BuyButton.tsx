"use client";

import { useState } from "react";

interface BuyButtonProps {
  priceId: string;
  children: React.ReactNode;
  className?: string;
}

export const BuyButton = ({ priceId, children, className }: BuyButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Buy Error:", error);
      alert("Erreur de connexion au service de paiement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className={`${className} ${loading ? "opacity-70 cursor-wait" : ""}`}
    >
      {loading ? "Chargement..." : children}
    </button>
  );
};


