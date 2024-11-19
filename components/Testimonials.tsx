const testimonials = [
  {
    quote: "PingMe helps me keep track of all my client meetings. The action items feature is a game-changer for following up.",
    author: "Alex Kim",
    role: "Freelance Designer",
    image: "/testimonials/alex.jpg"
  },
  {
    quote: "As a student, I use it to record lectures and study sessions. The transcripts make reviewing so much easier!",
    author: "Emma Thompson",
    role: "Graduate Student",
    image: "/testimonials/emma.jpg"
  },
  {
    quote: "Perfect for my small business meetings. No more scrambling to take notes while talking to clients.",
    author: "Marcus Chen",
    role: "Small Business Owner",
    image: "/testimonials/marcus.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers are saying about PingMe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg relative">
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-6xl text-primary/10">
                &quot;
              </div>
              
              <blockquote className="text-gray-700 mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center space-x-8">
          {/* Add trusted company logos */}
          <img src="/logos/company1.svg" alt="Company 1" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/logos/company2.svg" alt="Company 2" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          {/* Add more logos */}
        </div>
      </div>
    </section>
  )
} 