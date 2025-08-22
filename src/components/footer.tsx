"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Estenzo Store"
                width={32}
                height={32}
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "/next.svg";
                }}
              />
              <span className="text-xl font-bold">Estenzo</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quality products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/deals" className="hover:text-white">Special Deals</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@estenzo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Store St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Estenzo Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
