"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Settings, Globe, Palette, Image as ImageIcon, Search, ShoppingBag, Users, BarChart3, Save, Eye, Upload } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    // Site Settings
    siteName: "Estenzo",
    siteDescription: "Premium Fashion Store UAE - Designer Clothing & Accessories",
    siteKeywords: "fashion UAE, designer clothing Dubai, premium fashion Abu Dhabi, online shopping UAE",
    siteUrl: "https://estenzo.ae",
    logoUrl: "/logo.png",
    
    // SEO Settings
    metaTitle: "Estenzo - Premium Fashion Store UAE | Latest Trends & Designer Clothing",
    metaDescription: "Discover the latest fashion trends at Estenzo UAE. Shop premium clothing, designer wear, shoes, and accessories. Fast delivery across UAE. Free shipping on orders over AED 200.",
    googleAnalytics: "",
    facebookPixel: "",
    
    // Branding
    primaryColor: "#930000",
    secondaryColor: "#ffffff",
    accentColor: "#f3f4f6",
    fontFamily: "Inter",
    
    // Business Settings
    businessName: "Estenzo Fashion LLC",
    businessAddress: "Business Bay, Dubai, UAE",
    businessPhone: "+971 4 123 4567",
    businessEmail: "info@estenzo.ae",
    vatNumber: "100123456700003",
    
    // Shipping
    freeShippingThreshold: "200",
    standardShippingFee: "25",
    expressShippingFee: "50",
    
    // Features
    enableWishlist: true,
    enableReviews: true,
    enableChat: true,
    enableNewsLetter: true,
    
    // Social Media
    instagram: "https://instagram.com/estenzo_uae",
    facebook: "https://facebook.com/estenzo.uae",
    whatsapp: "+971501234567",
    tiktok: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Settings saved:", settings);
      alert("Settings saved successfully!");
      setIsSaving(false);
    }, 2000);
  };

  const generateSEOPreview = () => {
    return {
      title: settings.metaTitle,
      description: settings.metaDescription,
      url: settings.siteUrl
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Store Settings</h1>
            <p className="text-gray-600 mt-2">Customize your store appearance, SEO, and business settings</p>
          </div>
          <div className="flex gap-3">
            <Link href="/admin">
              <Button variant="outline">
                Back to Dashboard
              </Button>
            </Link>
            <Button onClick={handleSave} disabled={isSaving} className="bg-red-900 hover:bg-red-800">
              {isSaving ? (
                <>
                  <Save className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="seo" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="branding" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Branding
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Business
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Features
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Social
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Site Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => handleInputChange("siteName", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea
                      id="siteDescription"
                      value={settings.siteDescription}
                      onChange={(e) => handleInputChange("siteDescription", e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="siteUrl">Site URL</Label>
                    <Input
                      id="siteUrl"
                      value={settings.siteUrl}
                      onChange={(e) => handleInputChange("siteUrl", e.target.value)}
                      placeholder="https://estenzo.ae"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Logo & Images</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="logoUrl">Logo URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="logoUrl"
                        value={settings.logoUrl}
                        onChange={(e) => handleInputChange("logoUrl", e.target.value)}
                      />
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {settings.logoUrl && (
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600 mb-2">Logo Preview:</p>
                      <Image
                        src={settings.logoUrl}
                        alt="Logo Preview"
                        width={120}
                        height={36}
                        className="h-9 w-auto opacity-90"
                      />
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-600">
                    <p><strong>Recommended:</strong> PNG format, transparent background</p>
                    <p><strong>Size:</strong> 8000x2400px (10:3 ratio) or similar wide format</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SEO Settings */}
          <TabsContent value="seo">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meta Tags</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={settings.metaTitle}
                      onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                      maxLength={60}
                    />
                    <p className="text-xs text-gray-500 mt-1">{settings.metaTitle.length}/60 characters</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={settings.metaDescription}
                      onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                      rows={3}
                      maxLength={160}
                    />
                    <p className="text-xs text-gray-500 mt-1">{settings.metaDescription.length}/160 characters</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="siteKeywords">Keywords</Label>
                    <Textarea
                      id="siteKeywords"
                      value={settings.siteKeywords}
                      onChange={(e) => handleInputChange("siteKeywords", e.target.value)}
                      rows={2}
                      placeholder="fashion UAE, designer clothing Dubai, premium fashion Abu Dhabi"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="text-blue-600 text-lg font-medium line-clamp-1">
                      {generateSEOPreview().title}
                    </div>
                    <div className="text-green-700 text-sm mt-1">
                      {generateSEOPreview().url}
                    </div>
                    <div className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {generateSEOPreview().description}
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div>
                      <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                      <Input
                        id="googleAnalytics"
                        value={settings.googleAnalytics}
                        onChange={(e) => handleInputChange("googleAnalytics", e.target.value)}
                        placeholder="G-XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="facebookPixel">Facebook Pixel ID</Label>
                      <Input
                        id="facebookPixel"
                        value={settings.facebookPixel}
                        onChange={(e) => handleInputChange("facebookPixel", e.target.value)}
                        placeholder="123456789012345"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Branding */}
          <TabsContent value="branding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primaryColor"
                        type="color"
                        value={settings.primaryColor}
                        onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                        className="w-16 h-10 p-1 border rounded"
                      />
                      <Input
                        value={settings.primaryColor}
                        onChange={(e) => handleInputChange("primaryColor", e.target.value)}
                        placeholder="#930000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondaryColor"
                        type="color"
                        value={settings.secondaryColor}
                        onChange={(e) => handleInputChange("secondaryColor", e.target.value)}
                        className="w-16 h-10 p-1 border rounded"
                      />
                      <Input
                        value={settings.secondaryColor}
                        onChange={(e) => handleInputChange("secondaryColor", e.target.value)}
                        placeholder="#ffffff"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="fontFamily">Font Family</Label>
                    <Select value={settings.fontFamily} onValueChange={(value) => handleInputChange("fontFamily", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inter">Inter (Recommended)</SelectItem>
                        <SelectItem value="Roboto">Roboto</SelectItem>
                        <SelectItem value="Open Sans">Open Sans</SelectItem>
                        <SelectItem value="Montserrat">Montserrat</SelectItem>
                        <SelectItem value="Poppins">Poppins</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Color Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div 
                      className="p-4 rounded-lg text-white"
                      style={{ backgroundColor: settings.primaryColor }}
                    >
                      <h3 className="font-semibold">Primary Color</h3>
                      <p className="text-sm opacity-90">Buttons, links, highlights</p>
                    </div>
                    
                    <div 
                      className="p-4 rounded-lg border"
                      style={{ backgroundColor: settings.secondaryColor, color: settings.primaryColor }}
                    >
                      <h3 className="font-semibold">Secondary Color</h3>
                      <p className="text-sm opacity-75">Background, cards, text</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <Button 
                        className="text-white"
                        style={{ backgroundColor: settings.primaryColor }}
                      >
                        Sample Button
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Business Settings */}
          <TabsContent value="business">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={settings.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessAddress">Business Address</Label>
                    <Textarea
                      id="businessAddress"
                      value={settings.businessAddress}
                      onChange={(e) => handleInputChange("businessAddress", e.target.value)}
                      rows={2}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessPhone">Phone Number</Label>
                    <Input
                      id="businessPhone"
                      value={settings.businessPhone}
                      onChange={(e) => handleInputChange("businessPhone", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessEmail">Business Email</Label>
                    <Input
                      id="businessEmail"
                      type="email"
                      value={settings.businessEmail}
                      onChange={(e) => handleInputChange("businessEmail", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="vatNumber">VAT Number</Label>
                    <Input
                      id="vatNumber"
                      value={settings.vatNumber}
                      onChange={(e) => handleInputChange("vatNumber", e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="freeShippingThreshold">Free Shipping Threshold (AED)</Label>
                    <Input
                      id="freeShippingThreshold"
                      type="number"
                      value={settings.freeShippingThreshold}
                      onChange={(e) => handleInputChange("freeShippingThreshold", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="standardShippingFee">Standard Shipping Fee (AED)</Label>
                    <Input
                      id="standardShippingFee"
                      type="number"
                      value={settings.standardShippingFee}
                      onChange={(e) => handleInputChange("standardShippingFee", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="expressShippingFee">Express Shipping Fee (AED)</Label>
                    <Input
                      id="expressShippingFee"
                      type="number"
                      value={settings.expressShippingFee}
                      onChange={(e) => handleInputChange("expressShippingFee", e.target.value)}
                    />
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Current Policy:</strong> Free shipping on orders over AED {settings.freeShippingThreshold}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Features */}
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Website Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Wishlist Feature</Label>
                      <p className="text-sm text-gray-600">Allow customers to save favorite items</p>
                    </div>
                    <Switch
                      checked={settings.enableWishlist}
                      onCheckedChange={(checked) => handleInputChange("enableWishlist", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Product Reviews</Label>
                      <p className="text-sm text-gray-600">Enable customer reviews and ratings</p>
                    </div>
                    <Switch
                      checked={settings.enableReviews}
                      onCheckedChange={(checked) => handleInputChange("enableReviews", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Live Chat</Label>
                      <p className="text-sm text-gray-600">Customer support chat widget</p>
                    </div>
                    <Switch
                      checked={settings.enableChat}
                      onCheckedChange={(checked) => handleInputChange("enableChat", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Newsletter Signup</Label>
                      <p className="text-sm text-gray-600">Email newsletter subscription</p>
                    </div>
                    <Switch
                      checked={settings.enableNewsLetter}
                      onCheckedChange={(checked) => handleInputChange("enableNewsLetter", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Media */}
          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    value={settings.instagram}
                    onChange={(e) => handleInputChange("instagram", e.target.value)}
                    placeholder="https://instagram.com/estenzo_uae"
                  />
                </div>
                
                <div>
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    value={settings.facebook}
                    onChange={(e) => handleInputChange("facebook", e.target.value)}
                    placeholder="https://facebook.com/estenzo.uae"
                  />
                </div>
                
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Business</Label>
                  <Input
                    id="whatsapp"
                    value={settings.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    placeholder="+971501234567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="tiktok">TikTok</Label>
                  <Input
                    id="tiktok"
                    value={settings.tiktok}
                    onChange={(e) => handleInputChange("tiktok", e.target.value)}
                    placeholder="https://tiktok.com/@estenzo_uae"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
