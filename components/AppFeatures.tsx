const features = [
  {
    title: 'Smart Recording',
    description: 'Crystal clear audio with background noise reduction',
    details: [
      'Multi-speaker detection',
      'Background noise filtering',
      'Auto volume balancing',
      'Offline recording capability'
    ],
    icon: '🎙️'
  },
  {
    title: 'AI Insights',
    description: 'Get more than just transcripts',
    details: [
      'Action item detection',
      'Key topic summaries',
      'Important date extraction',
      'Follow-up reminders'
    ],
    icon: '🤖'
  },
  {
    title: 'Easy Sharing',
    description: 'Share insights instantly',
    details: [
      'One-click sharing',
      'Export to PDF/Word',
      'Cloud sync across devices',
      'Collaborative notes'
    ],
    icon: '🔄'
  }
]

export default function AppFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Powerful Features Made Simple
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="text-left space-y-3">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" 
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
          ))}
        </div>
      </div>
    </section>
  )
} 