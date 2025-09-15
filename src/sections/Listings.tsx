import React from 'react'
import { listingsProperties } from '@/constants'
import CardListings from '@/components/CardListings'

type ListingProps = {
  slice?: number  // jadikan optional
}

const Listings = ({ slice }: ListingProps) => {
  // kalau ada slice → potong datanya, kalau tidak → tampil semua
  const mainList = slice 
    ? listingsProperties.slice(0, slice) 
    : listingsProperties

  return (
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mainList.map((property) => (
            <CardListings key={property.id} property={property} />
          ))}
        </div>
      </div>
  )
}

export default Listings
