const integrations = [
  {
    category: 'CRM Systems',
    platforms: [
      { name: 'Salesforce', icon: '💼' },
      { name: 'HubSpot', icon: '🎯' },
      { name: 'Zendesk', icon: '🎪' }
    ]
  },
  {
    category: 'Communication',
    platforms: [
      { name: 'Twilio', icon: '📞' },
      { name: 'RingCentral', icon: '☎️' },
      { name: 'Cisco', icon: '🌐' }
    ]
  },
  {
    category: 'Analytics',
    platforms: [
      { name: 'Tableau', icon: '📊' },
      { name: 'Power BI', icon: '📈' },
      { name: 'Looker', icon: '🔍' }
    ]
  }
]

export default function Integrations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect PingMe with your existing tools and workflows. Our platform 
            integrates with leading business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((category) => (
            <div key={category.category} className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.platforms.map((platform) => (
                  <div key={platform.name} 
                    className="flex items-center p-4 border rounded-lg 
                      hover:border-primary transition-colors">
                    <span className="text-2xl mr-4">{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg 
            font-semibold hover:bg-primary/90 transition-colors">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  )
} 