"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Plus, 
  Settings,
  BarChart3,
  RefreshCw,
  Database
} from "lucide-react";

interface DatabaseStatus {
  isConnected: boolean;
  message: string;
  productsCount?: number;
  salesCount?: number;
  ordersCount?: number;
  error?: string;
}

export default function AdminDashboard() {
  const [dbStatus, setDbStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(false);

  const checkDatabaseStatus = async () => {
    try {
      const response = await fetch('/api/seed');
      const result = await response.json();
      setDbStatus(result.data);
    } catch (error) {
      console.error('Failed to check database:', error);
    }
  };

  const seedDatabase = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/seed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'seed' })
      });
      const result = await response.json();
      
      if (result.success) {
        alert('✅ Database seeded successfully!\n\n' + 
              `Products: ${result.data.products}\n` +
              `Categories: ${result.data.categories}\n` +
              `Settings: ${result.data.settings}`);
        await checkDatabaseStatus();
      } else {
        alert('❌ Failed to seed database: ' + result.message);
      }
    } catch (error) {
      console.error('Seeding failed:', error);
      alert('❌ Failed to seed database');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkDatabaseStatus();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Estenzo Store Management System</p>
        </div>
        
        <Button onClick={checkDatabaseStatus} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Status
        </Button>
      </div>

      {/* Database Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Status
          </CardTitle>
          <CardDescription>
            Current database state and seeding options
          </CardDescription>
        </CardHeader>
        <CardContent>
          {dbStatus ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">{dbStatus.products}</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">{dbStatus.categories}</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold">{dbStatus.settings}</div>
                  <div className="text-sm text-muted-foreground">Settings</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Badge variant={dbStatus.isSeeded ? "default" : "secondary"} className="text-sm">
                    {dbStatus.isSeeded ? "✅ Seeded" : "⚠️ Empty"}
                  </Badge>
                </div>
              </div>
              
              {!dbStatus.isSeeded && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Database Not Seeded</h4>
                  <p className="text-orange-700 mb-4">
                    Your database is empty. Click below to seed it with sample products, categories, and settings from data.json.
                  </p>
                  <Button 
                    onClick={seedDatabase} 
                    disabled={loading}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Seeding Database...
                      </>
                    ) : (
                      <>
                        <Package className="h-4 w-4 mr-2" />
                        Seed Database with Sample Data
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2" />
              <p>Checking database status...</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dbStatus?.products || 0}</div>
            <p className="text-xs text-muted-foreground">
              Active products in store
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dbStatus?.categories || 0}</div>
            <p className="text-xs text-muted-foreground">
              Product categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AED 0.00</div>
            <p className="text-xs text-muted-foreground">
              Total sales revenue
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Total orders placed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Management Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Product Management
            </CardTitle>
            <CardDescription>
              Add, edit, and manage your product catalog
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/products/new" className="block">
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Product
              </Button>
            </Link>
            <Link href="/products" className="block">
              <Button variant="outline" className="w-full">
                View All Products
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Store Settings
            </CardTitle>
            <CardDescription>
              Configure your store settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/settings" className="block">
              <Button className="w-full">
                <Settings className="h-4 w-4 mr-2" />
                Store Settings
              </Button>
            </Link>
            <Button variant="outline" className="w-full" onClick={() => window.open('/api/products', '_blank')}>
              View Products API
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Analytics & Reports
            </CardTitle>
            <CardDescription>
              View sales analytics and business insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              className="w-full" 
              onClick={() => window.open('/api/analytics', '_blank')}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full">
              Generate Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* API Endpoints Info */}
      <Card>
        <CardHeader>
          <CardTitle>Available API Endpoints</CardTitle>
          <CardDescription>
            MongoDB-powered APIs for your ecommerce store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Products API</h4>
              <div className="text-sm space-y-1">
                <p><code className="bg-muted px-2 py-1 rounded">GET /api/products</code> - List products</p>
                <p><code className="bg-muted px-2 py-1 rounded">POST /api/products</code> - Create product</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Analytics API</h4>
              <div className="text-sm space-y-1">
                <p><code className="bg-muted px-2 py-1 rounded">GET /api/analytics</code> - Sales analytics</p>
                <p><code className="bg-muted px-2 py-1 rounded">GET /api/settings</code> - Store settings</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
