import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { Suspense } from "react"

export default function OffersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-bold mb-6">Ofertas Especiales</h1>
        <Suspense fallback={<div>Cargando ofertas...</div>}>
          <ProductGrid />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
