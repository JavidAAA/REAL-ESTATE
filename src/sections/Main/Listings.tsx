import React from 'react'
import { listingsProperties } from '@/constants'
import CardListings from '@/components/CardListings'

const Listings = () => {
  return (
    <div className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most exclusive properties available today.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {listingsProperties.map((property) => (
            <CardListings key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listings
