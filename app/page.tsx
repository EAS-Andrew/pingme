import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import AppFeatures from '@/components/AppFeatures'
import UseCases from '@/components/UseCases'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <AppFeatures />
        <UseCases />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
