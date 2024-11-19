export default function Developers() {
  return (
    <section id="developers" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Built for Developers
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Access PingMe's powerful features through our comprehensive API. 
              Build custom solutions with our flexible SDK.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">RESTful API</h3>
                  <p className="text-gray-400">
                    Simple, powerful endpoints for all PingMe features
                  </p>
                </div>
              </div>
              {/* Add more features */}
            </div>
            <div className="mt-8">
              <button className="bg-primary text-white px-8 py-3 rounded-lg 
                font-semibold hover:bg-primary/90 transition-colors mr-4">
                View Documentation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg 
                font-semibold hover:bg-white/10 transition-colors">
                Get API Key
              </button>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`
// Example API Usage
const pingme = require('pingme-sdk');

const client = new pingme.Client({
  apiKey: 'your-api-key'
});

// Start recording
const session = await client.startRecording({
  channelId: 'call-123',
  options: {
    transcription: true,
    sentiment: true
  }
});
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
} 