import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, itemsVariants } from '@/utils/motion'

const HeroAbout = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/bg-hero.jpg"
            alt="Luxury Real Estate Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          About
          <span className="block text-primary">Luxury Estate</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Redefining luxury real estate with unparalleled expertise, exceptional service, and exclusive access to the
          world's most prestigious properties.
        </p>
      </div>
    </section>

  )
}

export default HeroAbout