import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-context"
import { WishlistProvider } from "@/components/wishlist-context"

// UAE-focused SEO optimization
export const metadata: Metadata = {
  title: {
    default: "Estenzo - Premium Fashion & Lifestyle Store UAE | Dubai Abu Dhabi",
    template: "%s | Estenzo UAE"
  },
  description: "Discover premium fashion, electronics, home decor & lifestyle products in UAE. Fast delivery across Dubai, Abu Dhabi, Sharjah. Free shipping on orders over AED 200. Shop now!",
  keywords: [
    "UAE fashion store", "Dubai shopping", "Abu Dhabi fashion", "premium clothing UAE",
    "electronics Dubai", "home decor UAE", "lifestyle products", "fashion boutique",
    "online shopping UAE", "luxury fashion", "designer clothes Dubai",
    "premium accessories", "home & living", "UAE ecommerce", "fashion trends",
    "styling UAE", "premium brands", "clothing store Dubai", "fashion online UAE"
  ],
  authors: [{ name: "Estenzo UAE" }],
  creator: "Estenzo",
  publisher: "Estenzo UAE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://estenzo.ae',
    siteName: 'Estenzo UAE',
    title: 'Estenzo - Premium Fashion & Lifestyle Store UAE',
    description: 'Discover premium fashion, electronics, home decor & lifestyle products in UAE. Fast delivery across Dubai, Abu Dhabi, Sharjah.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Estenzo UAE - Premium Fashion Store'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estenzo - Premium Fashion & Lifestyle Store UAE',
    description: 'Discover premium fashion, electronics, home decor & lifestyle products in UAE. Fast delivery across Dubai, Abu Dhabi, Sharjah.',
    images: ['/logo.png'],
    creator: '@EstenzoUAE'
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://estenzo.ae',
    languages: {
      'en-AE': 'https://estenzo.ae',
      'ar-AE': 'https://estenzo.ae/ar'
    }
  },
  category: 'ecommerce',
  other: {
    'geo.region': 'AE',
    'geo.placename': 'Dubai, UAE',
    'geo.position': '25.2048;55.2708'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AE" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#930000" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta name="distribution" content="local" />
        <meta name="coverage" content="UAE" />
        <meta name="target" content="UAE" />
        <meta name="audience" content="UAE residents" />
        <meta name="language" content="English, Arabic" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data for UAE Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Estenzo UAE",
              "description": "Premium Fashion & Lifestyle Store in UAE",
              "url": "https://estenzo.ae",
              "logo": "https://estenzo.ae/logo.png",
              "image": "https://estenzo.ae/logo.png",
              "telephone": "+971-4-XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubai Marina",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2048",
                "longitude": "55.2708"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "22:00"
              },
              "priceRange": "$$",
              "currenciesAccepted": "AED",
              "paymentAccepted": ["Credit Card", "Cash", "Apple Pay", "Google Pay"],
              "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background">
        <CartProvider>
          <WishlistProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
