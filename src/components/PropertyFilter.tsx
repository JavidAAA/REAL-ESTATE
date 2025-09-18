// components/PropertyFilter.tsx
import React from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { listingsProperties } from '@/constants';

export type FilterState = {
  search: string;
  minPrice: string;
  maxPrice: string;
  location: string;
  type: string;
  beds: string;
};

type PropertyFilterProps = {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
};

const PropertyFilter = ({ filters, onFiltersChange }: PropertyFilterProps) => {
  // Extract unique values dari data untuk dropdown options
  const locations = [...new Set(listingsProperties.map(p => p.location))];
  const types = [...new Set(listingsProperties.map(p => p.type))];

  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
      <div className="flex items-center mb-6">
        <Filter className="w-5 h-5 mr-2 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Filter Properties</h3>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search properties..."
            value={filters.search}
            onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Price Range</label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => onFiltersChange({ ...filters, minPrice: e.target.value })}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => onFiltersChange({ ...filters, maxPrice: e.target.value })}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <select
            value={filters.location}
            onChange={(e) => onFiltersChange({ ...filters, location: e.target.value })}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary appearance-none"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
        <select
          value={filters.type}
          onChange={(e) => onFiltersChange({ ...filters, type: e.target.value })}
          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
        >
          <option value="">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Bedrooms</label>
        <select
          value={filters.beds}
          onChange={(e) => onFiltersChange({ ...filters, beds: e.target.value })}
          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
        >
          <option value="">Any</option>
          <option value="100">100+</option>
          <option value="200">200+</option>
          <option value="300">300+</option>
          <option value="400">400+</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => onFiltersChange({
          search: '',
          minPrice: '',
          maxPrice: '',
          location: '',
          type: '',
          beds: ''
        })}
        className="w-full bg-muted text-muted-foreground py-2 px-4 rounded-lg hover:bg-muted/80 transition-colors duration-300"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default PropertyFilter;