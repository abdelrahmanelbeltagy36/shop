import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-xs uppercase tracking-widest text-[#8a6474] hover:text-[#c2497a]">
          ← رجوع للكتالوج
        </Link>

        <div className="grid gap-12 md:grid-cols-2 mt-10">
          <div className="aspect-square bg-[#fdeef3] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#e0527f]">
              {product.category}
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl mt-3 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-[#8a6474] mb-8">{product.price} ج.م</p>
            <p className="text-[#5c3a48] leading-relaxed mb-10">{product.description}</p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}