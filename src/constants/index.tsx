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
    title: "The Mulia Bali",
    location: "Nusa Dua, Bali",
    price: "8,200,000",  
    image: "/mulia.webp",
    beds: 1,
    baths: 1,
    sqft: "59",  
    type: "Resort",
  },
  {
    id: 2,
    title: "Keraton Jimbaran",
    location: "Jimbaran, Bali",
    price: "8,200,000",  
    image: "/mulia.webp",
    beds: 1,
    baths: 1,
    sqft: "41", 
    type: "Beach Resort",
  },
  {
    id: 3,
    title: "Abi Bali Resort",
    location: "Jimbaran, Bali",
    price: "8,200,000",
    image: "/mulia.webp",
    beds: 2,
    baths: 2,
    sqft: "200",
    type: "Resort",
  },
  {
    id: 4,
    title: "Alam Ubud",
    location: "Ubud, Bali",
    price: "8,200,000",
    image: "/mulia.webp",
    beds: 2,
    baths: 2,
    sqft: "180",
    type: "Hideaway Resort",
  },
  {
    id: 5,
    title: "Seminyak Resort & Spa",
    location: "Seminyak, Bali",
    price: "8,200,000",
    image: "/mulia.webp",
    beds: 1,
    baths: 1,
    sqft: "100",
    type: "Spa Resort",
  }
]
