import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DestinationsSection } from "@/components/destinations-section"
import { GallerySection } from "@/components/gallery-section"
import { ChatbotSection } from "@/components/chatbot-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DestinationsSection />
      <GallerySection />
      <ChatbotSection />
      <Footer />
    </main>
  )
}
