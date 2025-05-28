"use client"

import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ShoppingBag, Clock, MapPin, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CartContent() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const { toast } = useToast()
  const [pickupLocation, setPickupLocation] = useState("lima")
  const [pickupDate, setPickupDate] = useState("today")
  const [pickupTime, setPickupTime] = useState("18:00")

  const handleCheckout = () => {
    setIsCheckingOut(true)

    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "¡Pedido completado!",
        description: `Su pedido estará listo para recoger en ${
          pickupLocation === "lima" ? "Lima" : "San Rafael"
        } ${pickupDate === "today" ? "hoy" : "mañana"} a las ${pickupTime}.`,
      })
      clearCart()
      setIsCheckingOut(false)
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Su carrito está vacío</h2>
        <p className="text-gray-500 mb-6">Agregue algunos productos para comenzar</p>
        <Link href="/">
          <Button>Continuar comprando</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Productos</h2>
              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={clearCart}>
                <Trash2 className="h-4 w-4 mr-1" />
                Vaciar carrito
              </Button>
            </div>
          </div>

          <div className="divide-y">
            {items.map((item) => {
              // Handle regular products
              if (!item.customDetails) {
                const discountedPrice = item.discount ? item.price - (item.price * item.discount) / 100 : item.price

                return (
                  <div key={item.id} className="p-4 flex items-center">
                    <div className="relative h-20 w-20 bg-gray-100 rounded mr-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-gray-500">{item.category}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-semibold">₡{discountedPrice.toLocaleString()}</span>
                        {item.discount && (
                          <span className="text-gray-500 line-through text-sm">₡{item.price.toLocaleString()}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="ml-4 text-right">
                      <div className="font-semibold">₡{(discountedPrice * item.quantity).toLocaleString()}</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 mt-1 h-auto p-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )
              }
              // Handle meat products
              else {
                return (
                  <div key={item.id} className="p-4 flex items-center">
                    <div className="relative h-20 w-20 bg-gray-100 rounded mr-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-gray-500">{item.category}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.customDetails}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="ml-4 text-right">
                      <div className="font-semibold">₡{(item.price * item.quantity).toLocaleString()}</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 mt-1 h-auto p-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow p-6 sticky top-4">
          <h2 className="text-lg font-semibold mb-4">Resumen del pedido</h2>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>₡{getTotalPrice().toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Impuestos</span>
              <span>Incluidos</span>
            </div>
          </div>

          <Alert className="mb-4 bg-amber-50 text-amber-800 border-amber-200">
            <Info className="h-4 w-4" />
            <AlertDescription>Servicio a domicilio no disponible. Solo recogida en tienda.</AlertDescription>
          </Alert>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Sucursal para recoger
              </h3>
              <RadioGroup value={pickupLocation} onValueChange={setPickupLocation} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lima" id="lima" />
                  <Label htmlFor="lima">Lima (100mts este y 100 norte de la plaza)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="san-rafael" id="san-rafael" />
                  <Label htmlFor="san-rafael">San Rafael (Costado norte de la plaza)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Fecha y hora de recogida
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Select value={pickupDate} onValueChange={setPickupDate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar fecha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Hoy</SelectItem>
                      <SelectItem value="tomorrow">Mañana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={pickupTime} onValueChange={setPickupTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar hora" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₡{getTotalPrice().toLocaleString()}</span>
            </div>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700" disabled={isCheckingOut} onClick={handleCheckout}>
            {isCheckingOut ? "Procesando..." : "Finalizar compra"}
          </Button>

          <div className="mt-4">
            <Link href="/">
              <Button variant="outline" className="w-full">
                Continuar comprando
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
