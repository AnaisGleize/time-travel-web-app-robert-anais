"use client"

import { useRef } from "react"
import { Shield, Compass, Clock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Technologie Temporelle",
    description:
      "Notre portail chrono-quantique brevetee garantit un transfert temporel stable et securise vers n'importe quelle epoque.",
  },
  {
    icon: Shield,
    title: "Securite Absolue",
    description:
      "Protocole de protection temporelle certifie. Bulle d'invisibilite et retour instantane garanti.",
  },
  {
    icon: Compass,
    title: "Guides Experts",
    description:
      "Des historiens specialises et des agents temporels formes vous accompagnent a chaque instant de votre voyage.",
  },
  {
    icon: Sparkles,
    title: "Experiences Sur Mesure",
    description:
      "Chaque voyage est unique. Personnalisez votre itineraire, vos rencontres et vos activites.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Qui sommes-nous
          </p>
          <h2 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
            {"L'agence qui defie le temps"}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            {"Depuis 2019, TimeTravel Agency repousse les frontieres du possible. Notre technologie de pointe et nos equipes d'experts vous offrent des experiences temporelles inoubliables en toute securite."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-primary/30 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 font-serif text-lg text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-3">
          {[
            { number: "2 847", label: "Voyageurs satisfaits" },
            { number: "6", label: "Epoques disponibles" },
            { number: "100%", label: "Retours securises" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 font-serif text-4xl text-primary md:text-5xl">
                {stat.number}
              </p>
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
