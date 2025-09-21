import { MapPin, Bed, Bath, Square, Calendar } from "lucide-react"
import { ListingProperty } from "@/constants";


interface PropertyDetailsProps {
  property: ListingProperty
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
          <div className="bg-primary text-black px-3 py-1 rounded-[5px] font-semibold text-sm">{property.type}</div>
          <div className="flex items-center text-muted-foreground justify-center md:justify-start">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center md:text-start">{property.title}</h1>
        <p className="text-3xl font-bold text-primary text-center md:text-start">$ {property.price}</p>
      </div>

      {/* Property Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-black rounded-lg border border-border">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
            <Bed className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{property.beds}</div>
          <div className="text-sm text-muted-foreground">Bedrooms</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
            <Bath className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{property.rest}</div>
          <div className="text-sm text-muted-foreground">Restaurant</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
            <Square className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{property.sqft}</div>
          <div className="text-sm text-muted-foreground">Lot Size</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{property.yearBuilt}</div>
          <div className="text-sm text-muted-foreground">Year Built</div>
        </div>
      </div>

      {/* Description */}
      <div className="text-center md:text-start my-5 md:my-0">
        <h2 className="text-2xl font-bold text-foreground mb-4">Property Description</h2>
        <p className="text-muted-foreground leading-relaxed text-lg ">{property.description}</p>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border md:border-none border-gray-50 p-3 rounded-lg">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Property Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Year Built:</span>
              <span className="text-foreground">{property.yearBuilt}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Type:</span>
              <span className="text-foreground">{property.type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
