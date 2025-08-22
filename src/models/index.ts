import mongoose from 'mongoose'

// Product Schema with enhanced features
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number }, // For discount calculations
  discount: { type: Number, default: 0 }, // Discount percentage
  category: { type: String, required: true },
  image: { type: String, required: true },
  images: [{ type: String }], // Multiple product images
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  stock: { type: Number, required: true },
  costPrice: { type: Number, required: true }, // Cost price for profit calculation
  deliveryCharge: { type: Number, default: 0 },
  features: [{ type: String }],
  brand: { type: String },
  isNew: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  freeShipping: { type: Boolean, default: false },
  fastDelivery: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  tags: [{ type: String }],
  sku: { type: String, unique: true },
  weight: { type: Number }, // For shipping calculations
  dimensions: {
    length: { type: Number },
    width: { type: Number },
    height: { type: Number }
  },
  seoTitle: { type: String },
  seoDescription: { type: String },
  slug: { type: String, unique: true }
}, {
  timestamps: true
})

// Sales Schema for tracking sales and analytics
const SalesSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  costPrice: { type: Number, required: true },
  profit: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  deliveryCharge: { type: Number, default: 0 },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  paymentMethod: { type: String },
  status: { type: String, enum: ['pending', 'completed', 'cancelled', 'refunded'], default: 'pending' }
}, {
  timestamps: true
})

// Order Schema
const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    total: { type: Number }
  }],
  subtotal: { type: Number, required: true },
  tax: { type: Number, default: 0 },
  shipping: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
  paymentMethod: { type: String },
  shippingAddress: {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String, default: 'UAE' }
  },
  trackingNumber: { type: String },
  deliveredAt: { type: Date },
  notes: { type: String }
}, {
  timestamps: true
})

// Customer Schema
const CustomerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String, default: 'UAE' }
  },
  totalOrders: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
})

// Category Schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  isActive: { type: Boolean, default: true },
  seoTitle: { type: String },
  seoDescription: { type: String },
  slug: { type: String, unique: true }
}, {
  timestamps: true
})

// Analytics Schema for dashboard
const AnalyticsSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  totalSales: { type: Number, default: 0 },
  totalOrders: { type: Number, default: 0 },
  totalProfit: { type: Number, default: 0 },
  totalCustomers: { type: Number, default: 0 },
  averageOrderValue: { type: Number, default: 0 },
  topProducts: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    sales: { type: Number },
    revenue: { type: Number }
  }],
  salesByCategory: [{
    category: { type: String },
    sales: { type: Number },
    revenue: { type: Number }
  }]
}, {
  timestamps: true
})

// Settings Schema for website configuration
const SettingsSchema = new mongoose.Schema({
  siteName: { type: String, default: 'Estenzo' },
  siteDescription: { type: String, default: 'Premium Fashion Store UAE' },
  logo: { type: String },
  favicon: { type: String },
  currency: { type: String, default: 'AED' },
  taxRate: { type: Number, default: 5 },
  freeShippingThreshold: { type: Number, default: 200 },
  defaultDeliveryCharge: { type: Number, default: 25 },
  contactEmail: { type: String, default: 'info@estenzo.ae' },
  contactPhone: { type: String, default: '+971-4-XXX-XXXX' },
  address: { type: String, default: 'Dubai Marina, Dubai, UAE' },
  socialMedia: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    linkedin: { type: String }
  },
  seo: {
    metaTitle: { type: String },
    metaDescription: { type: String },
    keywords: [{ type: String }]
  },
  isMaintenanceMode: { type: Boolean, default: false }
}, {
  timestamps: true
})

// Export models
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)
export const Sales = mongoose.models.Sales || mongoose.model('Sales', SalesSchema)
export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)
export const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema)
export const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema)
export const Analytics = mongoose.models.Analytics || mongoose.model('Analytics', AnalyticsSchema)
export const Settings = mongoose.models.Settings || mongoose.model('Settings', SettingsSchema)
