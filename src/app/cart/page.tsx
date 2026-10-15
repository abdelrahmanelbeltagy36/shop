"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl mb-6">السلة فاضية</h1>
          <Link href="/" className="text-xs uppercase tracking-widest text-[#8a6474] hover:text-[#c2497a]">
            ← رجوع للكتالوج
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl mb-2">Cart</h1>
        <p className="text-sm text-[#8a6474] mb-10">عدد القطع: {totalItems}</p>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white border border-[#f3dfe7] p-5"
            >
              <div>
                <h2 className="text-sm uppercase tracking-wider">{item.name}</h2>
                <p className="text-xs text-[#8a6474] mt-1">
                  {item.price} ج.م × {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <span className="text-sm">{item.price * item.quantity} ج.م</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs uppercase tracking-wider text-[#e0527f] hover:text-[#c2497a]"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#f3dfe7]">
          <button
            onClick={clearCart}
            className="text-xs uppercase tracking-wider text-[#8a6474] hover:text-[#3a1d28]"
          >
            تفريغ السلة
          </button>
          <p className="text-lg">الإجمالي: {totalPrice} ج.م</p>
        </div>

        <Link
          href="/checkout"
          className="block w-full text-center mt-10 px-6 py-4 bg-[#e0527f] text-white text-sm uppercase tracking-widest hover:bg-[#c2497a] transition"
        >
          إتمام الطلب
        </Link>

        <Link
          href="/"
          className="inline-block mt-8 text-xs uppercase tracking-widest text-[#8a6474] hover:text-[#c2497a]"
        >
          ← رجوع للكتالوج
        </Link>
      </div>
    </main>
  );
}