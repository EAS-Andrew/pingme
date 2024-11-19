const products = [
  {
    title: 'PingMe',
    description: 'Perfect for retail users. Simple, efficient communication tools.',
    features: ['Easy to use interface', 'Basic analytics', 'Customer support'],
    buttonText: 'Start Free',
  },
  {
    title: 'PingMe Core',
    description: 'API access for developers and integration needs.',
    features: ['Full API access', 'Developer tools', 'Custom integration'],
    buttonText: 'View API Docs',
  },
  {
    title: 'PingMe Enterprise',
    description: 'Complete solution for large-scale operations.',
    features: ['Advanced analytics', 'Custom deployment', 'Dedicated support'],
    buttonText: 'Contact Sales',
  },
]

export default function Products() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Choose Your Solution
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="bg-white p-8 rounded-lg 
              shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <ul className="mb-8 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" 
                      fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 
                        8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293
                        -7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg 
                font-semibold hover:bg-primary/90 transition-colors">
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 