import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import { Sales, Product } from '@/models'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '30d' // 7d, 30d, 90d, 1y
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    // Calculate date range
    let dateFilter: Record<string, any> = {}
    if (startDate && endDate) {
      dateFilter = {
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      }
    } else {
      const now = new Date()
      let daysBack = 30
      
      switch (period) {
        case '7d': daysBack = 7; break
        case '30d': daysBack = 30; break
        case '90d': daysBack = 90; break
        case '1y': daysBack = 365; break
      }
      
      const startOfPeriod = new Date(now.getTime() - (daysBack * 24 * 60 * 60 * 1000))
      dateFilter = {
        createdAt: { $gte: startOfPeriod, $lte: now }
      }
    }

    // Aggregate sales data
    const salesAggregation = await Sales.aggregate([
      { $match: { ...dateFilter, status: 'completed' } },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
          totalProfit: { $sum: '$profit' },
          totalOrders: { $sum: 1 },
          totalQuantity: { $sum: '$quantity' },
          averageOrderValue: { $avg: '$totalPrice' }
        }
      }
    ])

    // Sales by day for chart
    const salesByDay = await Sales.aggregate([
      { $match: { ...dateFilter, status: 'completed' } },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
          },
          revenue: { $sum: '$totalPrice' },
          profit: { $sum: '$profit' },
          orders: { $sum: 1 }
        }
      },
      { $sort: { '_id': 1 } }
    ])

    // Top selling products
    const topProducts = await Sales.aggregate([
      { $match: { ...dateFilter, status: 'completed' } },
      {
        $group: {
          _id: '$productId',
          totalSales: { $sum: '$quantity' },
          totalRevenue: { $sum: '$totalPrice' },
          totalProfit: { $sum: '$profit' }
        }
      },
      { $sort: { totalRevenue: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'product'
        }
      },
      { $unwind: '$product' },
      {
        $project: {
          name: '$product.name',
          image: '$product.image',
          totalSales: 1,
          totalRevenue: 1,
          totalProfit: 1,
          profitMargin: {
            $multiply: [
              { $divide: ['$totalProfit', '$totalRevenue'] },
              100
            ]
          }
        }
      }
    ])

    // Sales by category
    const salesByCategory = await Sales.aggregate([
      { $match: { ...dateFilter, status: 'completed' } },
      {
        $lookup: {
          from: 'products',
          localField: 'productId',
          foreignField: '_id',
          as: 'product'
        }
      },
      { $unwind: '$product' },
      {
        $group: {
          _id: '$product.category',
          totalSales: { $sum: '$quantity' },
          totalRevenue: { $sum: '$totalPrice' },
          totalProfit: { $sum: '$profit' }
        }
      },
      { $sort: { totalRevenue: -1 } }
    ])

    // Low stock products
    const lowStockProducts = await Product.find({
      stock: { $lte: 10 },
      isActive: true
    }).select('name stock sku image').limit(10)

    // Recent sales
    const recentSales = await Sales.find(dateFilter)
      .populate('productId', 'name image')
      .sort({ createdAt: -1 })
      .limit(10)

    const analytics = salesAggregation[0] || {
      totalRevenue: 0,
      totalProfit: 0,
      totalOrders: 0,
      totalQuantity: 0,
      averageOrderValue: 0
    }

    return NextResponse.json({
      success: true,
      data: {
        analytics: {
          ...analytics,
          profitMargin: analytics.totalRevenue > 0 
            ? ((analytics.totalProfit / analytics.totalRevenue) * 100).toFixed(2)
            : 0
        },
        salesByDay,
        topProducts,
        salesByCategory,
        lowStockProducts,
        recentSales,
        period,
        dateRange: dateFilter
      }
    })

  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch analytics',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
