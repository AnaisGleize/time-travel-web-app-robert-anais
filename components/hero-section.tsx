"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { destinations } from "@/lib/destinations"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = destinations

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((dest, index) => (
        <div
          key={dest.id}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={dest.image}
            alt={dest.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-xs tracking-[0.4em] uppercase text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Agence de voyages temporels
        </p>
        <h1 className="mb-6 max-w-4xl font-serif text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 text-balance">
          Voyagez au-dela du temps
        </h1>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          {"Decouvrez six epoques extraordinaires. Vivez l'histoire comme jamais auparavant."}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700">
          <a
            href="#destinations"
            className="border border-primary bg-primary px-8 py-3 text-xs tracking-widest uppercase text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            Choisir ma destination
          </a>
          <a
            href="#gallery"
            className="border border-foreground/30 bg-transparent px-8 py-3 text-xs tracking-widest uppercase text-foreground transition-all hover:border-primary hover:text-primary"
          >
            {"Commencer l'exploration"}
          </a>
        </div>

        <div className="mt-6 flex gap-2 animate-in fade-in duration-1000 delay-1000">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-0.5 transition-all duration-500 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-4 bg-foreground/30"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-foreground/50 transition-colors hover:text-primary animate-bounce"
        aria-label="Defiler vers le bas"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
