"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#destinations", label: "Destinations" },
  { href: "#gallery", label: "Galerie" },
  { href: "#about", label: "L'Agence" },
  { href: "#chatbot", label: "Assistant" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#home" className="font-serif text-xl tracking-wider text-primary">
          TimeTravel Agency
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#destinations"
          className="hidden rounded-none border border-primary bg-transparent px-6 py-2 text-xs tracking-widest uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground md:block"
        >
          Reserver
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase text-foreground/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#destinations"
              onClick={() => setMobileOpen(false)}
              className="mt-2 border border-primary bg-transparent px-6 py-2 text-center text-xs tracking-widest uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Reserver
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
