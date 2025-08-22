# 🛍️ Estenzo - Premium UAE Fashion Ecommerce Store

A modern, full-featured ecommerce platform built with Next.js 15, designed specifically for the UAE fashion market. Features mobile-first design, comprehensive admin dashboard, and complete MongoDB integration.

## ✨ Features

### 🎨 Frontend Features
- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **UAE-Focused**: Localized for Dubai/Abu Dhabi market with Arabic support
- **Product Showcase**: Advanced product cards with discount display
- **Shopping Cart**: Full cart functionality with quantity management
- **Wishlist**: Save favorite products for later
- **Search & Filter**: Advanced product search and category filtering
- **SEO Optimized**: Meta tags, schema markup, and local SEO

### 🛠️ Admin Dashboard
- **Product Management**: Add, edit, and manage products
- **Order Tracking**: Monitor and manage customer orders
- **Analytics**: Sales graphs, profit tracking, and business insights
- **Inventory Management**: Stock level monitoring and alerts
- **Settings**: Comprehensive store configuration
- **Database Management**: One-click seeding and status monitoring

### 🗄️ Backend Features
- **MongoDB Integration**: Complete database setup with Mongoose
- **RESTful APIs**: Full CRUD operations for all entities
- **Analytics Engine**: Sales tracking and profit calculations
- **Inventory System**: Real-time stock management
- **User Management**: Customer accounts and order history
- **Security**: JWT authentication and data validation

### 📱 Mobile Optimization
- **Responsive Design**: Works perfectly on all device sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Loading**: Optimized images and code splitting
- **PWA Ready**: Progressive Web App capabilities

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with bcryptjs
- **Icons**: Lucide React
- **Styling**: Custom CSS with Tailwind

## 📁 Project Structure

```
estenzo-ecommerce-store/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin dashboard pages
│   │   ├── api/               # API endpoints
│   │   ├── products/          # Product pages
│   │   ├── cart/              # Shopping cart
│   │   └── ...               # Other pages
│   ├── components/            # Reusable React components
│   │   ├── ui/               # shadcn/ui components
│   │   └── ...               # Custom components
│   ├── lib/                  # Utility functions
│   ├── models/               # MongoDB schemas
│   └── hooks/                # Custom React hooks
├── public/                    # Static assets
├── data.json                 # Sample product data
└── ...                       # Config files
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB database
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/estenzo-ecommerce-store.git
cd estenzo-ecommerce-store
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/estenzo-store
# or MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/estenzo-store

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Email (Optional)
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@estenzo.com

# Payment (Optional - for future integration)
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Storage (Optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 4. Database Setup
The project includes an automatic seeding system:

```bash
# Start the development server
npm run dev

# Visit http://localhost:3000/admin
# Click "Seed Database" to populate with sample data
```

### 5. Run the Project
```bash
npm run dev
```

Visit `http://localhost:3000` to see your store!

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products with filtering
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Analytics
- `GET /api/analytics` - Get sales analytics and insights

### Settings
- `GET /api/settings` - Get store settings
- `PUT /api/settings` - Update store settings

### Database
- `POST /api/seed` - Seed database with sample data

## 🎯 Key Features Breakdown

### Product Management
- Advanced product cards with discount percentages
- Category-based filtering
- Stock level tracking
- Profit margin calculations
- SEO-friendly URLs and metadata

### Shopping Experience
- Intuitive shopping cart with quantity controls
- Wishlist functionality
- Advanced search and filtering
- Mobile-optimized checkout process
- Real-time inventory updates

### Admin Dashboard
- **Overview**: Key metrics and database status
- **Products**: Manage inventory and pricing
- **Orders**: Track sales and customer orders
- **Analytics**: Sales graphs and profit tracking
- **Settings**: Store configuration and SEO
- **Database**: Seeding and maintenance tools

### UAE Market Focus
- Currency in AED (United Arab Emirates Dirham)
- Localized for Dubai/Abu Dhabi markets
- Arabic language support ready
- Local SEO optimization
- Mobile-first approach for regional preferences

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **Netlify**: `npm run build && npm run export`
- **Heroku**: Add `package.json` scripts for build
- **DigitalOcean**: Use Docker for containerized deployment

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Input validation and sanitization
- CORS configuration
- Environment variable protection
- MongoDB injection prevention

## 📈 Analytics & Monitoring

- Real-time sales tracking
- Profit margin analysis
- Top-selling products insights
- Category performance metrics
- Low stock alerts
- Customer behavior analytics

## 🌍 SEO & Performance

- Meta tags optimization
- Schema markup for products
- Image optimization
- Code splitting
- Lazy loading
- Mobile-first indexing ready

## 🛡️ Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email support@estenzo.com or join our Discord community.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Vercel for hosting and deployment
- MongoDB for the database solution

---

**Made with ❤️ for the UAE fashion market**

## 📞 Contact

- **Website**: [estenzo.com](https://estenzo.com)
- **Email**: info@estenzo.com
- **Phone**: +971 XX XXX XXXX
- **Address**: Dubai, United Arab Emirates

---

*This is a complete ecommerce solution ready for production use. Customize as needed for your specific business requirements.*
