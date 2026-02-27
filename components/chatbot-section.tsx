"use client"

import { useState } from "react"
import { destinations, type Destination } from "@/lib/destinations"
import { MessageCircle, X, Send, ChevronDown } from "lucide-react"

interface Message {
  role: "bot" | "user"
  content: string
}

const welcomeMessage: Message = {
  role: "bot",
  content:
    "Bienvenue chez TimeTravel Agency ! Je suis votre assistant temporel. Choisissez une epoque ci-dessous ou posez-moi une question pour commencer votre voyage.",
}

export function ChatbotSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([welcomeMessage])
  const [selectedPeriod, setSelectedPeriod] = useState<Destination | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [showPeriodSelect, setShowPeriodSelect] = useState(false)

  const handleSelectPeriod = (dest: Destination) => {
    setSelectedPeriod(dest)
    setShowPeriodSelect(false)
    setMessages((prev) => [
      ...prev,
      { role: "user", content: `Je suis interesse par ${dest.title}` },
      {
        role: "bot",
        content: `Excellent choix ! ${dest.longDescription}\n\nVoici les questions les plus frequentes sur ${dest.title}. Cliquez sur l'une d'elles ou posez votre propre question :`,
      },
    ])
  }

  const handleSelectQuestion = (q: { question: string; answer: string }) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: q.question },
      { role: "bot", content: q.answer },
    ])
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    const userMsg = inputValue.trim()
    setInputValue("")

    setMessages((prev) => [...prev, { role: "user", content: userMsg }])

    if (selectedPeriod) {
      const matched = selectedPeriod.chatQuestions.find((q) =>
        userMsg.toLowerCase().includes(q.question.toLowerCase().split(" ").slice(0, 3).join(" ").toLowerCase())
      )
      if (matched) {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", content: matched.answer }])
        }, 600)
      } else {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: `Merci pour votre question sur ${selectedPeriod.title} ! Pour une reponse detaillee, je vous invite a consulter nos questions frequentes ci-dessous ou a contacter un agent specialise via le formulaire de reservation.`,
            },
          ])
        }, 600)
      }
    } else {
      const matchedDest = destinations.find(
        (d) =>
          userMsg.toLowerCase().includes(d.title.toLowerCase()) ||
          userMsg.toLowerCase().includes(d.subtitle.toLowerCase())
      )
      if (matchedDest) {
        handleSelectPeriod(matchedDest)
      } else {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content:
                "Je vous invite a choisir une epoque pour que je puisse vous aider au mieux. Nos 6 destinations sont : Paris 1889, Le Cretace, Florence 1504, Japon Feodal, Egypte Antique et New York 1920.",
            },
          ])
        }, 600)
      }
    }
  }

  return (
    <>
      <section id="chatbot" className="relative bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
              Assistant Temporel
            </p>
            <h2 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
              Besoin de conseils ?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
              {"Notre assistant intelligent vous accompagne dans le choix de votre destination, repond a vos questions et vous aide a preparer votre voyage temporel."}
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="border border-border bg-card">
              <div className="border-b border-border p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Assistant TimeTravel</p>
                    <p className="text-xs text-muted-foreground">En ligne</p>
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>

              <div className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-thin">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground border border-border"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {!selectedPeriod && (
                  <div className="flex flex-wrap gap-2">
                    {destinations.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => handleSelectPeriod(dest)}
                        className="border border-primary/30 bg-transparent px-3 py-1.5 text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        {dest.title}
                      </button>
                    ))}
                  </div>
                )}

                {selectedPeriod && (
                  <div className="space-y-2">
                    {selectedPeriod.chatQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelectQuestion(q)}
                        className="block w-full border border-border bg-transparent px-4 py-2.5 text-left text-xs leading-relaxed text-foreground/80 transition-all hover:border-primary/50 hover:text-primary"
                      >
                        {q.question}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-border p-4">
                {selectedPeriod && (
                  <div className="mb-3">
                    <button
                      onClick={() => setShowPeriodSelect(!showPeriodSelect)}
                      className="flex items-center gap-2 text-xs text-primary tracking-wider"
                    >
                      <span>Epoque : {selectedPeriod.title}</span>
                      <ChevronDown size={12} className={`transition-transform ${showPeriodSelect ? "rotate-180" : ""}`} />
                    </button>
                    {showPeriodSelect && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {destinations.map((dest) => (
                          <button
                            key={dest.id}
                            onClick={() => handleSelectPeriod(dest)}
                            className={`border px-2 py-1 text-xs transition-all ${
                              dest.id === selectedPeriod.id
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                            }`}
                          >
                            {dest.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Posez votre question..."
                    className="flex-1 border border-border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition-all hover:bg-primary/80"
                    aria-label="Envoyer le message"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground shadow-2xl transition-all hover:scale-105 md:hidden"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  )
}
