"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">تم تأكيد طلبك ✅</h1>
          <p className="text-zinc-400 mb-8">هنتواصل معاك على الرقم اللي كتبته لتأكيد التوصيل.</p>
          <Link href="/" className="text-zinc-400 hover:text-white">
            ← رجوع للمتجر
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
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
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">إتمام الطلب</h1>
        <p className="text-zinc-400 mb-10">
          الإجمالي: <span className="text-white font-semibold">{totalPrice} ج.م</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">الاسم</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-zinc-600"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">رقم الموبايل</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-zinc-600"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">العنوان</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200"
          >
            تأكيد الطلب
          </button>
        </form>

        <Link href="/cart" className="inline-block mt-8 text-zinc-400 hover:text-white">
          ← رجوع للسلة
        </Link>
      </div>
    </main>
  );
}