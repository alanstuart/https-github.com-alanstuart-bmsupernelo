"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import BranchModal from "./branch-modal"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"

export default function Header() {
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items } = useCart()

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/bm-super-nelo-logo.png"
                alt="BM Super Nelo Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-blue-600 hidden sm:block">BM Super Nelo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="/productos" className="text-gray-700 hover:text-blue-600 transition-colors">
            Productos
          </Link>
          <Link href="/carnes" className="text-gray-700 hover:text-blue-600 transition-colors">
            Carnicería
          </Link>
          <Link href="/ofertas" className="text-gray-700 hover:text-blue-600 transition-colors">
            Ofertas
          </Link>
          <Link href="/contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop Branch Selector */}
          <Button
            variant="outline"
            className="hidden sm:flex border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => setIsBranchModalOpen(true)}
          >
            <span className="mr-2">🏬</span> Seleccionar Sucursal
          </Button>

          {/* Shopping Cart */}
          <Link href="/carrito" className="relative">
            <Button variant="ghost" className="p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/carnes"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Carnicería
            </Link>
            <Link
              href="/ofertas"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ofertas
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>

            {/* Mobile Branch Selector */}
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 justify-start"
              onClick={() => {
                setIsBranchModalOpen(true)
                setIsMobileMenuOpen(false)
              }}
            >
              <span className="mr-2">🏬</span> Seleccionar Sucursal
            </Button>
          </nav>
        </div>
      )}

      <BranchModal isOpen={isBranchModalOpen} onClose={() => setIsBranchModalOpen(false)} />
    </header>
  )
}
