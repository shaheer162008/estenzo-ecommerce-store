"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, User, Heart, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Estenzo - UAE Premium Fashion Store"
              width={40}
              height={40}
              className="h-10 w-10 opacity-90 hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Search fashion, clothing, accessories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 h-10 focus:ring-2 focus:ring-red-900"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/products" className="text-gray-700 hover:text-red-900 font-medium transition-colors">
              Shop
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-red-900 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-red-50">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-900" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-red-50">
                <User className="h-5 w-5 text-gray-600 hover:text-red-900" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="p-2 relative hover:bg-red-50">
                <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-red-900" />
                <span className="absolute -top-1 -right-1 bg-red-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="p-2 relative">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] font-medium">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white animate-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search fashion, clothing..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 h-10 focus:ring-2 focus:ring-red-900"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </form>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-1">
                <Link 
                  href="/products" 
                  className="text-gray-700 hover:text-red-900 hover:bg-red-50 font-medium py-3 px-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop All Fashion
                </Link>
                <Link 
                  href="/categories" 
                  className="text-gray-700 hover:text-red-900 hover:bg-red-50 font-medium py-3 px-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-red-900 hover:bg-red-50 font-medium py-3 px-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-red-900 hover:bg-red-50 font-medium py-3 px-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Account Links */}
              <div className="border-t pt-4 flex flex-col space-y-1">
                <Link 
                  href="/account" 
                  className="flex items-center text-gray-700 hover:text-red-900 hover:bg-red-50 font-medium py-3 px-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-3" />
                  My Account
                </Link>
                <Link 
                  href="/wishlist" 
                  className="flex items-center text-gray-700 hover:text-red-900 hover:bg-red-50 font-medium py-3 px-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="h-4 w-4 mr-3" />
                  Wishlist
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="border-t pt-4">
                <Button className="w-full bg-red-900 hover:bg-red-800 text-white font-medium">
                  Shop Latest Collection
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
