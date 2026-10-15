import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-center text-5xl mb-12">
          Catalog
        </h1>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <div className="aspect-square bg-[#fdeef3] overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline mt-4">
                <h2 className="text-sm uppercase tracking-wider">{product.name}</h2>
                <p className="text-sm text-[#8a6474]">{product.price} ج.م</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#e0527f]">
                {product.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}