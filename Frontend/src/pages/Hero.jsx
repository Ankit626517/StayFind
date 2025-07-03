import React from 'react'

function Hero() {
  return (
     <section className="relative h-[91vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Perfect
          <span className="block text-amber-400">Luxury Stay</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Experience world-class hospitality at handpicked hotels around the globe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
          >
            Explore Hotels
          </button>
          <button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
          >
            View Deals
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
