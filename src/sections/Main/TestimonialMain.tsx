import React from 'react'
import { Star } from "lucide-react"

const testimonials = [
  {
  name: "Made Wirawan",
  role: "Tourism Entrepreneur",
  content:
    "Truly professional service. They helped me secure the right villa property in a prime tourist area, perfect for my business.",
  rating: 5,
  image: "/unnamed.jpg",
},
{
  name: "Ayu Kartika",
  role: "Architect",
  content:
    "The team really understood my needs. The whole transaction was smooth, and they were always responsive to every question.",
  rating: 5,
  image: "/unnamed.jpg",
},
{
  name: "I Wayan Putra",
  role: "Property Investor",
  content:
    "Very satisfied with their service. The properties offered truly match the premium standards I was looking for in Bali.",
  rating: 5,
  image: "/unnamed.jpg",
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