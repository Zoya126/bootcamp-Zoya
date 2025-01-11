"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useFavorites } from "@/context/favorites";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProductCard({ product }: { product: Product }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden group">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm dark:bg-black/80"
            onClick={() => isProductFavorite ? removeFromFavorites(product.id) : addToFavorites(product)}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isProductFavorite ? "fill-red-500 stroke-red-500" : ""
              }`}
            />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            ${product.price.toFixed(2)}
          </p>
          <div className="mt-4">
            <Link href={`/products/${product.id}`}>
              <Button className="w-full">View Details</Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}