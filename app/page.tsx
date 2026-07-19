import EmergencyBar from '@/components/EmergencyBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Zone from '@/components/Zone'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <EmergencyBar />
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Services />
        <Zone />
        <Reviews />
        <FAQ />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
