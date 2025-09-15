import Listings from '@/sections/Listings'
import { Navbar } from '@/sections/Navbar'
import React from 'react'

const ListingPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-16">
        <div className="max-w-7xl mx-auto py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Luxury Properties</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our exclusive collection of premium properties in the most desirable locations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              {/* <PropertyFilters /> */}

            </div>
            <div className="lg:col-span-3 px-9 md:px-0">
              <Listings/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ListingPage