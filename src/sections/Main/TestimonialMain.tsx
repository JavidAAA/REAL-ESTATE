import React from 'react'
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    content:
      "Exceptional service and attention to detail. They helped me find the perfect investment property that exceeded all my expectations.",
    rating: 5,
    image: "https://c4.wallpaperflare.com/wallpaper/527/433/265/sousuke-aizen-tite-kubo-anime-boys-bleach-purple-background-hd-wallpaper-preview.jpg",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    content:
      "The team's expertise in luxury real estate is unmatched. They made the entire process seamless and stress-free.",
    rating: 5,
    image: "https://c4.wallpaperflare.com/wallpaper/527/433/265/sousuke-aizen-tite-kubo-anime-boys-bleach-purple-background-hd-wallpaper-preview.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    content:
      "From the initial consultation to closing, their professionalism and market knowledge were evident every step of the way.",
    rating: 5,
    image: "https://c4.wallpaperflare.com/wallpaper/527/433/265/sousuke-aizen-tite-kubo-anime-boys-bleach-purple-background-hd-wallpaper-preview.jpg",
  },
]

const TestimonialMain = () => {
  return (
     <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border-border hover:border-primary/50 transition-colorstext-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialMain