import React from 'react'
import { Shield, Heart, Star, Zap } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct business with the highest ethical standards, ensuring transparency and honesty in every transaction.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Our clients' needs and goals are at the center of everything we do. We listen, understand, and deliver.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for perfection in every aspect of our service, from initial consultation to closing and beyond.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace cutting-edge technology and innovative marketing strategies to stay ahead of the market.",
  },
]

const ValueAbout = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to excellence in luxury real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide unparalleled luxury real estate services that exceed our clients' expectations while
              maintaining the highest standards of professionalism, integrity, and innovation in every transaction.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the world's most trusted and respected luxury real estate brand, known for our exceptional service,
              market expertise, and commitment to creating extraordinary experiences for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueAbout