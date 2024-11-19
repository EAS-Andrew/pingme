const caseStudies = [
  {
    company: 'Global Financial Services',
    logo: '/images/case-study-1.png', // Add your images
    stats: {
      calls: '2M+',
      improvement: '45%',
      savings: '$2.5M'
    },
    quote: 'PingMe transformed our call center operations, improving compliance and customer satisfaction significantly.',
    author: 'Sarah Johnson',
    role: 'Director of Operations'
  },
  // Add more case studies...
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div key={study.company} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-primary">{study.company}</h3>
                  <img src={study.logo} alt={study.company} className="h-12" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {study.stats.calls}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {study.stats.improvement}
                    </div>
                    <div className="text-sm text-gray-600">Efficiency Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {study.stats.savings}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  &quot;{study.quote}&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="font-semibold">{study.author}</div>
                    <div className="text-sm text-gray-600">{study.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 