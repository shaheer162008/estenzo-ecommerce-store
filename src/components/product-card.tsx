"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye, Star, Truck, Shield } from "lucide-react";
import { useCart } from "@/components/cart-context";
import { useWishlist } from "@/components/wishlist-context";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  features?: string[];
  brand?: string;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  freeShipping?: boolean;
  fastDelivery?: boolean;
}

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
  showCompare?: boolean;
  className?: string;
}

export default function ProductCard({ 
  product, 
  showQuickView = true, 
  showCompare = false,
  className = "" 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(product.id);

  // Calculate discount percentage
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount || 0;

  const originalPrice = product.originalPrice || (product.price / (1 - (discountPercentage / 100)));

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Add to cart using context
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setIsLoading(false);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        rating: product.rating
      });
    }
  };

  const handleQuickView = () => {
    console.log("Quick view:", product);
    // Open modal or navigate to quick view
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discountPercentage > 0 && (
            <Badge className="bg-red-600 text-white font-bold">
              -{discountPercentage}%
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-green-600 text-white font-medium">
              NEW
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-orange-600 text-white font-medium">
              BESTSELLER
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
        }`}>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          
          {showQuickView && (
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Stock Status */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute bottom-2 left-2">
            <Badge variant="destructive" className="text-xs">
              Only {product.stock} left!
            </Badge>
          </div>
        )}

        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm font-bold">
              OUT OF STOCK
            </Badge>
          </div>
        )}

        {/* Quick Add to Cart (Mobile) */}
        <div className={`absolute bottom-2 right-2 md:hidden transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            size="sm"
            className="h-8 w-8 p-0 bg-red-900 hover:bg-red-800"
            onClick={handleAddToCart}
            disabled={product.stock === 0 || isLoading}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <CardContent className="p-4 space-y-3">
        {/* Brand & Category */}
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="font-medium">{product.brand || 'Brand'}</span>
          <span className="capitalize">{product.category}</span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 hover:text-red-900 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {renderStars(product.rating)}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs py-0">
                {feature}
              </Badge>
            ))}
            {product.features.length > 2 && (
              <Badge variant="outline" className="text-xs py-0">
                +{product.features.length - 2}
              </Badge>
            )}
          </div>
        )}

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-red-900">
              AED {product.price.toFixed(2)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-500 line-through">
                AED {originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {discountPercentage > 0 && (
            <p className="text-xs text-green-600 font-medium">
              You save AED {(originalPrice - product.price).toFixed(2)}
            </p>
          )}
        </div>

        {/* Shipping Info */}
        <div className="flex items-center gap-3 text-xs text-gray-600">
          {product.freeShipping && (
            <div className="flex items-center gap-1">
              <Truck className="h-3 w-3" />
              <span>Free Shipping</span>
            </div>
          )}
          {product.fastDelivery && (
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>Fast Delivery</span>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-red-900 hover:bg-red-800 transition-colors"
          onClick={handleAddToCart}
          disabled={product.stock === 0 || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding...
            </div>
          ) : product.stock === 0 ? (
            "Out of Stock"
          ) : (
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </div>
          )}
        </Button>

        {/* Quick Actions (Desktop) */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          
          {showQuickView && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
