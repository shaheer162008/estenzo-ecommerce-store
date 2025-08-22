import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, Package, Shield, DollarSign } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Shipping Information</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, reliable, and secure shipping to your doorstep. Learn about our shipping 
            options, delivery times, and policies.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Truck className="h-8 w-8 text-red-900" />
                  <Badge variant="secondary">Most Popular</Badge>
                </div>
                <CardTitle>Standard Shipping</CardTitle>
                <CardDescription>
                  Reliable delivery for everyday orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-semibold">5-7 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-semibold">$5.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Free Shipping:</span>
                    <span className="font-semibold">Orders over $50</span>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-900">
                      Perfect for non-urgent orders. Tracking included.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Clock className="h-8 w-8 text-red-900" />
                  <Badge className="bg-red-900">Fast</Badge>
                </div>
                <CardTitle>Express Shipping</CardTitle>
                <CardDescription>
                  Faster delivery when you need it quick
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-semibold">2-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-semibold">$12.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Free Shipping:</span>
                    <span className="font-semibold">Orders over $100</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      Priority handling with enhanced tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Package className="h-8 w-8 text-red-900" />
                  <Badge variant="destructive">Urgent</Badge>
                </div>
                <CardTitle>Overnight Shipping</CardTitle>
                <CardDescription>
                  Next business day delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-semibold">1 business day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-semibold">$24.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Order By:</span>
                    <span className="font-semibold">2:00 PM EST</span>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-900">
                      Premium service with signature confirmation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* International Shipping */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">International Shipping</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-900" />
                  Countries We Ship To
                </CardTitle>
                <CardDescription>
                  We deliver to over 50 countries worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">North America</h4>
                    <p className="text-sm text-gray-600">Canada, Mexico, United States</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Europe</h4>
                    <p className="text-sm text-gray-600">
                      United Kingdom, Germany, France, Italy, Spain, Netherlands, 
                      Belgium, Austria, Switzerland, and more
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Asia Pacific</h4>
                    <p className="text-sm text-gray-600">
                      Australia, Japan, Singapore, South Korea, Hong Kong, New Zealand
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Other Regions</h4>
                    <p className="text-sm text-gray-600">
                      Brazil, Argentina, South Africa, UAE, Israel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-red-900" />
                  International Shipping Rates
                </CardTitle>
                <CardDescription>
                  Delivery times and costs by region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-semibold">Canada & Mexico</span>
                      <p className="text-sm text-gray-600">7-14 business days</p>
                    </div>
                    <span className="font-semibold">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-semibold">Europe</span>
                      <p className="text-sm text-gray-600">10-18 business days</p>
                    </div>
                    <span className="font-semibold">$19.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-semibold">Asia Pacific</span>
                      <p className="text-sm text-gray-600">12-21 business days</p>
                    </div>
                    <span className="font-semibold">$24.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <span className="font-semibold">Other Regions</span>
                      <p className="text-sm text-gray-600">15-25 business days</p>
                    </div>
                    <span className="font-semibold">$29.99</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Shipping Policies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Shipping Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Processing Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  <strong>Standard Orders:</strong> 1-2 business days
                </p>
                <p className="text-gray-600">
                  <strong>Custom Orders:</strong> 3-5 business days
                </p>
                <p className="text-gray-600">
                  <strong>Pre-Orders:</strong> Ships on release date
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Processing time is the time it takes to prepare your order before shipping.
                  This does not include shipping transit time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Restrictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  • P.O. Boxes accepted for standard shipping only
                </p>
                <p className="text-gray-600">
                  • Some items cannot ship to APO/FPO addresses
                </p>
                <p className="text-gray-600">
                  • Oversized items may require special handling
                </p>
                <p className="text-gray-600">
                  • Age verification required for certain products
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  Track your order anytime through your account dashboard or with the 
                  tracking number provided via email.
                </p>
                <p className="text-gray-600">
                  You&apos;ll receive notifications for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Order confirmation</li>
                  <li>Order shipped</li>
                  <li>Out for delivery</li>
                  <li>Delivered</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-900" />
                  Package Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  All packages are insured against loss or damage during transit.
                </p>
                <p className="text-gray-600">
                  If your package arrives damaged or doesn&apos;t arrive at all, we&apos;ll:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Replace the item at no cost</li>
                  <li>Provide a full refund</li>
                  <li>Work with carriers to resolve issues</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Important Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Shipping Address</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Ensure your shipping address is complete and accurate</li>
                <li>• We cannot change addresses once orders are shipped</li>
                <li>• Delivery delays may occur for incorrect addresses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Customs & Duties</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• International customers are responsible for customs fees</li>
                <li>• Duties and taxes are determined by destination country</li>
                <li>• Packages may be held by customs for inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
