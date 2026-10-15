"use client";

import type { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200"
    >
      أضف للسلة
    </button>
  );
}