'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'
import { listingsProperties, ListingProperty } from '@/constants'

const SearchBox = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<ListingProperty[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value.trim() === "") {
      setResults([])
      return
    }

    const filtered = listingsProperties.filter((property) =>
      property.title.toLowerCase().includes(value.toLowerCase()) ||
      property.location.toLowerCase().includes(value.toLowerCase())
    )

    setResults(filtered)
  }

  return (
    <div className="relative w-full md:w-[80%] mx-auto">
      {/* Search Box */}
      <div className="bg-white h-[4rem] flex px-4 sm:px-8 flex-col justify-center rounded-xl shadow">
        <div className="flex items-center justify-between h-full">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search"
            className="sm:flex-[0.9] h-[60%] bg-gray-100 block rounded-lg outline-none px-4 placeholder:text-sm text-black"
          />
          <div className="flex items-center space-x-4">
            <div className="lg:flex hidden items-center cursor-pointer">
              <HiAdjustmentsHorizontal className="text-gray-700 w-6 h-6" />
              <p className="text-gray-700 font-semibold">Advanced</p>
            </div>

            <div className="w-12 h-12 bg-primary flex items-center hover:bg-primary/80 transition-all duration-150 cursor-pointer justify-center text-white rounded-full -mr-2">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Results */}
      {results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
          {results.map((property) => (
            <div
              key={property.id}
              className="p-4 border-b last:border-none hover:bg-gray-50 cursor-pointer"
            >
              <p className="font-semibold text-black">{property.title}</p>
              <p className="text-sm text-gray-500">{property.location}</p>
              <p className="text-primary font-bold">{property.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBox
