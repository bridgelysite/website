"use client";

import { useState } from "react";

interface ConfigurableBuyButtonProps {
  mainPriceId: string;
  mainPriceLabel: string;
  basePrice: number;
  extraOptionPriceId: string;
  extraOptionPrice: number;
  extraOptionLabel: string;
  buttonLabel: string;
  className?: string;
}

export const ConfigurableBuyButton = ({
  mainPriceId,
  mainPriceLabel,
  basePrice,
  extraOptionPriceId,
  extraOptionPrice,
  extraOptionLabel,
  buttonLabel,
  className,
}: ConfigurableBuyButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [extraQuantity, setExtraQuantity] = useState(0);

  // Calcul du total dynamique
  const totalPrice = basePrice + extraQuantity * extraOptionPrice;

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
              priceId: extraOptionPriceId,
              quantity: extraQuantity,
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
      {/* Sélecteur d'options */}
      <div className="mb-4 bg-slate-50/50 rounded-lg p-3 border border-slate-100">
        <label className="block text-xs font-medium text-slate-600 mb-2">
          {extraOptionLabel} (+{extraOptionPrice} €)
        </label>
        <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-slate-500">Quantité :</span>
            <div className="flex items-center border border-slate-300 rounded-md bg-white overflow-hidden">
                <button 
                    onClick={() => setExtraQuantity(Math.max(0, extraQuantity - 1))}
                    className="px-3 py-1 hover:bg-slate-100 text-slate-600 border-r border-slate-200"
                >
                    -
                </button>
                <span className="px-3 py-1 text-sm font-semibold text-slate-900 min-w-[2rem] text-center">
                    {extraQuantity}
                </span>
                <button 
                    onClick={() => setExtraQuantity(extraQuantity + 1)}
                    className="px-3 py-1 hover:bg-slate-100 text-slate-600 border-l border-slate-200"
                >
                    +
                </button>
            </div>
        </div>
      </div>

      {/* Prix Total Affiché */}
      <div className="mb-4 flex items-baseline justify-between border-t border-slate-100 pt-3 border-dashed">
          <span className="text-sm font-medium text-slate-600">Total à payer :</span>
          <span className="text-xl font-bold text-slate-900">{totalPrice} € <span className="text-xs font-normal text-slate-400">HT</span></span>
      </div>

      <button
        onClick={handleBuy}
        disabled={loading}
        className={`${className} ${loading ? "opacity-70 cursor-wait" : ""}`}
      >
        {loading ? "Chargement..." : buttonLabel}
      </button>
    </div>
  );
};


