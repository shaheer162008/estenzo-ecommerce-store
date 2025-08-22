'use client'

import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import Link from "next/link"

export default function Cart() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart()

  const formatPrice = (price: number) => {
    return `AED ${price.toFixed(2)}`
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {state.itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
              {state.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart ({state.itemCount})</span>
            {state.items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-red-500 hover:text-red-700"
              >
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            <div className="text-center">
              <h3 className="font-semibold text-lg">Your cart is empty</h3>
              <p className="text-muted-foreground">Add some products to get started</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 my-4">
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-sm font-semibold text-primary">
                        {formatPrice(item.price)}
                      </p>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-sm font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-4">
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(state.total)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Link href="/checkout" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link href="/cart" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Full Cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
