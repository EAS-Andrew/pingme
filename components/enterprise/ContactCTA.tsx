export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise Communications?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our enterprise team is ready to help you design a solution that meets 
            your specific needs. Let&apos;s discuss how PingMe can work for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg 
              font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 
              rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Enterprise Brief
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Enterprise Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">99.99%</div>
              <div className="text-white/80">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">ISO 27001</div>
              <div className="text-white/80">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 