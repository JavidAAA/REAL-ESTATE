import ContactLeft from '@/sections/Contact/ContactLeft'
import ContactRight from '@/sections/Contact/ContactRight'
import HeroContact from '@/sections/Contact/HeroContact'
import Footer from '@/sections/Footer'
import { Navbar } from '@/sections/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page