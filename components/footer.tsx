import { MapPin, Clock, Phone, Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0f1b33] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BM Super Nelo</h3>
            <p className="text-gray-300 text-sm">Tu supermercado de confianza en Cartago</p>
            <div className="flex items-center gap-3 mt-4">
              <Link href="https://www.facebook.com/bmsupernelo" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/bm_supernelo" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sucursal Lima</h3>
            <div className="flex items-start gap-2 text-gray-300 text-sm mb-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>100mts este y 100 norte de la plaza de deportes de la Lima de Cartago</span>
            </div>
            <div className="flex items-start gap-2 text-gray-300 text-sm mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>6191-4588</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sucursal San Rafael</h3>
            <div className="flex items-start gap-2 text-gray-300 text-sm mb-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Costado norte de la plaza de deportes de Oreamuno de Cartago</span>
            </div>
            <div className="flex items-start gap-2 text-gray-300 text-sm mb-2">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>6143-7099</span>
            </div>
            <div className="flex items-start gap-2 text-gray-300 text-sm mb-2">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>BMSP.CENTRODECARNES@GMAIL.COM</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <div className="flex items-start gap-2 text-gray-300 text-sm mb-2">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Lunes a Sábado: 6:00 AM - 9:00 PM</p>
                <p>Domingo: 7:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BM Super Nelo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
