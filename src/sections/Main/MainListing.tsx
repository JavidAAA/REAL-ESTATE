'use client'

import ListingPage from '@/pages/ListingPage'
import React from 'react'
import Listings from '../Listings'
import Link from 'next/link'
import { useState } from 'react'

const MainListing = () => {
    const [showRest, setShowRest] = useState(false)
  

  return (
    <div className='py-20 px-4'>
      <Listings slice={3} showRest={true} />


      <div className="text-center mt-14 w-full">
        <Link href="/listings" className="block w-full">
          <button
            className="w-full md:max-w-56 border bg-background shadow-xs 
                 dark:bg-input/30 dark:border-input 
                 dark:hover:bg-input/50 border-primary text-primary 
                 hover:bg-primary hover:text-primary-foreground 
                 px-8 py-4 rounded-md transition"
          >
            View All Properties
          </button>
        </Link>
      </div>

    </div>
  )
}

export default MainListing