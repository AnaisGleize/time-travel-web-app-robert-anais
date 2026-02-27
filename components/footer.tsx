import Link from "next/link"

const footerLinks = [
  {
    title: "Destinations",
    links: [
      { label: "Paris 1889", href: "#destinations" },
      { label: "Le Cretace", href: "#destinations" },
      { label: "Florence 1504", href: "#destinations" },
      { label: "Japon Feodal", href: "#destinations" },
      { label: "Egypte Antique", href: "#destinations" },
      { label: "New York 1920", href: "#destinations" },
    ],
  },
  {
    title: "L'Agence",
    links: [
      { label: "A propos", href: "#about" },
      { label: "Technologie", href: "#about" },
      { label: "Securite", href: "#about" },
      { label: "Carrieres", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Assistant IA", href: "#chatbot" },
      { label: "Support", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Partenaires", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link
              href="#home"
              className="font-serif text-xl tracking-wider text-primary"
            >
              TimeTravel Agency
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {"Voyagez au-dela du temps. Decouvrez les plus grandes epoques de l'histoire avec une experience immersive et securisee."}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs tracking-widest uppercase text-primary">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 TimeTravel Agency. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            {["Mentions legales", "Politique de confidentialite", "CGV"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
