"use client"

import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import type { Product } from "@/types"

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // In a real app, this would be an API call
    setProducts([
      {
        id: 1,
        name: "Arroz Tío Pelón",
        price: 1800,
        image: "/placeholder.svg?height=200&width=200",
        category: "Granos",
        discount: 10,
      },
      {
        id: 2,
        name: "Frijoles Naturas",
        price: 950,
        image: "/placeholder.svg?height=200&width=200",
        category: "Granos",
      },
      {
        id: 3,
        name: "Leche Dos Pinos",
        price: 1200,
        image: "/placeholder.svg?height=200&width=200",
        category: "Lácteos",
        discount: 5,
      },
      {
        id: 4,
        name: "Papel Higiénico Scott",
        price: 3500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Hogar",
        discount: 15,
      },
      {
        id: 5,
        name: "Atún Sardimar",
        price: 1500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Enlatados",
      },
      {
        id: 6,
        name: "Café 1820",
        price: 2800,
        image: "/placeholder.svg?height=200&width=200",
        category: "Bebidas",
        discount: 8,
      },
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
