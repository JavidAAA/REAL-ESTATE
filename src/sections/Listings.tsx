// sections/Listings.tsx
import React from 'react'
import { listingsProperties, ListingProperty } from '@/constants'
import CardListings from '@/components/CardListings'

type ListingProps = {
  slice?: number
  filteredProperties?: ListingProperty[] // tambahkan prop untuk filtered data
}

const Listings = ({ slice, filteredProperties }: ListingProps) => {
  // Prioritaskan filteredProperties jika ada, baru slice logic
  let displayProperties: ListingProperty[]
  
  if (filteredProperties) {
    // Jika ada filtered properties, gunakan itu
    displayProperties = slice 
      ? filteredProperties.slice(0, slice) 
      : filteredProperties
  } else {
    // Jika tidak ada filtered properties, gunakan semua data
    displayProperties = slice 
      ? listingsProperties.slice(0, slice) 
      : listingsProperties
  }

  // Show empty state jika tidak ada properties
  if (displayProperties.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {displayProperties.map((property) => (
          <CardListings key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default Listings