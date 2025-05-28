"use client"

import { useState, useEffect } from "react"
import MeatProductCard from "./meat-product-card"
import type { MeatProduct } from "@/types"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MeatProductGrid() {
  const [products, setProducts] = useState<MeatProduct[]>([])
  const [category, setCategory] = useState<string>("all")

  useEffect(() => {
    // Replace the existing products with real images
    setProducts([
      {
        id: 101,
        name: "Tilapia",
        pricePerKg: 3500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pescado",
        description: "Tilapia fresca",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 102,
        name: "Cecina",
        pricePerKg: 5990,
        image: "/images/meat/cecina.jpeg", // ✅ Real image added
        category: "Res",
        description: "Cecina de res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 103,
        name: "Molida",
        pricePerKg: 4500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Res",
        description: "Carne molida de res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 104,
        name: "Costilla de res",
        pricePerKg: 4000,
        image: "/images/meat/costilla-res.jpeg", // ✅ Real image added
        category: "Res",
        description: "Costilla de res para sopa o asado",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 105,
        name: "Chuleta",
        pricePerKg: 3500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Cerdo",
        description: "Chuleta de cerdo (arreglada y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 106,
        name: "Bistec de res",
        pricePerKg: 5990,
        image: "/images/meat/bistec-res.jpeg", // ✅ Real image added
        category: "Res",
        description: "Bistec de res (arreglado y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 107,
        name: "Hígado",
        pricePerKg: 2990,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Res",
        description: "Hígado de res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 108,
        name: "Chuleta ahumada",
        pricePerKg: 4500,
        image: "/images/meat/chuleta-ahumada.jpeg", // ✅ Real image added
        category: "Cerdo",
        description: "Chuleta de cerdo ahumada",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 109,
        name: "Mondongo",
        pricePerKg: 2900,
        image: "/images/meat/mondongo.jpeg", // ✅ Real image added
        category: "Res",
        description: "Mondongo limpio",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 110,
        name: "Pezuña de cerdo",
        pricePerKg: 2500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Cerdo",
        description: "Pezuña de cerdo para sopa",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 111,
        name: "Costilla de cerdo",
        pricePerKg: 3500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Cerdo",
        description: "Costilla de cerdo (arreglada y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 112,
        name: "Trocitos de cerdo",
        pricePerKg: 3690,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Cerdo",
        description: "Trocitos de cerdo para guisos",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 113,
        name: "Filet de cerdo",
        pricePerKg: 3690,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Cerdo",
        description: "Filet de cerdo (arreglado y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 114,
        name: "Chorizo",
        pricePerKg: 3500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Chorizo casero",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 115,
        name: "Pollo en trocitos",
        pricePerKg: 4490,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Pollo en trocitos para guisos",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 116,
        name: "Pollo arreglado",
        pricePerKg: 4490,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Pollo arreglado listo para cocinar",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 117,
        name: "Filet de pollo",
        pricePerKg: 4490,
        image: "/images/meat/filet-pollo.jpeg", // ✅ Real image added
        category: "Pollo",
        description: "Filet de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 118,
        name: "Pechuga deshuesada",
        pricePerKg: 4490,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Pechuga de pollo deshuesada",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 119,
        name: "Pellejo",
        pricePerKg: 2500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Pellejo de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 120,
        name: "Pollo con hueso picado",
        pricePerKg: 1790,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Pollo con hueso picado",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 121,
        name: "Muslo entero",
        pricePerKg: 1790,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Muslo de pollo entero",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 122,
        name: "Muslo de pollo",
        pricePerKg: 2000,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Muslo de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 123,
        name: "Alas",
        pricePerKg: 3000,
        image: "/images/meat/alas.jpeg", // ✅ Real image added
        category: "Pollo",
        description: "Alas de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 124,
        name: "Pechuga con hueso",
        pricePerKg: 3000,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Pollo",
        description: "Pechuga de pollo con hueso",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 125,
        name: "Salchicha de pollo y res",
        pricePerKg: 2450,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Salchicha de pollo y res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 126,
        name: "Posta de cerdo",
        pricePerKg: 3690,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Cerdo",
        description: "Posta de cerdo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 127,
        name: "Mortadela jamonada",
        pricePerKg: 3300,
        image: "/images/meat/mortadela-jamonada.jpeg", // ✅ Real image added (previous)
        category: "Embutidos",
        description: "Mortadela jamonada",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 128,
        name: "Mortadela de pollo",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Mortadela de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 129,
        name: "Mortadela criolla",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Mortadela criolla",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 130,
        name: "Mortadela con tocino",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Mortadela con tocino",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 131,
        name: "Mortadela con chile dulce",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Mortadela con chile dulce",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 132,
        name: "Mortadela bologna",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Mortadela bologna",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 133,
        name: "Jamón de pavo",
        pricePerKg: 4990,
        image: "/images/meat/jamon-pavo.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Jamón de pavo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 134,
        name: "Morcilla",
        pricePerKg: 3300,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Morcilla tradicional",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 135,
        name: "Jamón Tradicional",
        pricePerKg: 3500,
        image: "/images/meat/jamon-tradicional.jpeg", // ✅ Real image added
        category: "Embutidos",
        description: "Jamón tradicional",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 136,
        name: "Salchichón criollo",
        pricePerKg: 2500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Salchichón criollo (normal y con chile)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 137,
        name: "Salchichón con especias",
        pricePerKg: 2500,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Salchichón con especias",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 138,
        name: "Salchichón caribeño",
        pricePerKg: 2450,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Salchichón caribeño",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 139,
        name: "Salchichón tucurrique",
        pricePerKg: 2450,
        image: "/placeholder.svg?height=200&width=200", // Still needs image
        category: "Embutidos",
        description: "Salchichón tucurrique sin nada",
        minAmount: 500,
        maxAmount: 15000,
      },
    ])
  }, [])

  const categories = [
    { id: "all", name: "Todos" },
    { id: "Res", name: "Res" },
    { id: "Cerdo", name: "Cerdo" },
    { id: "Pollo", name: "Pollo" },
    { id: "Embutidos", name: "Embutidos" },
    { id: "Pescado", name: "Pescado" },
  ]

  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  return (
    <div>
      <Tabs defaultValue="all" onValueChange={setCategory} className="mb-6">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <MeatProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
