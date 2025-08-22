"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingCart, Search } from "lucide-react";
import data from "../../../data.json";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";
  
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [sortBy, setSortBy] = useState("relevance");
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  const categories = ["All", "Electronics", "Fashion", "Home", "Books", "Toys"];

  useEffect(() => {
    let results = data.products;

    // Filter by search term
    if (searchTerm) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "All") {
      results = results.filter(product => product.category === selectedCategory);
    }

    // Sort results
    results = [...results].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default: // relevance
          return 0;
      }
    });

    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search params
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (selectedCategory && selectedCategory !== "All") params.set("category", selectedCategory);
    
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Search Products"}
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </form>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat === "All" ? "" : cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory && selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
            
            {(searchQuery || selectedCategory) && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  window.history.pushState(null, "", "/search");
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Search Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                      />
                    </Link>
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {product.stock < 20 ? "Limited" : "In Stock"}
                    </Badge>
                  </div>
                  
                  <div className="p-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold mb-2 hover:text-red-900 cursor-pointer line-clamp-2">
                        {/* Highlight search term in product name */}
                        {searchTerm ? (
                          <span dangerouslySetInnerHTML={{
                            __html: product.name.replace(
                              new RegExp(`(${searchTerm})`, 'gi'),
                              '<mark class="bg-yellow-200">$1</mark>'
                            )
                          }} />
                        ) : (
                          product.name
                        )}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    
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
                      <Badge variant="secondary" className="ml-2">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-red-900">
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
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery 
                  ? `We couldn't find any products matching "${searchQuery}"`
                  : "Try adjusting your search criteria"
                }
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Try:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Checking your spelling</li>
                <li>• Using fewer keywords</li>
                <li>• Browsing our categories</li>
              </ul>
              
              <div className="mt-6">
                <Link href="/products">
                  <Button>Browse All Products</Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {["headphones", "watch", "sneakers", "laptop", "phone"].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm(term)}
                  className="capitalize"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
