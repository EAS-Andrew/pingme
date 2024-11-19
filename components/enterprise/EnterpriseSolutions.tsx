const solutions = [
  {
    title: 'Call Center Solutions',
    description: 'Optimize operations and improve customer experience with AI-powered insights.',
    features: [
      'Real-time agent assistance',
      'Quality monitoring',
      'Performance analytics',
      'Automated coaching'
    ],
    icon: '🎯'
  },
  {
    title: 'Compliance & Risk',
    description: 'Ensure regulatory compliance and minimize risk across all communications.',
    features: [
      'Real-time compliance monitoring',
      'Risk detection',
      'Audit trails',
      'Policy enforcement'
    ],
    icon: '🛡️'
  },
  {
    title: 'Customer Intelligence',
    description: 'Transform customer interactions into actionable business insights.',
    features: [
      'Sentiment analysis',
      'Trend detection',
      'Customer journey mapping',
      'Predictive analytics'
    ],
    icon: '📊'
  }
]

export default function EnterpriseSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive communication solutions designed for enterprise-scale 
            operations and complex requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.title} 
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl 
                transition-shadow">
              <div className="text-4xl mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" 
                      viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 
                        8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293
                        -7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 