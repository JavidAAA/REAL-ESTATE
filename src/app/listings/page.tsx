import ListingPage from '@/pages/ListingPage'
import Footer from '@/sections/Footer'
import { Navbar } from '@/sections/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ListingPage/>
        <Footer/>
    </div>
  )
}

export default page