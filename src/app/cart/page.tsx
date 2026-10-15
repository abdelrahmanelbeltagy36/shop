"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">السلة فاضية</h1>
          <Link href="/" className="text-zinc-400 hover:text-white">
            ← رجوع للمتجر
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">السلة</h1>
        <p className="text-zinc-400 mb-10">عدد القطع: {totalItems}</p>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-zinc-400">
                  {item.price} ج.م × {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold">
                  {item.price * item.quantity} ج.م
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-800">
          <button
            onClick={clearCart}
            className="text-sm text-zinc-400 hover:text-white"
          >
            تفريغ السلة
          </button>
          <p className="text-xl font-bold">الإجمالي: {totalPrice} ج.م</p>
        </div>

        <Link
          href="/checkout"
          className="block w-full text-center mt-8 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200"
        >
          إتمام الطلب
        </Link>

        <Link href="/" className="inline-block mt-8 text-zinc-400 hover:text-white">
          ← رجوع للمتجر
        </Link>
      </div>
    </main>
  );
}