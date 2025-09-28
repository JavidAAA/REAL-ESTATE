import React from 'react'
import { Mail, Phone, Linkedin } from "lucide-react"

const team = [
  {
  name: "Putu Cahya Abadi",
  role: "Founder & CEO",
  image: "/putu.jpg",
  bio: "Expert in Bali’s luxury real estate, connecting investors with prime hotels, villas, and land opportunities.",
  email: "putu.gpi@gmail.com",
  phone: "+62 817-359-851",
},
{
  name: "Minto Sugiarto Halim",
  role: "Co-Founder & COO",
  image: "/andre.jpg",
  bio: "Focused on connecting investors with Bali’s prime hotels and land, delivering smooth deals and lasting value.",
  email: "putu.gpi@gmail.com",
  phone: "+62 812-3833-9250",
},


]

const TeamAbout = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our experienced professionals are dedicated to providing exceptional service and expertise in luxury real
            estate.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-card border-border hover:border-primary/50 transition-colors group 
                 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
                 w-full max-w-sm">
              <div className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamAbout