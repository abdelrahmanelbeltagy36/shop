"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white">
          المتجر
        </Link>

        <Link
          href="/cart"
          className="relative px-4 py-2 rounded-lg border border-zinc-700 text-white hover:border-zinc-500"
        >
          السلة
          {totalItems > 0 && (
            <span className="absolute -top-2 -left-2 min-w-6 h-6 px-1 flex items-center justify-center rounded-full bg-white text-black text-xs font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}