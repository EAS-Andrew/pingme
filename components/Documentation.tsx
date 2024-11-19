export default function Documentation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Comprehensive Documentation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get started quickly with our detailed documentation, code samples, 
              and API references.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" 
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Quick start guides</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" 
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>API reference</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" 
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                    strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Code samples</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg 
                font-semibold hover:bg-primary/90 transition-colors">
                View Documentation
              </button>
              <button className="border border-primary text-primary px-6 py-3 
                rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                API Reference
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`
const pingme = require('pingme-sdk');

// Initialize the client
const client = new pingme.Client({
  apiKey: process.env.PINGME_API_KEY
});

// Start recording a call
async function startCall() {
  const call = await client.calls.create({
    channelId: 'call-123',
    options: {
      transcription: true,
      sentiment: true,
      keywords: ['urgent', 'support']
    }
  });

  // Real-time events
  call.on('transcription', (data) => {
    console.log('Transcription:', data.text);
  });

  call.on('sentiment', (data) => {
    console.log('Sentiment score:', data.score);
  });
}
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
} 