import React from 'react'
import { Award, Users, Home, TrendingUp } from "lucide-react"

const stats = [
  { icon: Home, label: "Properties Sold", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "1,200+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: TrendingUp, label: "Years Experience", value: "15+" },
]

const StoryAbout = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2009, LuxuryEstate began with a simple yet ambitious vision: to revolutionize the luxury real
              estate experience. What started as a boutique agency has grown into one of the most respected names in
              premium property transactions.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our founders, Sarah Johnson and Michael Chen, recognized that luxury real estate required more than just
              transactions—it demanded a deep understanding of lifestyle, investment potential, and the unique needs of
              discerning clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we continue to set the standard for excellence in luxury real estate, combining cutting-edge
              technology with personalized service to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="relative">
            <img
              src="/aboutt.jpg"
              alt="Our Office"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoryAbout