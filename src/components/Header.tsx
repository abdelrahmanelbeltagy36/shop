"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#5a1f35] border-b border-[#7a2d4a]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <nav className="flex gap-6 text-xs tracking-wider uppercase text-[#f3c6d6]">
          <Link href="/" className="hover:text-white">المتجر</Link>
        </nav>

        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.3em] text-white"
        >
          yuma
        </Link>

        <Link
          href="/cart"
          className="relative text-xs tracking-wider uppercase text-[#f3c6d6] hover:text-white"
        >
          السلة
          {totalItems > 0 && (
            <span className="absolute -top-2 -left-4 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-[#fdeef3] text-[#5a1f35] text-[10px] font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}