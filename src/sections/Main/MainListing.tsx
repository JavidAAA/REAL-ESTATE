import ListingPage from '@/pages/ListingPage'
import React from 'react'
import Listings from '../Listings'

const MainListing = () => {
  return (
    <div className='py-20 px-4'>
      <Listings slice={3}/>
    </div>
  )
}

export default MainListing