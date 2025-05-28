import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h2 className="text-2xl font-bold mb-6">Ofertas</h2>
        <Suspense fallback={<div>Cargando productos...</div>}>
          <ProductGrid />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
