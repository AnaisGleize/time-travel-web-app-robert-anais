"use client"

import { useState } from "react"
import Image from "next/image"
import { destinations, type Destination } from "@/lib/destinations"
import { ArrowRight, MapPin, Calendar, Sparkles, X, CheckCircle2 } from "lucide-react"

export function DestinationsSection() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null)
  const [showBooking, setShowBooking] = useState(false)
  const [bookingDest, setBookingDest] = useState<Destination | null>(null)

  const openDetail = (dest: Destination) => {
    setSelectedDest(dest)
    document.body.style.overflow = "hidden"
  }

  const closeDetail = () => {
    setSelectedDest(null)
    document.body.style.overflow = ""
  }

  const openBooking = (dest: Destination) => {
    setBookingDest(dest)
    setShowBooking(true)
    setSelectedDest(null)
    document.body.style.overflow = "hidden"
  }

  const closeBooking = () => {
    setShowBooking(false)
    setBookingDest(null)
    document.body.style.overflow = ""
  }

  return (
    <>
      <section id="destinations" className="relative bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
              Nos destinations
            </p>
            <h2 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
              Six epoques vous attendent
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              {"Chaque epoque a ete soigneusement selectionnee pour son potentiel d'emerveillement. Explorez, choisissez et laissez-vous transporter."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                dest={dest}
                onDiscover={() => openDetail(dest)}
                onBook={() => openBooking(dest)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedDest && (
        <DetailModal
          dest={selectedDest}
          onClose={closeDetail}
          onBook={() => openBooking(selectedDest)}
        />
      )}

      {/* Booking Modal */}
      {showBooking && bookingDest && (
        <BookingModal destination={bookingDest} onClose={closeBooking} />
      )}
    </>
  )
}

/* ---------------------------------- */
/*         Destination Card           */
/* ---------------------------------- */

function DestinationCard({
  dest,
  onDiscover,
  onBook,
}: {
  dest: Destination
  onDiscover: () => void
  onBook: () => void
}) {
  return (
    <div className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/40">
      {/* Image - always visible */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <span className="absolute left-4 top-4 border border-primary/40 bg-card/70 px-3 py-1 text-[10px] tracking-widest uppercase text-primary backdrop-blur-sm">
          {dest.date}
        </span>
      </div>

      {/* Content - always visible */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
        <h3 className="mb-1 font-serif text-2xl text-foreground">
          {dest.title}
        </h3>
        <p className="mb-3 text-xs font-medium tracking-widest uppercase text-primary">
          {dest.subtitle}
        </p>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {dest.description}
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={onDiscover}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-primary transition-colors hover:text-foreground"
          >
            <span>Decouvrir</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <span className="h-3 w-px bg-border" />
          <button
            onClick={onBook}
            className="text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------- */
/*          Detail Modal              */
/* ---------------------------------- */

function DetailModal({
  dest,
  onClose,
  onBook,
}: {
  dest: Destination
  onClose: () => void
  onBook: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md animate-in fade-in duration-300" />
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-thin animate-in fade-in slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-foreground/50 transition-colors hover:text-primary"
          aria-label="Fermer"
        >
          <X size={28} />
        </button>

        <div className="overflow-hidden border border-border bg-card">
          {/* Header image */}
          <div className="relative h-64 w-full overflow-hidden sm:h-72">
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-primary">
                  <Calendar size={12} />
                  {dest.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-primary">
                  <MapPin size={12} />
                  {dest.subtitle}
                </span>
              </div>
              <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
                {dest.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {dest.longDescription}
            </p>

            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary">
                <Sparkles size={14} />
                Points forts
              </h3>
              <ul className="flex flex-col gap-3">
                {dest.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onBook}
                className="flex-1 border border-primary bg-primary px-6 py-3 text-center text-xs tracking-widest uppercase text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Reserver maintenant
              </button>
              <button
                onClick={onClose}
                className="flex-1 border border-border bg-transparent px-6 py-3 text-center text-xs tracking-widest uppercase text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Retour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------- */
/*          Booking Modal             */
/* ---------------------------------- */

interface FormData {
  firstName: string
  lastName: string
  email: string
  people: string
  days: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  people?: string
  days?: string
}

function BookingModal({
  destination,
  onClose,
}: {
  destination: Destination
  onClose: () => void
}) {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    people: "",
    days: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = "Le prenom est requis"
    if (!form.lastName.trim()) newErrors.lastName = "Le nom est requis"
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "L'email n'est pas valide"
    }
    if (!form.people) {
      newErrors.people = "Le nombre de personnes est requis"
    } else if (parseInt(form.people) < 1 || parseInt(form.people) > 12) {
      newErrors.people = "Entre 1 et 12 personnes"
    }
    if (!form.days) {
      newErrors.days = "La duree est requise"
    } else if (parseInt(form.days) < 1 || parseInt(form.days) > 30) {
      newErrors.days = "Entre 1 et 30 jours"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/85 backdrop-blur-md animate-in fade-in duration-300" />
      <div
        className="relative z-10 w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-foreground/50 transition-colors hover:text-primary"
          aria-label="Fermer"
        >
          <X size={28} />
        </button>

        <div className="border border-border bg-card">
          {/* Header */}
          <div className="border-b border-border px-6 py-5 sm:px-8">
            <p className="mb-1 text-xs tracking-[0.2em] uppercase text-primary">
              Reservation
            </p>
            <h2 className="font-serif text-2xl text-foreground">
              {destination.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {destination.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-6 sm:px-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  Reservation confirmee
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {"Merci " + form.firstName + " ! Votre demande de reservation pour " + destination.title + " a bien ete enregistree. Vous recevrez un email de confirmation a " + form.email + "."}
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 border border-primary bg-primary px-8 py-3 text-xs tracking-widest uppercase text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Prenom"
                    value={form.firstName}
                    error={errors.firstName}
                    onChange={(v) => handleChange("firstName", v)}
                    placeholder="Jean"
                    type="text"
                  />
                  <FormField
                    label="Nom"
                    value={form.lastName}
                    error={errors.lastName}
                    onChange={(v) => handleChange("lastName", v)}
                    placeholder="Dupont"
                    type="text"
                  />
                </div>
                <FormField
                  label="Adresse email"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => handleChange("email", v)}
                  placeholder="jean.dupont@email.com"
                  type="email"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Nombre de personnes"
                    value={form.people}
                    error={errors.people}
                    onChange={(v) => handleChange("people", v)}
                    placeholder="1 - 12"
                    type="number"
                    min={1}
                    max={12}
                  />
                  <FormField
                    label="Duree du sejour (jours)"
                    value={form.days}
                    error={errors.days}
                    onChange={(v) => handleChange("days", v)}
                    placeholder="1 - 30"
                    type="number"
                    min={1}
                    max={30}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full border border-primary bg-primary px-6 py-3 text-xs tracking-widest uppercase text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                >
                  Confirmer la reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------- */
/*            Form Field              */
/* ---------------------------------- */

function FormField({
  label,
  value,
  error,
  onChange,
  placeholder,
  type,
  min,
  max,
}: {
  label: string
  value: string
  error?: string
  onChange: (v: string) => void
  placeholder: string
  type: string
  min?: number
  max?: number
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium tracking-wider uppercase text-foreground/70">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && (
        <p className="text-xs text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  )
}
