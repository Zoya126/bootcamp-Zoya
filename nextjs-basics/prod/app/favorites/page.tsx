"use client";

import { useFavorites } from "@/context/favorites";
import { ProductCard } from "@/components/product-card";
import { Navbar } from "@/components/navbar";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-center text-muted-foreground">
            You haven't added any products to your favorites yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}