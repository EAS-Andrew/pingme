const features = [
  {
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption, dedicated infrastructure, and compliance with GDPR, HIPAA, and other regulations.',
    icon: '🔒',
    details: [
      'End-to-end encryption',
      'Data sovereignty options',
      'Regular security audits',
      'Custom retention policies'
    ]
  },
  {
    title: 'Advanced Analytics',
    description: 'Deep insights into customer interactions, agent performance, and business trends.',
    icon: '📊',
    details: [
      'Real-time dashboards',
      'Custom reporting',
      'Predictive analytics',
      'Trend analysis'
    ]
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Handle millions of calls with consistent performance and reliability.',
    icon: '⚡',
    details: [
      'Auto-scaling',
      'Load balancing',
      'Geographic redundancy',
      'High availability'
    ]
  },
  {
    title: 'Custom AI Models',
    description: 'Tailored AI solutions trained on your specific industry and use cases.',
    icon: '🤖',
    details: [
      'Custom language models',
      'Industry-specific training',
      'Continuous learning',
      'Bias detection'
    ]
  }
]

export default function EnterpriseFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Enterprise Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-8 shadow-lg 
              hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <span className="text-4xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" 
                          viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 
                            8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293
                            -7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 