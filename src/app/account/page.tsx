"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, Package, CreditCard, Settings } from "lucide-react";

export default function AccountPage() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    joinDate: "January 2024",
  };

  const orders = [
    {
      id: "ORD-001",
      date: "2024-12-15",
      status: "Delivered",
      total: 159.98,
      items: 2,
    },
    {
      id: "ORD-002",
      date: "2024-12-10",
      status: "Shipped",
      total: 89.99,
      items: 1,
    },
    {
      id: "ORD-003",
      date: "2024-12-05",
      status: "Processing",
      total: 249.97,
      items: 3,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-500";
      case "Shipped": return "bg-blue-500";
      case "Processing": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          <p className="text-gray-600">Manage your account settings and view your orders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-red-900" />
                </div>
                <h2 className="font-semibold text-lg mb-1">{user.name}</h2>
                <p className="text-gray-600 text-sm mb-4">Member since {user.joinDate}</p>
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="mt-6 space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Package className="h-8 w-8 text-red-900 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{orders.length}</div>
                  <div className="text-sm text-gray-600">Total Orders</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <CreditCard className="h-8 w-8 text-red-900 mx-auto mb-2" />
                  <div className="text-2xl font-bold">
                    ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold">{order.id}</span>
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">
                                Placed on {new Date(order.date).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-600">
                                {order.items} item{order.items !== 1 ? 's' : ''}
                              </p>
                            </div>
                            <div className="mt-4 sm:mt-0 text-right">
                              <div className="text-lg font-semibold">${order.total}</div>
                              <Button variant="outline" size="sm" className="mt-2">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <User className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-semibold">Full Name</p>
                            <p className="text-gray-600">{user.name}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-semibold">Email Address</p>
                            <p className="text-gray-600">{user.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-semibold">Phone Number</p>
                            <p className="text-gray-600">{user.phone}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-semibold">Address</p>
                            <p className="text-gray-600">{user.address}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Button className="w-full">Update Profile</Button>
                        <Button variant="outline" className="w-full">Change Password</Button>
                        <Button variant="outline" className="w-full">Manage Addresses</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive updates about your orders</p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Get text updates for urgent notifications</p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Privacy Settings</p>
                          <p className="text-sm text-gray-600">Control your data and privacy preferences</p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <CreditCard className="h-6 w-6" />
                              <div>
                                <p className="font-semibold">**** **** **** 1234</p>
                                <p className="text-sm text-gray-600">Expires 12/25</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Add Payment Method
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
