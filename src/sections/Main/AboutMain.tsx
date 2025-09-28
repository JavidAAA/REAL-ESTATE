import React from 'react'
import { Award, Users, Home, TrendingUp } from "lucide-react"
import Link from 'next/link'

const stats = [
  { icon: Home, label: "Properties Sold", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "1,200+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: TrendingUp, label: "Years Experience", value: "15+" },
]

const AboutMain = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className='order-2 md:order-1'>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in Luxury Real Estate
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PT Global Properti Inovasi, based in Denpasar, Bali, is a real estate company providing integrated solutions in property sales and leasing, management, marketing, consulting, and asset valuation across Indonesia.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With an experienced team and data-driven approach, we help clients achieve their property goals. Our vision is to be a trusted partner in Indonesia’s real estate industry by delivering professional, transparent, and innovative services. PT Global Properti Inovasi is your reliable partner in property management and development.
            </p>
            <Link href='/about'>
                <div className='bg-primary text-center hover:bg-primary/90 px-10 py-2 rounded-lg w-full max-w-44 text-black font-semibold'>
                    Read More
                </div>
            </Link>
          </div>

          <div className="relative order-1 md:order-2">
            <img src="/aboutt.jpg" alt="About Us" className="rounded-2xl shadow-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
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

export default AboutMain