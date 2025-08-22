"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

// Mock wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Men's Sneakers",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80",
    category: "Fashion",
    inStock: true,
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-6">Start adding products you love to your wishlist!</p>
          <Link href="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved</p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow relative">
              <CardContent className="p-0">
                <div className="relative">
                  <Link href={`/products/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                    />
                  </Link>
                  
                  {/* Remove from wishlist button */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 bg-white hover:bg-gray-100"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>

                  {!item.inStock && (
                    <Badge className="absolute top-2 left-2 bg-gray-500">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <Link href={`/products/${item.id}`}>
                    <h3 className="font-semibold mb-2 hover:text-red-900 cursor-pointer">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-900">
                      ${item.price}
                    </span>
                    
                    <Button
                      size="sm"
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
          <Button onClick={() => setWishlistItems([])}>
            Clear Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}
