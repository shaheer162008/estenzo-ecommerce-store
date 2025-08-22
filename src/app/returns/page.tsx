import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw, Calendar, Package, CreditCard, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Returns & Refunds</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not completely satisfied? No problem! Our hassle-free return policy makes 
            it easy to return or exchange your purchase.
          </p>
        </div>

        {/* Return Policy Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Return Policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">30-Day Window</h3>
                <p className="text-gray-600 text-sm">
                  Return items within 30 days of delivery for a full refund
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Original Condition</h3>
                <p className="text-gray-600 text-sm">
                  Items must be unused with original tags and packaging
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <RotateCcw className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Easy Process</h3>
                <p className="text-gray-600 text-sm">
                  Simple online return request system with prepaid labels
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CreditCard className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quick Refunds</h3>
                <p className="text-gray-600 text-sm">
                  Refunds processed within 3-5 business days of receipt
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Return Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How to Return an Item</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Step-by-Step Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Initiate Return Request</h4>
                    <p className="text-gray-600 text-sm">
                      Log into your account and go to Order History. Click &quot;Return Item&quot; 
                      next to the product you want to return.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Select Return Reason</h4>
                    <p className="text-gray-600 text-sm">
                      Choose from options like &quot;Doesn&apos;t fit&quot;, &quot;Not as described&quot;, 
                      &quot;Defective&quot;, or &quot;Changed mind&quot;.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Print Return Label</h4>
                    <p className="text-gray-600 text-sm">
                      We&apos;ll email you a prepaid return shipping label. Print it and 
                      attach it to the package.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Package & Ship</h4>
                    <p className="text-gray-600 text-sm">
                      Pack the item securely in its original packaging and drop it 
                      off at any authorized shipping location.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-semibold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Receive Refund</h4>
                    <p className="text-gray-600 text-sm">
                      Once we receive and process your return, your refund will be 
                      issued to your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">Need Help?</CardTitle>
                  <CardDescription>
                    Our customer service team is here to assist you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Live chat support available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Email support within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Phone support during business hours</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-red-900 hover:bg-red-800">
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Return</CardTitle>
                  <CardDescription>
                    Have your order number ready?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-red-900 text-red-900 hover:bg-red-50">
                    Start Return Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Return Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Unused items in original packaging</li>
                  <li>• Items with original tags attached</li>
                  <li>• Electronics in original condition</li>
                  <li>• Books without markings or damage</li>
                  <li>• Clothing without wear or odors</li>
                  <li>• Home goods in new condition</li>
                  <li>• Toys in original packaging</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized or custom items</li>
                  <li>• Opened software or digital products</li>
                  <li>• Health and personal care items</li>
                  <li>• Perishable goods</li>
                  <li>• Items damaged by misuse</li>
                  <li>• Final sale or clearance items</li>
                  <li>• Items returned after 30 days</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Refund Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Refund Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Return Received:</span>
                    <Badge variant="secondary">1-2 days</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Refund Processed:</span>
                    <Badge variant="secondary">3-5 days</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Bank Processing:</span>
                    <Badge variant="secondary">1-3 days</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Original Payment Method</h4>
                    <p className="text-sm text-gray-600">
                      Refunds are issued to the original payment method used for purchase
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Store Credit</h4>
                    <p className="text-sm text-gray-600">
                      Available as an option for faster processing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Return Shipping</h4>
                    <p className="text-sm text-gray-600">
                      Free for defective items or our error
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Original Shipping</h4>
                    <p className="text-sm text-gray-600">
                      Non-refundable unless item was defective
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Exchanges */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Exchanges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Size Exchanges</h3>
              <p className="text-gray-600 mb-4">
                Need a different size? We offer free size exchanges for clothing and shoes 
                within 30 days of purchase.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Same item, different size only</li>
                <li>• Subject to availability</li>
                <li>• Free exchange shipping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Defective Items</h3>
              <p className="text-gray-600 mb-4">
                Received a defective item? We&apos;ll send a replacement immediately at no cost to you.
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Immediate replacement sent</li>
                <li>• No return shipping required</li>
                <li>• Full refund if replacement unavailable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
