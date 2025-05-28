import Header from "@/components/header"
import Footer from "@/components/footer"
import MeatProductGrid from "@/components/meat-product-grid"
import { Suspense } from "react"

export default function MeatPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-bold mb-2">Carnicería</h1>
        <p className="text-gray-600 mb-6">
          Seleccione sus productos cárnicos frescos por kilogramo o por monto en colones
        </p>
        <Suspense fallback={<div>Cargando productos...</div>}>
          <MeatProductGrid />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
