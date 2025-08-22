'use client'

import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useWishlist } from "@/components/wishlist-context"
import { useCart } from "@/components/cart-context"
import Image from "next/image"
import Link from "next/link"

export default function WishlistSheet() {
  const { state, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const formatPrice = (price: number) => {
    return `AED ${price.toFixed(2)}`
  }

  const handleAddToCart = (item: { id: number; name: string; price: number; image: string }) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 relative hover:bg-red-50">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-900" />
          {state.itemCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-900 text-white">
              {state.itemCount}
            </Badge>
          )}
          <span className="sr-only">Wishlist</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Wishlist ({state.itemCount})</span>
            {state.items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearWishlist}
                className="text-red-500 hover:text-red-700"
              >
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <Heart className="h-16 w-16 text-muted-foreground" />
            <div className="text-center">
              <h3 className="font-semibold text-lg">Your wishlist is empty</h3>
              <p className="text-muted-foreground">Add some products you love</p>
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
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(item.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          >
                            ★
                          </div>
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({item.rating})
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs px-2 py-1"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-4">
              <Separator />
              
              <div className="space-y-2">
                <Link href="/wishlist" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Full Wishlist
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
