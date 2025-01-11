import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/products";
import { Navbar } from "@/components/navbar";
import { ProductActions } from "./product-actions";

interface Props {
  params: {
    id: string;
  };
}

// Generate static params for all product IDs
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-semibold mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-semibold">Stock:</span> {product.stock}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> {product.rating}/5
              </p>
            </div>
            <ProductActions product={product} />
          </div>
        </div>
      </main>
    </div>
  );
}