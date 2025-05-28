import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-2xl font-bold mb-6">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Sucursal Lima</h3>
                  <p className="text-gray-600">100mts este y 100 norte de la plaza de deportes de la Lima de Cartago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Sucursal San Rafael</h3>
                  <p className="text-gray-600">Costado norte de la plaza de deportes de Oreamuno de Cartago</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Teléfonos</h3>
                  <p className="text-gray-600">Lima: 6191-4588</p>
                  <p className="text-gray-600">San Rafael: 6143-7099</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Correo Electrónico</h3>
                  <p className="text-gray-600">BMSP.CENTRODECARNES@GMAIL.COM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Horario</h3>
                  <p className="text-gray-600">Lunes a Sábado: 6:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Domingo: 7:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 text-red-600 mt-0.5 flex items-center justify-center">
                  <Facebook className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Redes Sociales</h3>
                  <div className="flex flex-col gap-1">
                    <Link
                      href="https://www.facebook.com/bmsupernelo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      Facebook: @bmsupernelo
                    </Link>
                    <Link
                      href="https://www.instagram.com/bm_supernelo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      Instagram: @bm_supernelo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Envíenos un Mensaje</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Su nombre" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Correo Electrónico
                  </label>
                  <Input id="email" type="email" placeholder="Su correo electrónico" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Asunto
                </label>
                <Input id="subject" placeholder="Asunto del mensaje" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Su mensaje" rows={5} />
              </div>

              <Button className="bg-red-600 hover:bg-red-700">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
