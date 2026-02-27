"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { destinations } from "@/lib/destinations"
import { Play, X, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

const GROUPED_IDS = ["paris-1889", "cretaceous", "florence-1504"]
const INDIVIDUAL_IDS = ["japan-feudal", "egypt-ancient", "newyork-1920"]

interface GalleryEntry {
  id: string
  title: string
  subtitle: string
  image: string
  videoUrl: string
  isGroup?: boolean
}

function buildGalleryEntries(): GalleryEntry[] {
  const grouped = destinations.filter((d) => GROUPED_IDS.includes(d.id))
  const individuals = destinations.filter((d) => INDIVIDUAL_IDS.includes(d.id))

  const groupEntry: GalleryEntry = {
    id: "pcf-group",
    title: "Paris / Cretace / Florence",
    subtitle: "Trois epoques, une seule aventure",
    image: grouped[0]?.image ?? "/images/paris-1889.jpg",
    videoUrl: "/videos/paris-cetace-florence.mp4",
    isGroup: true,
  }

  return [
    groupEntry,
    ...individuals.map((d) => ({
      id: d.id,
      title: d.title,
      subtitle: d.subtitle,
      image: d.image,
      videoUrl: d.videoUrl,
    })),
  ]
}

export function GallerySection() {
  const [activeEntry, setActiveEntry] = useState<GalleryEntry | null>(null)
  const entries = buildGalleryEntries()

  const groupedDests = destinations.filter((d) => GROUPED_IDS.includes(d.id))

  return (
    <section id="gallery" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Galerie
          </p>
          <h2 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
            Voyagez en images
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            {"Decouvrez un apercu cinematographique de chaque epoque. Chaque video est capturee par nos equipes sur le terrain temporel."}
          </p>
        </div>

        {/* Grouped: Paris / Cretace / Florence */}
        <div className="mb-8">
          <div className="group relative">
            <div className="relative overflow-hidden border border-border rounded-lg aspect-[21/9]">
              <div className="absolute inset-0 grid grid-cols-3">
                {groupedDests.map((d) => (
                  <div key={d.id} className="relative h-full w-full">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-background/40 transition-all duration-300 group-hover:bg-background/20" />

              <button
                onClick={() => setActiveEntry(entries[0])}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                aria-label="Lire la video de Paris, Cretace et Florence"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/80 bg-primary/10 text-primary backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Play size={24} className="ml-1" />
                </div>
                <div className="text-center">
                  <p className="font-serif text-lg text-foreground drop-shadow-lg">
                    Paris / Cretace / Florence
                  </p>
                  <p className="text-xs tracking-wider uppercase text-primary drop-shadow-md">
                    Trois epoques, une seule aventure
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Individual: Japon, Egypte, New York */}
        <div className="grid gap-6 md:grid-cols-3">
          {entries.filter((e) => !e.isGroup).map((entry) => (
            <div key={entry.id} className="group relative">
              <div className="relative overflow-hidden border border-border rounded-lg aspect-video">
                <Image
                  src={entry.image}
                  alt={`Video de ${entry.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 transition-all duration-300 group-hover:bg-background/20" />

                <button
                  onClick={() => setActiveEntry(entry)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  aria-label={`Lire la video de ${entry.title}`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/80 bg-primary/10 text-primary backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Play size={24} className="ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-lg text-foreground drop-shadow-lg">
                      {entry.title}
                    </p>
                    <p className="text-xs tracking-wider uppercase text-primary drop-shadow-md">
                      {entry.subtitle}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video overlay modal */}
      {activeEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md animate-in fade-in duration-300">
          <button
            onClick={() => setActiveEntry(null)}
            className="absolute right-6 top-6 z-10 text-foreground/70 transition-colors hover:text-primary"
            aria-label="Fermer la video"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative aspect-video w-full overflow-hidden border border-border bg-card rounded-lg">
              <Mp4Player src={activeEntry.videoUrl} title={activeEntry.title} />
            </div>
            <div className="mt-4 text-center">
              <p className="font-serif text-2xl text-foreground">
                {activeEntry.title}
              </p>
              <p className="text-sm tracking-wider uppercase text-primary">
                {activeEntry.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/* ---------------------------------- */
/*          Native MP4 Player         */
/* ---------------------------------- */

function Mp4Player({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.load()
    v.play().catch(() => {
      setPlaying(false)
    })
  }, [src])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }, [])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    v.currentTime = pct * v.duration
  }, [])

  return (
    <div className="group/player relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        aria-label={`Video de ${title}`}
      />

      {/* Controls overlay */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0 bg-gradient-to-t from-card/80 to-transparent pt-12 opacity-0 transition-opacity duration-300 group-hover/player:opacity-100">
        <div
          className="mx-4 h-1 cursor-pointer bg-border rounded-full"
          onClick={handleSeek}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-primary rounded-full transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={togglePlay}
            className="text-foreground/80 transition-colors hover:text-primary"
            aria-label={playing ? "Pause" : "Lecture"}
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            onClick={toggleMute}
            className="text-foreground/80 transition-colors hover:text-primary"
            aria-label={muted ? "Reactiver le son" : "Couper le son"}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </div>
  )
}
