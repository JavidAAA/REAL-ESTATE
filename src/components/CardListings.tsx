import React from 'react'
import { ListingProperty } from '@/constants';
import { MapPin, Bed, Square, Bath } from 'lucide-react';
import Link from 'next/link';

type CardListingsProps = {
    property: ListingProperty;
}

const CardListings = ({ property }: CardListingsProps) => {
    return (
        <div className='group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm'>
            <div className='relative overflow-hidden'>
                <img src={property.image} alt={property.title} className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300' />
                <div className='absolute top-4 left-4'>
                    <div className="bg-primary text-black px-3 py-1 rounded-[5px] font-semibold text-sm">
                        {property.type}
                    </div>
                </div>
            </div>

            <div className='p-6'>
                <div className='flex items-center text-muted-foreground mb-2'>
                    <MapPin className='w-4 h-4 mr-1' />
                    <span className='text-sm'>{property.location}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{property.title}</h3>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">$ {property.price}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>

                <Link href={`/property/${property.id}`}
                    >
                        <div className="h-[36px] bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-lg text-center text-sm font-semibold">

                        Read More
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default CardListings
