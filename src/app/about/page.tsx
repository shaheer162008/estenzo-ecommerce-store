import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Estenzo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about bringing you the best products at unbeatable prices. 
            Our mission is to make online shopping easy, reliable, and enjoyable for everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2024, Estenzo started with a simple vision: to create an ecommerce 
                platform that puts customers first. We believe that shopping online should be 
                seamless, secure, and satisfying.
              </p>
              <p>
                What began as a small startup has grown into a trusted marketplace serving 
                thousands of customers worldwide. We pride ourselves on our commitment to 
                quality, customer service, and innovation.
              </p>
              <p>
                Today, we offer a carefully curated selection of products across multiple 
                categories, from cutting-edge electronics to stylish fashion, home essentials, 
                educational books, and engaging toys.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why Choose Estenzo?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Quality products from trusted brands
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Competitive prices and regular deals
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Fast and reliable shipping
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Excellent customer support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Secure payment processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Easy returns and refunds
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make is guided by what&apos;s best for our customers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Focus</h3>
                <p className="text-gray-600 text-sm">
                  We carefully select every product to ensure it meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything we do, from products to service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">
                  Connecting customers worldwide with amazing products and experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="font-semibold mb-1">John Smith</h3>
                <p className="text-gray-600 text-sm mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-xs">
                  Visionary leader with 10+ years in ecommerce
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm mb-2">CTO</p>
                <p className="text-gray-600 text-xs">
                  Tech expert ensuring our platform runs smoothly
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🎨</span>
                </div>
                <h3 className="font-semibold mb-1">Mike Davis</h3>
                <p className="text-gray-600 text-sm mb-2">Head of Design</p>
                <p className="text-gray-600 text-xs">
                  Creating beautiful and intuitive user experiences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Estenzo by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-900 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-900 mb-2">500+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-900 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
