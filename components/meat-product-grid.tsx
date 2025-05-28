"use client"

import { useState, useEffect } from "react"
import MeatProductCard from "./meat-product-card"
import type { MeatProduct } from "@/types"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function MeatProductGrid() {
  const [products, setProducts] = useState<MeatProduct[]>([])
  const [category, setCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    // Replace the existing products with real images
    setProducts([
      {
        id: 101,
        name: "Tilapia",
        pricePerKg: 3500,
        image: "/images/meat/tilapia.jpeg",
        category: "Pescado",
        description: "Tilapia fresca",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 102,
        name: "Cecina",
        pricePerKg: 5990,
        image: "/images/meat/cecina.jpeg",
        category: "Res",
        description: "Cecina de res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 103,
        name: "Molida",
        pricePerKg: 4500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Res",
        description: "Carne molida de res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 104,
        name: "Costilla de res",
        pricePerKg: 4000,
        image: "/images/meat/costilla-res.jpeg",
        category: "Res",
        description: "Costilla de res para sopa o asado",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 105,
        name: "Chuleta",
        pricePerKg: 3500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Cerdo",
        description: "Chuleta de cerdo (arreglada y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 106,
        name: "Bistec de res",
        pricePerKg: 5990,
        image: "/images/meat/bistec-res.jpeg",
        category: "Res",
        description: "Bistec de res (arreglado y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 107,
        name: "Hígado",
        pricePerKg: 2990,
        image: "/placeholder.svg?height=200&width=200",
        category: "Res",
        description: "Hígado de res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 108,
        name: "Chuleta ahumada",
        pricePerKg: 4500,
        image: "/images/meat/chuleta-ahumada.jpeg",
        category: "Cerdo",
        description: "Chuleta de cerdo ahumada",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 109,
        name: "Mondongo",
        pricePerKg: 2900,
        image: "/images/meat/mondongo.jpeg",
        category: "Res",
        description: "Mondongo limpio",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 110,
        name: "Pezuña de cerdo",
        pricePerKg: 2500,
        image: "/images/meat/pezuna-cerdo.jpeg",
        category: "Cerdo",
        description: "Pezuña de cerdo para sopa",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 111,
        name: "Costilla de cerdo",
        pricePerKg: 3500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Cerdo",
        description: "Costilla de cerdo (arreglada y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 112,
        name: "Trocitos de cerdo",
        pricePerKg: 3690,
        image: "/images/meat/trocitos-cerdo.jpeg",
        category: "Cerdo",
        description: "Trocitos de cerdo para guisos",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 113,
        name: "Filet de cerdo",
        pricePerKg: 3690,
        image: "/images/meat/filet-cerdo.jpeg",
        category: "Cerdo",
        description: "Filet de cerdo (arreglado y normal)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 114,
        name: "Chorizo",
        pricePerKg: 3500,
        image: "/images/meat/chorizo.jpeg",
        category: "Embutidos",
        description: "Chorizo casero",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 115,
        name: "Pollo en trocitos",
        pricePerKg: 4490,
        image: "/images/meat/pollo-en-trocitos.jpeg",
        category: "Pollo",
        description: "Pollo en trocitos para guisos",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 116,
        name: "Pollo arreglado",
        pricePerKg: 4490,
        image: "/images/meat/pollo-arreglado.jpeg",
        category: "Pollo",
        description: "Pollo arreglado listo para cocinar",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 117,
        name: "Filet de pollo",
        pricePerKg: 4490,
        image: "/images/meat/filet-pollo.jpeg",
        category: "Pollo",
        description: "Filet de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 118,
        name: "Pechuga deshuesada",
        pricePerKg: 4490,
        image: "/images/meat/pechuga-deshuesada.jpeg",
        category: "Pollo",
        description: "Pechuga de pollo deshuesada",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 119,
        name: "Pellejo",
        pricePerKg: 2500,
        image: "/images/meat/pellejo.jpeg",
        category: "Pollo",
        description: "Pellejo de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 120,
        name: "Pollo con hueso picado",
        pricePerKg: 1790,
        image: "/images/meat/pollo-con-hueso-picado.jpeg",
        category: "Pollo",
        description: "Pollo con hueso picado",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 121,
        name: "Muslo entero",
        pricePerKg: 1790,
        image: "/images/meat/muslo-entero.jpeg",
        category: "Pollo",
        description: "Muslo de pollo entero",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 122,
        name: "Muslo de pollo",
        pricePerKg: 2000,
        image: "/images/meat/muslo-pollo.jpeg",
        category: "Pollo",
        description: "Muslo de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 123,
        name: "Alas",
        pricePerKg: 3000,
        image: "/images/meat/alas.jpeg",
        category: "Pollo",
        description: "Alas de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 124,
        name: "Pechuga con hueso",
        pricePerKg: 3000,
        image: "/images/meat/pechuga-con-hueso.jpeg",
        category: "Pollo",
        description: "Pechuga de pollo con hueso",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 125,
        name: "Salchicha de pollo y res",
        pricePerKg: 2450,
        image: "/images/meat/salchichas-pollo-res.jpeg",
        category: "Embutidos",
        description: "Salchicha de pollo y res",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 126,
        name: "Posta de cerdo",
        pricePerKg: 3690,
        image: "/images/meat/posta-cerdo.jpeg",
        category: "Cerdo",
        description: "Posta de cerdo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 127,
        name: "Mortadela jamonada",
        pricePerKg: 3300,
        image: "/images/meat/mortadela-jamonada.jpeg",
        category: "Embutidos",
        description: "Mortadela jamonada",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 128,
        name: "Mortadela de pollo",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg",
        category: "Embutidos",
        description: "Mortadela de pollo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 129,
        name: "Mortadela criolla",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg",
        category: "Embutidos",
        description: "Mortadela criolla",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 130,
        name: "Mortadela con tocino",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg",
        category: "Embutidos",
        description: "Mortadela con tocino",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 131,
        name: "Mortadela con chile dulce",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg",
        category: "Embutidos",
        description: "Mortadela con chile dulce",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 132,
        name: "Mortadela bologna",
        pricePerKg: 2450,
        image: "/images/meat/mortadela-general.jpeg",
        category: "Embutidos",
        description: "Mortadela bologna",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 133,
        name: "Jamón de pavo",
        pricePerKg: 4990,
        image: "/images/meat/jamon-pavo.jpeg",
        category: "Embutidos",
        description: "Jamón de pavo",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 134,
        name: "Morcilla",
        pricePerKg: 3300,
        image: "/placeholder.svg?height=200&width=200",
        category: "Embutidos",
        description: "Morcilla tradicional",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 135,
        name: "Jamón Tradicional",
        pricePerKg: 3500,
        image: "/images/meat/jamon-tradicional.jpeg",
        category: "Embutidos",
        description: "Jamón tradicional",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 136,
        name: "Salchichón criollo",
        pricePerKg: 2500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Embutidos",
        description: "Salchichón criollo (normal y con chile)",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 137,
        name: "Salchichón con especias",
        pricePerKg: 2500,
        image: "/placeholder.svg?height=200&width=200",
        category: "Embutidos",
        description: "Salchichón con especias",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 138,
        name: "Salchichón caribeño",
        pricePerKg: 2450,
        image: "/placeholder.svg?height=200&width=200",
        category: "Embutidos",
        description: "Salchichón caribeño",
        minAmount: 500,
        maxAmount: 15000,
      },
      {
        id: 139,
        name: "Salchichón tucurrique",
        pricePerKg: 2450,
        image: "/placeholder.svg?height=200&width=200",
        category: "Embutidos",
        description: "Salchichón tucurrique sin nada",
        minAmount: 500,
        maxAmount: 15000,
      },
    ])
  }, [])

  const categories = [
    { id: "all", name: "Todos", emoji: "🥩", count: 0 },
    { id: "Res", name: "Res", emoji: "🐄", count: 0 },
    { id: "Cerdo", name: "Cerdo", emoji: "🐷", count: 0 },
    { id: "Pollo", name: "Pollo", emoji: "🐔", count: 0 },
    { id: "Embutidos", name: "Embutidos", emoji: "🌭", count: 0 },
    { id: "Pescado", name: "Pescado", emoji: "🐟", count: 0 },
  ]

  // Update category counts
  categories.forEach((cat) => {
    if (cat.id === "all") {
      cat.count = products.length
    } else {
      cat.count = products.filter((p) => p.category === cat.id).length
    }
  })

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const clearFilters = () => {
    setCategory("all")
    setSearchTerm("")
    setIsFilterOpen(false)
  }

  const activeFiltersCount = (category !== "all" ? 1 : 0) + (searchTerm ? 1 : 0)

  return (
    <div className="space-y-4">
      {/* Mobile Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar productos (ej: pollo, bistec, chorizo...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 h-12 text-base"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            onClick={() => setSearchTerm("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Mobile Filter Button & Active Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Categorías
              {activeFiltersCount > 0 && (
                <Badge variant="destructive" className="ml-1 h-5 w-5 p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader>
              <SheetTitle>Filtrar por Categoría</SheetTitle>
              <SheetDescription>Selecciona una categoría para encontrar productos específicos</SheetDescription>
            </SheetHeader>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={category === cat.id ? "default" : "outline"}
                  className="h-16 flex flex-col items-center justify-center gap-1"
                  onClick={() => {
                    setCategory(cat.id)
                    setIsFilterOpen(false)
                  }}
                >
                  <span className="text-2xl">{cat.emoji}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                  <span className="text-xs opacity-70">({cat.count})</span>
                </Button>
              ))}
            </div>
            {activeFiltersCount > 0 && (
              <Button variant="ghost" onClick={clearFilters} className="w-full mt-4 text-red-600">
                <X className="h-4 w-4 mr-2" />
                Limpiar filtros
              </Button>
            )}
          </SheetContent>
        </Sheet>

        {/* Active Filter Tags */}
        {category !== "all" && (
          <Badge variant="secondary" className="flex items-center gap-1">
            {categories.find((c) => c.id === category)?.emoji} {categories.find((c) => c.id === category)?.name}
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-1" onClick={() => setCategory("all")}>
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        )}
        {searchTerm && (
          <Badge variant="secondary" className="flex items-center gap-1">
            🔍 "{searchTerm}"
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-1" onClick={() => setSearchTerm("")}>
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        )}
      </div>

      {/* Desktop Tabs (hidden on mobile) */}
      <div className="hidden md:block">
        <Tabs defaultValue="all" onValueChange={setCategory} className="mb-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-1">
                <span className="hidden lg:inline">{cat.emoji}</span>
                {cat.name}
                <span className="text-xs opacity-70">({cat.count})</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado
          {filteredProducts.length !== 1 ? "s" : ""}
        </span>
        {(category !== "all" || searchTerm) && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-600">
            Mostrar todos
          </Button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <MeatProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">No se encontraron productos</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm ? `No hay productos que coincidan con "${searchTerm}"` : "No hay productos en esta categoría"}
          </p>
          <Button onClick={clearFilters}>Ver todos los productos</Button>
        </div>
      )}
    </div>
  )
}
