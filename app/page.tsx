import EmergencyBar from '@/components/EmergencyBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Certifications from '@/components/Certifications'
import About from '@/components/About'
import Services from '@/components/Services'
import SolutionsPro from '@/components/SolutionsPro'
import Engagement from '@/components/Engagement'
import Process from '@/components/Process'
import Stats from '@/components/Stats'
import WhyUs from '@/components/WhyUs'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Gallery from '@/components/Gallery'
import CTABanner from '@/components/CTABanner'
import Zone from '@/components/Zone'
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
        <Certifications />
        <About />
        <Services />
        <SolutionsPro />
        <Engagement />
        <Process />
        <Stats />
        <WhyUs />
        <Pricing />
        <Reviews />
        <Gallery />
        <CTABanner />
        <Zone />
        <FAQ />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
