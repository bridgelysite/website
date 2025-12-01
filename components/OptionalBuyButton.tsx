"use client";

import { useState } from "react";

interface OptionalBuyButtonProps {
  mainPriceId: string;
  mainPriceLabel: string;
  basePrice: number;
  optionPriceId: string;
  optionPrice: number;
  optionLabel: string;
  buttonLabel: string;
  className?: string;
  totalPriceClassName?: string; // New prop for custom styling of the total price
}

export const OptionalBuyButton = ({
  mainPriceId,
  mainPriceLabel,
  basePrice,
  optionPriceId,
  optionPrice,
  optionLabel,
  buttonLabel,
  className,
  totalPriceClassName = "text-slate-900", // Default to dark text
}: OptionalBuyButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  // Calcul du total dynamique
  const totalPrice = basePrice + (isOptionSelected ? optionPrice : 0);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: mainPriceId,
          extraItems: [
            {
              priceId: optionPriceId,
              quantity: isOptionSelected ? 1 : 0,
            },
          ],
        }),
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
    <div className="w-full">
      {/* Option Checkbox */}
      <div className="mb-4 bg-slate-50/50 rounded-lg p-3 border border-slate-100 cursor-pointer" onClick={() => setIsOptionSelected(!isOptionSelected)}>
        <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isOptionSelected ? 'bg-[color:var(--color-primary)] border-[color:var(--color-primary)]' : 'bg-white border-slate-300'}`}>
                {isOptionSelected && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <div className="flex-1">
                <p className="text-xs font-medium text-slate-700">{optionLabel}</p>
                <p className="text-[10px] text-slate-500">+{optionPrice} €</p>
            </div>
        </div>
      </div>

      {/* Prix Total Affiché */}
      <div className="mb-4 flex items-baseline justify-between border-t border-slate-100/20 pt-3 border-dashed">
          <span className={`text-sm font-medium ${totalPriceClassName.includes("text-white") ? "text-slate-300" : "text-slate-600"}`}>Total à payer :</span>
          <span className={`text-xl font-bold ${totalPriceClassName}`}>{totalPrice} € <span className={`text-xs font-normal ${totalPriceClassName.includes("text-white") ? "text-slate-400" : "text-slate-400"}`}>HT</span></span>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); handleBuy(); }}
        disabled={loading}
        className={`${className} ${loading ? "opacity-70 cursor-wait" : ""}`}
      >
        {loading ? "Chargement..." : buttonLabel}
      </button>
    </div>
  );
};
