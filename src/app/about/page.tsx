import AboutPage from '@/pages/AboutPage'
import Footer from '@/sections/Footer'
import { Navbar } from '@/sections/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AboutPage/>
        <Footer/>
    </div>
  )
}

export default page