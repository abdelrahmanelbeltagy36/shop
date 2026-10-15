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
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          ← رجوع للمتجر
        </Link>

        <div className="grid gap-10 md:grid-cols-2 mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover"
          />

          <div>
            <span className="text-xs text-zinc-500">{product.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>
            <p className="text-2xl text-white mb-6">{product.price} ج.م</p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              {product.description}
            </p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}