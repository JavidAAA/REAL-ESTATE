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
  yearBuilt: number;
  lotSize: string;
  description: string;
  carousel?: string[];
};

export const listingsProperties = [
  {
    id: 1,
    title: "The Mulia Bali",
    location: "Nusa Dua, Bali",
    price: "941,000,000",
    image: "/mulia.webp",
    beds: 526,
    baths: 1,
    sqft: "59",
    type: "Resort",
    yearBuilt: 2012,
    lotSize: "N/A",
    description:
      "Experience the ultimate in Manhattan luxury living with this extraordinary penthouse suite. Perched high above the city, this residence offers breathtaking panoramic views of the iconic skyline. Every detail has been meticulously crafted to create a sanctuary of sophistication in the heart of the city.",
    features: [
      "Beachfront location with direct access to Geger Beach",
      "Multiple outdoor swimming pools with cabanas",
      "Luxury spa with hydrotherapy pools, sauna, and ice room",
      "Fine dining restaurants and signature bars",
      "Kids club and family-friendly activities",
      "State-of-the-art fitness center and yoga classes",
      "Tennis courts and water sports options",
      "Exclusive butler service for select suites",
      "Private villas with personal pools",
      "Grand ballroom and meeting facilities",
      "24-hour concierge and room service",
      "Airport transfer and valet parking services",

    ],
    amenities: ["Concierge", "Valet", "Terrace", "City View", "Security", "Gym"],
    carousel: [
      "/mulia.webp",
      "/mulia2.webp",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
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
    yearBuilt: 2018,
    lotSize: "N/A",
    description:
      "Experience the ultimate in Manhattan luxury living with this extraordinary penthouse suite. Perched high above the city, this residence offers breathtaking panoramic views of the iconic skyline. Every detail has been meticulously crafted to create a sanctuary of sophistication in the heart of the city.",
    features: [
      "Floor-to-ceiling windows with city views",
      "Private elevator access",
      "Rooftop terrace with outdoor kitchen",
      "Marble bathrooms with heated floors",
      "Custom millwork throughout",
      "Concierge services",
      "Valet parking",
      "Building amenities access",
    ],
    amenities: ["Concierge", "Valet", "Terrace", "City View", "Security", "Gym"],
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
    yearBuilt: 2018,
    lotSize: "N/A",
    description:
      "Experience the ultimate in Manhattan luxury living with this extraordinary penthouse suite. Perched high above the city, this residence offers breathtaking panoramic views of the iconic skyline. Every detail has been meticulously crafted to create a sanctuary of sophistication in the heart of the city.",
    features: [
      "Floor-to-ceiling windows with city views",
      "Private elevator access",
      "Rooftop terrace with outdoor kitchen",
      "Marble bathrooms with heated floors",
      "Custom millwork throughout",
      "Concierge services",
      "Valet parking",
      "Building amenities access",
    ],
    amenities: ["Concierge", "Valet", "Terrace", "City View", "Security", "Gym"],
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
    yearBuilt: 2018,
    lotSize: "N/A",
    description:
      "Experience the ultimate in Manhattan luxury living with this extraordinary penthouse suite. Perched high above the city, this residence offers breathtaking panoramic views of the iconic skyline. Every detail has been meticulously crafted to create a sanctuary of sophistication in the heart of the city.",
    features: [
      "Floor-to-ceiling windows with city views",
      "Private elevator access",
      "Rooftop terrace with outdoor kitchen",
      "Marble bathrooms with heated floors",
      "Custom millwork throughout",
      "Concierge services",
      "Valet parking",
      "Building amenities access",
    ],
    amenities: ["Concierge", "Valet", "Terrace", "City View", "Security", "Gym"],
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
    yearBuilt: 2018,
    lotSize: "N/A",
    description:
      "Experience the ultimate in Manhattan luxury living with this extraordinary penthouse suite. Perched high above the city, this residence offers breathtaking panoramic views of the iconic skyline. Every detail has been meticulously crafted to create a sanctuary of sophistication in the heart of the city.",
    features: [
      "Floor-to-ceiling windows with city views",
      "Private elevator access",
      "Rooftop terrace with outdoor kitchen",
      "Marble bathrooms with heated floors",
      "Custom millwork throughout",
      "Concierge services",
      "Valet parking",
      "Building amenities access",
    ],
    amenities: ["Concierge", "Valet", "Terrace", "City View", "Security", "Gym"],
  }
]
