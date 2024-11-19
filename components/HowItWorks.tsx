export default function HowItWorks() {
  const steps = [
    {
      title: 'Record',
      description: 'Open the app and start recording your meeting with one tap.',
      icon: '🎙️'
    },
    {
      title: 'Listen',
      description: 'Our AI enhances voices and reduces background noise automatically.',
      icon: '👂'
    },
    {
      title: 'Review',
      description: 'Get instant transcripts, key points, and action items.',
      icon: '📝'
    },
    {
      title: 'Share',
      description: 'Share meeting notes and action items with participants instantly.',
      icon: '✉️'
    }
  ]

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          How PingMe Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full 
                  border-t-2 border-dashed border-primary/30" />
              )}
              <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-gray-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 