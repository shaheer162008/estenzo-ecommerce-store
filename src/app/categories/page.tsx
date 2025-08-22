"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import data from "../../../data.json";

export default function CategoriesPage() {
  // Get categories with product counts
  const categoryStats = data.products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        name: product.category,
        count: 0,
        products: [],
        minPrice: product.price,
        maxPrice: product.price,
      };
    }
    acc[product.category].count++;
    acc[product.category].products.push(product);
    acc[product.category].minPrice = Math.min(acc[product.category].minPrice, product.price);
    acc[product.category].maxPrice = Math.max(acc[product.category].maxPrice, product.price);
    return acc;
  }, {} as Record<string, any>);

  const categories = Object.values(categoryStats);

  // Category icons mapping
  const categoryIcons: Record<string, string> = {
    Electronics: "📱",
    Fashion: "👕",
    Home: "🏠",
    Books: "📚",
    Toys: "🧸",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-gray-600 text-lg">
            Discover products organized by categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <Card className="hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Category Header */}
                    <div className="bg-gradient-to-br from-red-900 to-red-800 text-white p-6 rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl mb-2">
                            {categoryIcons[category.name] || "📦"}
                          </div>
                          <h2 className="text-2xl font-bold">{category.name}</h2>
                          <p className="text-red-100">
                            {category.count} product{category.count !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="p-6 bg-white">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-600">Price Range</span>
                        <Badge variant="secondary">
                          ${category.minPrice} - ${category.maxPrice}
                        </Badge>
                      </div>

                      {/* Featured Products Preview */}
                      <div className="grid grid-cols-3 gap-2">
                        {category.products.slice(0, 3).map((product: any) => (
                          <Image
                            key={product.id}
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                            className="w-full h-16 object-cover rounded"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Category */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Category: Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products
              .filter(product => product.category === "Electronics")
              .slice(0, 4)
              .map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                      />
                    </Link>
                    <div className="p-4">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-red-900">
                          ${product.price}
                        </span>
                        <Badge variant="secondary">
                          ⭐ {product.rating}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Category Benefits */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Free shipping on orders over $100 in all categories
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600 text-sm">
                Your payment information is always secure with us
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">↩️</div>
              <h3 className="font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">
                30-day return policy on all products in any category
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
