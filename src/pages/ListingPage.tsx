// pages/ListingPage.tsx
'use client'

import React, { useState, useMemo } from 'react'
import Listings from '@/sections/Listings'
import { Navbar } from '@/sections/Navbar'
import PropertyFilter, { FilterState } from '@/components/PropertyFilter'
import { filterProperties } from '@/utils/filterUtils'
import { listingsProperties } from '@/constants'

const ListingPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    type: '',
    beds: ''
  });

  // Filter properties berdasarkan current filters
  const filteredProperties = useMemo(() => {
    return filterProperties(listingsProperties, filters);
  }, [filters]);

  return (
    <main className="min-h-screen bg-background p-3 lg:p-0">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 md:gap-8">
            <div className="lg:col-span-1">
              <PropertyFilter filters={filters} onFiltersChange={setFilters} />
            </div>
            <div className="lg:col-span-3 px-0 md:px-4">
              
              <Listings filteredProperties={filteredProperties} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ListingPage