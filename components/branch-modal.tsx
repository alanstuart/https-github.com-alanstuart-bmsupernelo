"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MapPin, Phone } from "lucide-react"
import Image from "next/image"

interface BranchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BranchModal({ isOpen, onClose }: BranchModalProps) {
  const handleSelectBranch = (branch: string) => {
    // In a real app, you would save this to localStorage or context
    console.log(`Selected branch: ${branch}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-8 h-8">
              <Image src="/images/bm-super-nelo-logo.png" alt="BM Super Nelo Logo" fill className="object-contain" />
            </div>
            <DialogTitle className="text-xl font-bold">Seleccione su Sucursal</DialogTitle>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div
            className="border rounded-md p-4 cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleSelectBranch("Lima")}
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Lima</h3>
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>100mts este y 100 norte de la plaza de deportes de la Lima de Cartago</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>6191-4588</span>
            </div>
          </div>

          <div
            className="border rounded-md p-4 cursor-pointer hover:border-blue-600 transition-colors"
            onClick={() => handleSelectBranch("San Rafael")}
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">San Rafael</h3>
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Costado norte de la plaza de deportes de Oreamuno de Cartago</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>6143-7099</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
