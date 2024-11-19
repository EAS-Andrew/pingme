const features = [
  {
    title: 'Smart Recording',
    description: 'Automatically enhances voice clarity and reduces background noise',
    icon: '🎙️',
  },
  {
    title: 'Instant Transcription',
    description: 'Get accurate transcripts in real-time as your meeting happens',
    icon: '📝',
  },
  {
    title: 'Action Items',
    description: 'AI automatically identifies and lists action items and deadlines',
    icon: '✅',
  },
  {
    title: 'Easy Sharing',
    description: 'Share meeting highlights and notes with just one click',
    icon: '🔗',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Why Choose PingMe?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="bg-gray-light p-6 rounded-full w-16 h-16 mx-auto mb-6 
                flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 