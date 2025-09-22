import React from 'react'
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"


const contactDetails = [
    {
        icon: MapPin,
        title: "Office Address",
        details: ["123 Luxury Avenue", "Beverly Hills, CA 90210"],
    },
    {
        icon: Phone,
        title: "Phone Numbers",
        details: ["Main: (555) 123-4567", "Direct: (555) 123-4568"],
    },
    {
        icon: Mail,
        title: "Email Addresses",
        details: ["info@luxuryestate.com", "sales@luxuryestate.com"],
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday - Sunday: 10:00 AM - 5:00 PM"],
    },
]


const ContactRight = () => {
    return (
        <div className="space-y-8 px-5 lg:px-0">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    We're here to help you with all your luxury real estate needs. Reach out to us through any of the following
                    methods, and we'll respond promptly.
                </p>
            </div>

            <div className="space-y-6">
                {contactDetails.map((item, index) => (
                    <div key={index} className="bg-black border-border text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                                    {item.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-muted-foreground">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-black border-border text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                    <div className="space-y-3">

                        <button className='w-full'>
                            <div className='justify-start flex items-center bg-primary hover:bg-primary/80 text-black py-2 px-3 rounded-lg'>
                                <Calendar className="w-4 h-4 mr-3" />
                                <p className='text-[14px]'>Schedule a Consultation</p>
                            </div>
                        </button>

                        <button className='w-full'>
                            <div className='justify-start flex items-center bg-black text-white hover:text-white/80 py-2 px-3 rounded-lg border border-white hover:border-white/80'>
                                 <Phone className="w-4 h-4 mr-3" />
                                <p className='text-[14px]'>Request a Call Back</p>
                            </div>
                        </button>

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default ContactRight