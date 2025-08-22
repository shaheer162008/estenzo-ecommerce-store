"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";
import data from "../../data.json";

export default function Home() {
  const featuredProducts = data.products.slice(0, 4);
  const categories = ["Electronics", "Fashion", "Home", "Books", "Toys"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Estenzo Store
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Discover amazing products with unbeatable prices
            </p>
            <div className="space-x-4">
              <Link href="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-900 transition-all duration-200 font-semibold"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/categories">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-900 transition-all duration-200 font-semibold"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link 
                key={category}
                href={`/products?category=${category.toLowerCase()}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="font-semibold">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/products">
              <Button variant="outline">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {product.stock < 20 ? "Limited" : "In Stock"}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-red-900">
                        ${product.price}
                      </span>
                      <Button size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest deals and products
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
