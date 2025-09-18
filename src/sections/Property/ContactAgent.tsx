import React from 'react'
import { ListingProperty } from '@/constants'
import Image from 'next/image'
import { Mail, MessagesSquare, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

interface PropertyDetailsProps {
    property: ListingProperty
}

const ContactAgent = ({ property }: PropertyDetailsProps) => {
    return (
        <div className='space-y-6'>
            <div className='bg-black border-border text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm'>
                <div className='p-6'>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                        {/* Avatar */}
                        <img
                            src="https://images8.alphacoders.com/133/1336085.png"
                            alt="Sarah Johnson"
                            className="w-20 h-20 rounded-full object-cover shadow-md"
                        />

                        {/* Info */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold text-foreground">Sarah Johnson</h3>
                            <p className="text-muted-foreground">Senior Real Estate Agent</p>

                            {/* Contact */}
                            <div className="mt-3 flex flex-col gap-2">
                                <div className="flex items-center justify-center sm:justify-start text-sm text-muted-foreground">
                                    <Phone className="w-4 h-4 mr-2 text-primary" />
                                    <span>(555) 123-4567</span>
                                </div>

                                <div className="flex items-center justify-center sm:justify-start text-sm text-muted-foreground">
                                    <Mail className="w-4 h-4 mr-2 text-primary" />
                                    <span>sarah@luxuryestate.com</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex space-x-2'>
                        <button className='w-full'>
                            <div className='justify-start flex items-center bg-primary hover:bg-primary/80 text-black py-2 px-3 rounded-lg'>
                                <Phone className="w-4 h-4 mr-3" />
                                <p className='text-[14px]'>Call Now</p>
                            </div>
                        </button>

                        <button className='w-full'>
                            <div className='justify-start flex items-center bg-black text-white hover:text-white/80 py-2 px-3 rounded-lg border border-white hover:border-white/80'>
                                <MessagesSquare className="w-4 h-4 mr-3" />
                                <p className='text-[14px]'>Message</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        
            <ContactForm/>

        </div>
    )
}

export default ContactAgent