import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/Card'
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"
import { listingsProperties } from '@/constants'


const ListingsMain = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Featured Properties</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our handpicked selection of the most exclusive properties available today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listingsProperties.map((property) => (
                        <div
                            key={property.id}
                            className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    {/* <Badge className="bg-primary text-primary-foreground">{property.type}</Badge> */}
                                </div>
                                {/* <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground"
                                >
                                    <Heart className="w-5 h-5" />
                                </Button> */}
                            </div>

                            <CardContent className="p-6">
                                <div className="flex items-center text-muted-foreground mb-2">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{property.location}</span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2">{property.title}</h3>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-primary">{property.price}</span>
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

                                <Link href={`/property/${property.id}`}>
                                    {/* <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                        View Details
                                    </Button> */}
                                </Link>
                            </CardContent>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/listings">
                        {/* <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 bg-transparent"
                        >
                            View All Properties
                        </Button> */}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ListingsMain