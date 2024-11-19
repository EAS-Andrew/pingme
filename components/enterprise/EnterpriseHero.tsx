export default function EnterpriseHero() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            Enterprise-Grade Communication Intelligence
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Transform your call center operations with AI-powered insights, 
            enterprise-level security, and scalable infrastructure designed for 
            high-volume environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-lg 
              font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 
              rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '99.99%', label: 'Uptime SLA' },
              { stat: '50M+', label: 'Calls Processed Monthly' },
              { stat: '500+', label: 'Enterprise Clients' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 