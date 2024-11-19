export default function Hero() {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Your Personal Meeting Assistant
          </h1>
          <p className="text-xl mb-8">
            Never miss a detail again. Record your meetings, get instant 
            transcripts, and actionable insights with AI-powered analysis.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg 
              font-semibold hover:bg-gray-100 transition-colors">
              Download Free
            </button>
            <button className="border-2 border-white text-white px-8 py-3 
              rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 