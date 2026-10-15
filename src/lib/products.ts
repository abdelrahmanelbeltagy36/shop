export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "wireless-headphones",
    name: "سماعات لاسلكية",
    price: 1200,
    description: "سماعات بعزل ضوضاء وبطارية تكفي لأكتر من 20 ساعة.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    category: "Audio",
  },
  {
    id: "2",
    slug: "smart-watch",
    name: "ساعة ذكية",
    price: 2500,
    description: "ساعة لتتبع النشاط ومتابعة الإشعارات، مقاومة للمياه.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    category: "Wearables",
  },
  {
    id: "3",
    slug: "mechanical-keyboard",
    name: "كيبورد ميكانيكي",
    price: 1800,
    description: "كيبورد بسويتشات هادية، مناسب للكتابة والبرمجة.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    category: "Accessories",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}