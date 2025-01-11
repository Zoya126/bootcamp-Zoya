"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/favorites";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

export function ProductActions({ product }: { product: Product }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  return (
    <div className="flex space-x-4">
      <Button
        size="lg"
        variant={isProductFavorite ? "destructive" : "default"}
        className="flex-1"
        onClick={() =>
          isProductFavorite
            ? removeFromFavorites(product.id)
            : addToFavorites(product)
        }
      >
        <Heart className={`mr-2 h-5 w-5 ${isProductFavorite ? "fill-current" : ""}`} />
        {isProductFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </div>
  );
}