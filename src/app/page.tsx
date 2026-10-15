import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">المتجر</h1>
        <p className="text-zinc-400 mb-12">اختار المنتج اللي يعجبك</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-zinc-600 transition"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <span className="text-xs text-zinc-500">{product.category}</span>
                <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
                <p className="text-zinc-300 mt-2">{product.price} ج.م</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}