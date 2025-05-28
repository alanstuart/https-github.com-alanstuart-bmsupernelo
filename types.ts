export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  discount?: number
  quantity?: number
  weight?: number
  purchaseType?: "weight" | "price"
  customDetails?: string
}

export interface MeatProduct {
  id: number
  name: string
  pricePerKg: number
  image: string
  category: string
  description: string
  minAmount: number
  maxAmount: number
  quantity?: number
  weight?: number
  price?: number
  purchaseType?: "weight" | "price"
  customDetails?: string
}
