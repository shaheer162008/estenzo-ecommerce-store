'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'

interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
}

interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

type WishlistAction = 
  | { type: 'ADD_ITEM'; payload: WishlistItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_FROM_STORAGE'; payload: WishlistItem[] }

const WishlistContext = createContext<{
  state: WishlistState
  dispatch: React.Dispatch<WishlistAction>
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
  clearWishlist: () => void
} | null>(null)

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
      
      if (existingItemIndex >= 0) {
        return state // Item already exists
      }

      const newItems = [...state.items, action.payload]
      const itemCount = newItems.length

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(newItems))
      }

      return { items: newItems, itemCount }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload)
      const itemCount = newItems.length

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(newItems))
      }

      return { items: newItems, itemCount }
    }

    case 'CLEAR_WISHLIST': {
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('wishlist')
      }
      return { items: [], itemCount: 0 }
    }

    case 'LOAD_FROM_STORAGE': {
      return { items: action.payload, itemCount: action.payload.length }
    }

    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    itemCount: 0
  })

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('wishlist')
      if (savedWishlist) {
        try {
          const items = JSON.parse(savedWishlist)
          dispatch({ type: 'LOAD_FROM_STORAGE', payload: items })
        } catch (error) {
          console.error('Error loading wishlist from localStorage:', error)
        }
      }
    }
  }, [])

  const addToWishlist = (item: WishlistItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeFromWishlist = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const isInWishlist = (id: number) => {
    return state.items.some(item => item.id === id)
  }

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' })
  }

  return (
    <WishlistContext.Provider value={{
      state,
      dispatch,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
