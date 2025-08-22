import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import { Product, Category, Settings } from '@/models'
import productsData from '@/../data.json'

function generateSKU(name: string): string {
  const prefix = name.slice(0, 3).toUpperCase()
  const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `${prefix}-${randomNum}`
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    const { action } = body

    if (action === 'seed') {
      // Clear existing data
      await Product.deleteMany({})
      await Category.deleteMany({})

      // Seed categories
      const uniqueCategories = [...new Set(productsData.products.map(p => p.category))]
      const categoryDocs = await Category.insertMany(
        uniqueCategories.map(cat => ({
          name: cat,
          description: `Premium ${cat.toLowerCase()} collection`,
          slug: generateSlug(cat),
          isActive: true
        }))
      )

      console.log(`✅ Seeded ${categoryDocs.length} categories`)

      // Enhanced products with additional fields
      const enhancedProducts = productsData.products.map(product => ({
        ...product,
        originalPrice: product.discount ? Math.round(product.price / (1 - product.discount / 100)) : product.price,
        costPrice: Math.round(product.price * 0.6), // Assuming 40% markup
        deliveryCharge: product.freeShipping ? 0 : 25,
        sku: generateSKU(product.name),
        slug: generateSlug(product.name),
        reviewCount: Math.floor(Math.random() * 50) + 5,
        tags: product.features?.slice(0, 3) || [],
        weight: Math.random() * 2 + 0.5, // Random weight between 0.5-2.5 kg
        dimensions: {
          length: Math.floor(Math.random() * 30) + 10,
          width: Math.floor(Math.random() * 20) + 5,
          height: Math.floor(Math.random() * 15) + 3
        },
        seoTitle: `${product.name} - Premium ${product.category} | Estenzo UAE`,
        seoDescription: `${product.description.slice(0, 150)}...`
      }))

      const productDocs = await Product.insertMany(enhancedProducts)
      console.log(`✅ Seeded ${productDocs.length} products`)

      // Create default settings if not exists
      let settings = await Settings.findOne()
      if (!settings) {
        settings = await Settings.create({
          siteName: 'Estenzo',
          siteDescription: 'Premium Fashion & Lifestyle Store UAE',
          currency: 'AED',
          taxRate: 5,
          freeShippingThreshold: 200,
          defaultDeliveryCharge: 25,
          contactEmail: 'info@estenzo.ae',
          contactPhone: '+971-4-XXX-XXXX',
          address: 'Dubai Marina, Dubai, UAE',
          socialMedia: {
            instagram: 'https://instagram.com/estenzo_uae',
            facebook: 'https://facebook.com/estenzo.uae'
          },
          seo: {
            metaTitle: 'Estenzo - Premium Fashion Store UAE | Dubai Abu Dhabi',
            metaDescription: 'Discover premium fashion, electronics, home decor & lifestyle products in UAE. Fast delivery across Dubai, Abu Dhabi, Sharjah.',
            keywords: ['UAE fashion', 'Dubai shopping', 'premium clothing', 'fashion store']
          }
        })
        console.log('✅ Created default settings')
      }

      return NextResponse.json({
        success: true,
        message: `Successfully seeded ${productDocs.length} products, ${categoryDocs.length} categories, and settings`,
        data: {
          products: productDocs.length,
          categories: categoryDocs.length,
          settings: settings ? 1 : 0
        }
      })

    } else if (action === 'clear') {
      // Clear all data
      await Product.deleteMany({})
      await Category.deleteMany({})
      await Settings.deleteMany({})

      return NextResponse.json({
        success: true,
        message: 'All data cleared successfully'
      })

    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid action. Use "seed" or "clear"'
      }, { status: 400 })
    }

  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to seed database',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    await dbConnect()

    const productCount = await Product.countDocuments()
    const categoryCount = await Category.countDocuments()
    const settingsCount = await Settings.countDocuments()

    return NextResponse.json({
      success: true,
      data: {
        products: productCount,
        categories: categoryCount,
        settings: settingsCount,
        isSeeded: productCount > 0
      }
    })

  } catch (error) {
    console.error('Database check error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to check database status',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
