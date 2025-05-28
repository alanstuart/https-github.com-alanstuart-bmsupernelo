"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Scale, Coins, Expand } from "lucide-react"
import Image from "next/image"
import type { MeatProduct } from "@/types"
import { useCart } from "@/hooks/use-cart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import ImageModal from "./image-modal"

interface MeatProductCardProps {
  product: MeatProduct
}

export default function MeatProductCard({ product }: MeatProductCardProps) {
  const { addItem } = useCart()
  const [purchaseType, setPurchaseType] = useState<"weight" | "price">("weight")
  const [weight, setWeight] = useState(0.5) // Default 0.5 kg
  const [price, setPrice] = useState(product.minAmount) // Default minimum amount
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  // Calculate the weight based on price
  const weightFromPrice = price / product.pricePerKg

  // Calculate the price based on weight
  const priceFromWeight = weight * product.pricePerKg

  const handleAddToCart = () => {
    const finalWeight = purchaseType === "weight" ? weight : weightFromPrice
    const finalPrice = purchaseType === "weight" ? priceFromWeight : price

    addItem({
      ...product,
      quantity: 1,
      weight: finalWeight,
      price: finalPrice,
      purchaseType,
      customDetails: `${finalWeight.toFixed(2)} kg - ₡${finalPrice.toLocaleString()}`,
    })
  }

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0])
  }

  const handlePriceChange = (value: number[]) => {
    setPrice(value[0])
  }

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value)) {
      if (value < product.minAmount) {
        setPrice(product.minAmount)
      } else if (value > product.maxAmount) {
        setPrice(product.maxAmount)
      } else {
        setPrice(value)
      }
    }
  }

  const handleWeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value)
    if (!isNaN(value)) {
      if (value < 0.1) {
        setWeight(0.1)
      } else if (value > 5) {
        setWeight(5)
      } else {
        setWeight(value)
      }
    }
  }

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-64 bg-gray-100 overflow-hidden group">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onClick={() => setIsImageModalOpen(true)}
          />
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            ₡{product.pricePerKg.toLocaleString()}/kg
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white"
            onClick={() => setIsImageModalOpen(true)}
          >
            <Expand className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-1">{product.category}</div>
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>

          <Tabs defaultValue="weight" onValueChange={(value) => setPurchaseType(value as "weight" | "price")}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="weight" className="flex items-center gap-1">
                <Scale className="h-4 w-4" /> Por Peso
              </TabsTrigger>
              <TabsTrigger value="price" className="flex items-center gap-1">
                <Coins className="h-4 w-4" /> Por Monto
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weight" className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Peso (kg):</span>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min="0.1"
                      max="5"
                      step="0.1"
                      value={weight}
                      onChange={handleWeightInput}
                      className="w-20 h-8 text-right"
                    />
                    <span className="text-sm">kg</span>
                  </div>
                </div>
                <Slider
                  defaultValue={[0.5]}
                  min={0.1}
                  max={5}
                  step={0.1}
                  value={[weight]}
                  onValueChange={handleWeightChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0.1 kg</span>
                  <span>5 kg</span>
                </div>
              </div>
              <div className="text-right font-bold">Total: ₡{priceFromWeight.toLocaleString()}</div>
            </TabsContent>

            <TabsContent value="price" className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monto (₡):</span>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={product.minAmount}
                      max={product.maxAmount}
                      step="100"
                      value={price}
                      onChange={handlePriceInput}
                      className="w-24 h-8 text-right"
                    />
                    <span className="text-sm">₡</span>
                  </div>
                </div>
                <Slider
                  defaultValue={[product.minAmount]}
                  min={product.minAmount}
                  max={product.maxAmount}
                  step={100}
                  value={[price]}
                  onValueChange={handlePriceChange}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>₡{product.minAmount.toLocaleString()}</span>
                  <span>₡{product.maxAmount.toLocaleString()}</span>
                </div>
              </div>
              <div className="text-right font-bold">Peso aprox: {weightFromPrice.toFixed(2)} kg</div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al carrito
          </Button>
        </CardFooter>
      </Card>

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={product.image || "/placeholder.svg"}
        imageAlt={product.name}
        productName={product.name}
      />
    </>
  )
}
