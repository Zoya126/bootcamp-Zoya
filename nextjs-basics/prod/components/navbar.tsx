"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useFavorites } from "@/context/favorites";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold text-xl">Shop</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/favorites" className="relative">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {favorites.length}
                </Badge>
              )}
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}