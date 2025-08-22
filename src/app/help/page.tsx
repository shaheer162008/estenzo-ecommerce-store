"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageSquare, Phone, Mail, BookOpen, Truck, CreditCard, RotateCcw, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: ShoppingCart, title: "Orders & Payment", count: 12, color: "bg-blue-100 text-blue-700" },
    { icon: Truck, title: "Shipping & Delivery", count: 8, color: "bg-green-100 text-green-700" },
    { icon: RotateCcw, title: "Returns & Refunds", count: 10, color: "bg-orange-100 text-orange-700" },
    { icon: User, title: "Account & Profile", count: 6, color: "bg-purple-100 text-purple-700" },
    { icon: CreditCard, title: "Billing & Pricing", count: 5, color: "bg-red-100 text-red-700" },
    { icon: BookOpen, title: "Product Information", count: 15, color: "bg-yellow-100 text-yellow-700" },
  ];

  const popularArticles = [
    { title: "How to track my order?", category: "Shipping", views: "2.5k" },
    { title: "What is your return policy?", category: "Returns", views: "2.1k" },
    { title: "How to change my password?", category: "Account", views: "1.8k" },
    { title: "Payment methods accepted", category: "Payment", views: "1.6k" },
    { title: "How to cancel an order?", category: "Orders", views: "1.4k" },
    { title: "International shipping rates", category: "Shipping", views: "1.2k" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to your questions, get support, and learn how to make the most 
            of your Estenzo shopping experience.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, and more..."
              className="pl-12 pr-4 py-6 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-900 hover:bg-red-800">
              Search
            </Button>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Need Immediate Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MessageSquare className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with our support team in real-time
                </p>
                <Button className="bg-red-900 hover:bg-red-800">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Speak directly with a support representative
                </p>
                <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-50">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Send us a detailed message about your issue
                </p>
                <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-50">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.count} articles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 hover:text-red-900">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-gray-500 text-sm">{article.views} views</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      How long does shipping take?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600">
                        Shipping times vary by location and shipping method. Standard shipping 
                        typically takes 5-7 business days, express shipping takes 2-3 business 
                        days, and overnight shipping delivers the next business day. International 
                        shipping can take 7-21 business days depending on the destination.
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-2">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      Can I change or cancel my order?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600">
                        Orders can be modified or cancelled within 2 hours of placement, 
                        provided they haven&apos;t entered processing. After this window, 
                        changes may not be possible. Contact our support team immediately 
                        if you need to make changes to your order.
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-3">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      What payment methods do you accept?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600">
                        We accept all major credit cards (Visa, MasterCard, American Express, 
                        Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. For certain 
                        orders, we also offer buy now, pay later options through Klarna and Afterpay.
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-4">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      How do I track my order?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600">
                        Once your order ships, you&apos;ll receive a tracking number via email. 
                        You can also track your order by logging into your account and visiting 
                        the &quot;Order History&quot; section. Real-time tracking updates are 
                        available 24/7.
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-5">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      Do you offer international shipping?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600">
                        Yes, we ship to over 50 countries worldwide. International shipping 
                        rates and delivery times vary by destination. Customers are responsible 
                        for any customs duties, taxes, or fees imposed by their country.
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>

              <AccordionItem value="item-6">
                <Card>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-semibold text-left">
                      How do I create an account?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="pt-0">
                      <p className="text-gray-600">
                        Creating an account is easy! Click the &quot;Sign Up&quot; button in the 
                        top right corner of any page, enter your email address and create a 
                        password. You can also create an account during checkout for faster 
                        future purchases.
                      </p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help you 
              with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-900 hover:bg-red-800">
                Contact Support
              </Button>
              <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-50">
                Submit a Ticket
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
