"use client"

import type { Product, MeatProduct } from "@/types"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

type CartItem = Product | MeatProduct

interface CartContextType {
  items: CartItem[]
  addItem: (product: CartItem) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  updateQuantity: (productId: number, quantity: number) => void
  getItemQuantity: (productId: number) => number
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      if (savedCart) {
        setItems(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items))
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error)
    }
  }, [items])

  const addItem = (product: CartItem) => {
    setItems((prevItems) => {
      // For meat products with custom details, always add as new item
      if (product.customDetails) {
        toast({
          title: "Producto agregado",
          description: `${product.name} - ${product.customDetails}`,
        })
        return [...prevItems, { ...product, quantity: 1 }]
      }

      // For regular products, check if it already exists
      const existingItem = prevItems.find((item) => item.id === product.id && !item.customDetails)

      if (existingItem) {
        // Increment quantity if item already exists
        const updatedItems = prevItems.map((item) =>
          item.id === product.id && !item.customDetails ? { ...item, quantity: item.quantity + 1 } : item,
        )
        toast({
          title: "Cantidad actualizada",
          description: `${product.name} (${existingItem.quantity + 1})`,
        })
        return updatedItems
      } else {
        // Add new item with quantity 1
        toast({
          title: "Producto agregado",
          description: product.name,
        })
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const removeItem = (productId: number) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId)
      if (itemToRemove) {
        toast({
          title: "Producto eliminado",
          description: itemToRemove.name,
        })
      }
      return prevItems.filter((item) => item.id !== productId)
    })
  }

  const clearCart = () => {
    setItems([])
    toast({
      title: "Carrito vacío",
      description: "Se han eliminado todos los productos",
    })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const getItemQuantity = (productId: number) => {
    const item = items.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      // For meat products
      if (item.customDetails) {
        return total + item.price * item.quantity
      }

      // For regular products
      const price = item.discount ? item.price - (item.price * item.discount) / 100 : item.price
      return total + price * item.quantity
    }, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        updateQuantity,
        getItemQuantity,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
