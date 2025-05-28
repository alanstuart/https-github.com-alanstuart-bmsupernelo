"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import type { Product } from "@/types"
import { useCart } from "@/hooks/use-cart"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const discountedPrice = product.discount ? product.price - (product.price * product.discount) / 100 : product.price

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 bg-gray-100">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">₡{discountedPrice.toLocaleString()}</span>
          {product.discount && (
            <span className="text-gray-500 line-through text-sm">₡{product.price.toLocaleString()}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => addItem(product)}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
