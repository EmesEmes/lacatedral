"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BlurText from "./blurText"

const images = [
  { src: "/images/tattoos/marlon/1.webp", alt: "Apple product 1", artist: "Marlon", style: "Neotradicional"},
  { src: "/images/tattoos/marlon/2.webp", alt: "Apple product 2", artist: "Marlon", style: "Neotradicional"},
  { src: "/images/tattoos/marlon/3.webp", alt: "Apple product 3", artist: "Marlon", style: "Neotradicional"},
  { src: "/images/tattoos/marlon/4.webp", alt: "Apple product 4", artist: "Marlon", style: "Neotradicional"},
  { src: "/images/tattoos/marlon/5.webp", alt: "Apple product 5", artist: "Marlon", style: "Neotradicional"},
  { src: "/images/tattoos/marlon/6.webp", alt: "Apple product 6", artist: "Marlon", style: "Neotradicional"},
]

export default function AppleCarousel() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const goToNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const goToPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  useEffect(() => {
    const interval = setInterval(goToNext, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <div className="relative w-full px-4 py-8 my-10">
      <BlurText
        text="ALGUNOS DE NUESTROS TRABAJOS FAVORITOS"
        delay={50}
        animateBy="words"
        direction="top"
        className="text-5xl mb-10 text-center text-white"
      />
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                
              </div>
              <p className="text-white mt-4 text-2xl">{image.artist}</p>
              <p className="text-white">{image.style}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

