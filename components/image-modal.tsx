"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  productName: string
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, productName }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="relative w-full h-[70vh]">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-center">{productName}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
