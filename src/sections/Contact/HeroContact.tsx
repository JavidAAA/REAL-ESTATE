import React from 'react'

const HeroContact = () => {
  return (
    <div>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mulia.webp"
          alt="Luxury Real Estate Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Get In
          <span className="block text-primary">Touch</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Ready to find your dream property? Our expert team is here to guide you through every step of your luxury real
          estate journey.
        </p>
      </div>
    </section>
    </div>
  )
}

export default HeroContact