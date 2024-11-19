const useCases = [
  {
    title: 'Students & Education',
    description: 'Record lectures, study groups, and research discussions',
    benefits: [
      'Never miss important lecture points',
      'Easy sharing with study groups',
      'Quick search through transcripts',
      'Highlight key concepts'
    ],
    icon: '📚'
  },
  {
    title: 'Freelancers & Consultants',
    description: 'Capture client meetings and project discussions',
    benefits: [
      'Track client requirements',
      'Automatic action items',
      'Professional meeting summaries',
      'Easy client sharing'
    ],
    icon: '💼'
  },
  {
    title: 'Small Business Owners',
    description: 'Record team meetings and customer interactions',
    benefits: [
      'Keep team aligned',
      'Track decisions made',
      'Follow up on commitments',
      'Share meeting highlights'
    ],
    icon: '🏪'
  }
]

export default function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Perfect for Every Meeting
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-50 rounded-lg p-8 
              shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <ul className="space-y-3">
                {useCase.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" 
                      viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {benefit}
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