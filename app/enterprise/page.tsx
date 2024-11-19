import EnterpriseNavbar from '@/components/enterprise/EnterpriseNavbar'
import EnterpriseHero from '@/components/enterprise/EnterpriseHero'
import EnterpriseSolutions from '@/components/enterprise/EnterpriseSolutions'
import EnterpriseFeatures from '@/components/enterprise/EnterpriseFeatures'
import CaseStudies from '@/components/enterprise/CaseStudies'
import ContactCTA from '@/components/enterprise/ContactCTA'
import Footer from '@/components/Footer'

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseNavbar />
      <main className="min-h-screen">
        <EnterpriseHero />
        <EnterpriseSolutions />
        <EnterpriseFeatures />
        <CaseStudies />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
} 