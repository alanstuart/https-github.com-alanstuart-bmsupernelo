"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import BranchModal from "./branch-modal"
import { useCart } from "@/hooks/use-cart"

export default function Header() {
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false)
  const { items } = useCart()

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">BM</span>
            </div>
            <span className="text-xl font-bold text-red-600">BM Super Nelo</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
            Inicio
          </Link>
          <Link href="/productos" className="text-gray-700 hover:text-red-600 transition-colors">
            Productos
          </Link>
          <Link href="/carnes" className="text-gray-700 hover:text-red-600 transition-colors">
            Carnicería
          </Link>
          <Link href="/ofertas" className="text-gray-700 hover:text-red-600 transition-colors">
            Ofertas
          </Link>
          <Link href="/contacto" className="text-gray-700 hover:text-red-600 transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50"
            onClick={() => setIsBranchModalOpen(true)}
          >
            <span className="mr-2">🏬</span> Seleccionar Sucursal
          </Button>

          <Link href="/carrito" className="relative">
            <Button variant="ghost" className="p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>

      <BranchModal isOpen={isBranchModalOpen} onClose={() => setIsBranchModalOpen(false)} />
    </header>
  )
}
