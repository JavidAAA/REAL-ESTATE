import { Badge } from "lucide-react";

export type ListingProperty = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
};

export const listingsProperties = [
    {
        id: 1,
        title: "Modern Luxury Villa",
        location: "Beverly Hills, CA",
        price: "$4,500,000",
        image: "/mulia.webp",
        beds: 5,
        baths: 4,
        sqft: "4,200",
        type: "Villa",

    },
    {
        id: 2,
        title: "Penthouse Suite",
        location: "Manhattan, NY",
        price: "$8,200,000",
        image: "/mulia.webp",
        beds: 3,
        baths: 3,
        sqft: "2,800",
        type: "Penthouse",
    },
    {
        id: 3,
        title: "Waterfront Estate",
        location: "Malibu, CA",
        price: "$12,000,000",
        image: "/mulia.webp",
        beds: 6,
        baths: 5,
        sqft: "6,500",
        type: "Estate",
    },
    {
        id: 4,
        title: "Waterfront Estate",
        location: "Malibu, CA",
        price: "$12,000,000",
        image: "/mulia.webp",
        beds: 6,
        baths: 5,
        sqft: "6,500",
        type: "Estate",
    }
]