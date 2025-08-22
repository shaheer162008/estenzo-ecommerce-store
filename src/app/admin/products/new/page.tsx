"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Eye } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    customUrl: "",
    stock: "",
    rating: "4.5",
  });

  const [preview, setPreview] = useState(false);

  const categories = ["Electronics", "Fashion", "Home", "Books", "Toys"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-generate custom URL from product name
      if (field === "name" && value) {
        updated.customUrl = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the product to your database
    console.log("Product data:", formData);
    alert("Product created successfully!");
    router.push("/admin");
  };

  const generatePreviewUrl = () => {
    return `/product/${formData.customUrl || "preview"}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin" className="inline-flex items-center text-red-900 hover:text-red-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-gray-600 mt-2">Create a new product for your store</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="customUrl">Custom URL *</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">/product/</span>
                      <Input
                        id="customUrl"
                        value={formData.customUrl}
                        onChange={(e) => handleInputChange("customUrl", e.target.value)}
                        placeholder="custom-product-url"
                        required
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      This will be your product URL: /product/{formData.customUrl || "your-url"}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Enter product description"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        placeholder="0.00"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="stock">Stock Quantity *</Label>
                      <Input
                        id="stock"
                        type="number"
                        value={formData.stock}
                        onChange={(e) => handleInputChange("stock", e.target.value)}
                        placeholder="0"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="image">Image URL *</Label>
                    <Input
                      id="image"
                      type="url"
                      value={formData.image}
                      onChange={(e) => handleInputChange("image", e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                      id="rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => handleInputChange("rating", e.target.value)}
                      placeholder="4.5"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" className="bg-red-900 hover:bg-red-800">
                      <Save className="h-4 w-4 mr-2" />
                      Save Product
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setPreview(!preview)}>
                      <Eye className="h-4 w-4 mr-2" />
                      {preview ? "Hide" : "Show"} Preview
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {formData.name ? (
                  <div className="space-y-4">
                    {formData.image && (
                      <img
                        src={formData.image}
                        alt={formData.name}
                        className="w-full h-48 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/next.svg";
                        }}
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{formData.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{formData.description}</p>
                      {formData.price && (
                        <p className="text-2xl font-bold text-red-900 mt-2">
                          ${formData.price}
                        </p>
                      )}
                      {formData.category && (
                        <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm mt-2">
                          {formData.category}
                        </span>
                      )}
                      {formData.stock && (
                        <p className="text-sm text-gray-600 mt-1">
                          {formData.stock} in stock
                        </p>
                      )}
                      <div className="text-sm text-gray-500 mt-4 p-2 bg-gray-50 rounded">
                        <strong>URL:</strong> {generatePreviewUrl()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Fill out the form to see preview
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
