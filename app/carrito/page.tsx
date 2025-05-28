import Header from "@/components/header"
import Footer from "@/components/footer"
import CartContent from "@/components/cart-content"

export default function CartPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>
        <CartContent />
      </div>
      <Footer />
    </main>
  )
}
