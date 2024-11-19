const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for occasional meetings',
    features: [
      'Up to 30 minutes per recording',
      'Basic transcription',
      'Meeting summaries',
      'Share with 3 people',
      'Mobile app access',
    ],
    highlight: false,
    buttonText: 'Download Free',
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'For professionals who meet regularly',
    features: [
      'Unlimited recording length',
      'Premium transcription',
      'Action item detection',
      'Unlimited sharing',
      'Cloud storage',
      'Priority support',
    ],
    highlight: true,
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Team',
    price: '$24.99',
    period: 'per month',
    description: 'Best for small teams',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Team workspace',
      'Collaborative notes',
      'Advanced analytics',
      'Admin controls',
    ],
    highlight: false,
    buttonText: 'Start Free Trial',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include a 14-day 
            free trial with no credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} 
              className={`rounded-lg overflow-hidden ${
                plan.highlight 
                  ? 'ring-2 ring-primary shadow-xl scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              <div className={`p-8 ${
                plan.highlight ? 'bg-primary text-white' : 'bg-white'
              }`}>
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlight ? 'text-white' : 'text-gray-900'
                }`}>{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className={`text-4xl font-bold ${
                    plan.highlight ? 'text-white' : 'text-gray-900'
                  }`}>{plan.price}</span>
                  <span className={`ml-2 text-sm ${
                    plan.highlight ? 'text-white/90' : 'text-gray-700'
                  }`}>{plan.period}</span>
                </div>
                <p className={`${
                  plan.highlight ? 'text-white/95' : 'text-gray-600'
                } leading-relaxed`}>
                  {plan.description}
                </p>
              </div>
              <div className="p-8 bg-white">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-primary mr-3" 
                        fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 
                            0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="bg-primary text-white px-8 py-4 rounded-lg 
                    font-semibold hover:bg-primary/90 transition-colors">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 