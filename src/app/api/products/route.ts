import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import { Product } from '@/models'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const sortBy = searchParams.get('sortBy') || 'createdAt'
    const sortOrder = searchParams.get('sortOrder') || 'desc'

    // Build filter
    const filter: Record<string, any> = { isActive: true }
    
    if (category && category !== 'All') {
      filter.category = category
    }
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }

    // Build sort
    const sort: Record<string, 1 | -1> = {}
    if (sortBy === 'price') {
      sort.price = sortOrder === 'asc' ? 1 : -1
    } else if (sortBy === 'rating') {
      sort.rating = -1
    } else if (sortBy === 'name') {
      sort.name = sortOrder === 'asc' ? 1 : -1
    } else {
      sort.createdAt = -1
    }

    const skip = (page - 1) * limit

    // Execute queries
    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      Product.countDocuments(filter)
    ])

    // Calculate profit for each product
    const enhancedProducts = products.map(product => ({
      ...product,
      profit: product.price - product.costPrice,
      profitMargin: ((product.price - product.costPrice) / product.price * 100).toFixed(2)
    }))

    return NextResponse.json({
      success: true,
      data: {
        products: enhancedProducts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
          hasNext: page < Math.ceil(total / limit),
          hasPrev: page > 1
        }
      }
    })

  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch products',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()
    
    // Generate SKU and slug if not provided
    if (!body.sku) {
      body.sku = generateSKU(body.name)
    }
    if (!body.slug) {
      body.slug = generateSlug(body.name)
    }

    const product = await Product.create(body)

    return NextResponse.json({
      success: true,
      message: 'Product created successfully',
      data: product
    }, { status: 201 })

  } catch (error) {
    console.error('Create product error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to create product',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

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
