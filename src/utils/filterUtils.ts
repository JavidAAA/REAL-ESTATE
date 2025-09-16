// utils/filterUtils.ts
import { ListingProperty } from '@/constants';
import { FilterState } from '@/components/PropertyFilter';

// Helper function untuk convert price string ke number
const priceToNumber = (priceString: string): number => {
  return parseInt(priceString.replace(/,/g, ''));
};

// Main filtering function
export const filterProperties = (
  properties: ListingProperty[], 
  filters: FilterState
): ListingProperty[] => {
  return properties.filter(property => {
    // Search filter - cari di title dan location
    if (filters.search && 
        !property.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !property.location.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    // Price range filter
    const propertyPrice = priceToNumber(property.price);
    
    if (filters.minPrice) {
      const minPrice = priceToNumber(filters.minPrice);
      if (propertyPrice < minPrice) return false;
    }
    
    if (filters.maxPrice) {
      const maxPrice = priceToNumber(filters.maxPrice);
      if (propertyPrice > maxPrice) return false;
    }

    // Location filter
    if (filters.location && property.location !== filters.location) {
      return false;
    }

    // Type filter
    if (filters.type && property.type !== filters.type) {
      return false;
    }

    // Bedrooms filter
    if (filters.beds && property.beds < parseInt(filters.beds)) {
      return false;
    }

    return true;
  });
};