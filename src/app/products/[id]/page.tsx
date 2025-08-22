"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft } from "lucide-react";
import data from "../../../../data.json";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = data.products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = data.products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-900">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <Card>
              <CardContent className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  ({product.rating}) • {product.stock} in stock
                </span>
              </div>

              <div className="text-4xl font-bold text-red-900 mb-6">
                ${product.price}
              </div>

              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="secondary" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-16">
          <CardContent className="p-6">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <h3 className="font-semibold mb-4">Product Description</h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <h3 className="font-semibold mb-4">Specifications</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Category:</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Stock:</span>
                    <span>{product.stock} available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Rating:</span>
                    <span>{product.rating}/5</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <h3 className="font-semibold mb-4">Customer Reviews</h3>
                <p className="text-gray-600">
                  No reviews yet. Be the first to review this product!
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                      />
                    </Link>
                    <div className="p-4">
                      <Link href={`/products/${relatedProduct.id}`}>
                        <h3 className="font-semibold mb-2 hover:text-red-900 cursor-pointer">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-red-900">
                          ${relatedProduct.price}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
