"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "201030468746";

const inputClass =
  "w-full bg-white border border-[#f3dfe7] px-4 py-3 text-sm focus:outline-none focus:border-[#e0527f]";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function buildMessage() {
    const lines = items.map(
      (item) => `- ${item.name} × ${item.quantity} = ${item.price * item.quantity} ج.م`
    );

    return [
      "طلب جديد 🛒",
      "",
      `الاسم: ${form.name}`,
      `الموبايل: ${form.phone}`,
      `العنوان: ${form.address}`,
      "",
      "المنتجات:",
      ...lines,
      "",
      `الإجمالي: ${totalPrice} ج.م`,
    ].join("\n");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank");

    clearCart();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl mb-4">تم تجهيز طلبك ✅</h1>
          <p className="text-[#8a6474] mb-10">
            اضغط إرسال في واتساب عشان الطلب يوصلنا. لو الواتساب ما اتفتحش، ابعتلنا الطلب على الرقم مباشرة.
          </p>
          <Link href="/" className="text-xs uppercase tracking-widest text-[#8a6474] hover:text-[#c2497a]">
            ← رجوع للكتالوج
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
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
      <div className="max-w-xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl mb-2">Checkout</h1>
        <p className="text-sm text-[#8a6474] mb-10">
          الإجمالي: <span className="text-[#3a1d28]">{totalPrice} ج.م</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#8a6474] mb-2">الاسم</label>
            <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#8a6474] mb-2">رقم الموبايل</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className={inputClass} />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#8a6474] mb-2">العنوان</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={3}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-[#e0527f] text-white text-sm uppercase tracking-widest hover:bg-[#c2497a] transition"
          >
            تأكيد الطلب على واتساب
          </button>
        </form>

        <Link href="/cart" className="inline-block mt-10 text-xs uppercase tracking-widest text-[#8a6474] hover:text-[#c2497a]">
          ← رجوع للسلة
        </Link>
      </div>
    </main>
  );
}