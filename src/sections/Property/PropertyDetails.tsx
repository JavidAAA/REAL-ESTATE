import { MapPin, Bed, Bath, Square, Calendar } from "lucide-react"

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
}

interface PropertyDetailsProps {
  property: Property
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-primary text-primary-foreground">{property.type}</div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{property.title}</h1>
        <p className="text-3xl font-bold text-primary">{property.price}</p>
      </div>

      {/* Property Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-card rounded-lg border border-border">
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
          <div className="text-2xl font-bold text-foreground">{property.baths}</div>
          <div className="text-sm text-muted-foreground">Bathrooms</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
            <Square className="w-6 h-6 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{property.sqft}</div>
          <div className="text-sm text-muted-foreground">Sq Ft</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
            <Calendar className="w-6 h-6 text-primary" />
          </div>

          <div className="text-sm text-muted-foreground">Year Built</div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Property Description</h2>
        {/* <p className="text-muted-foreground leading-relaxed text-lg">{property.description}</p> */}
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Property Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Type:</span>
              <span className="text-foreground">{property.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Year Built:</span>
              {/* <span className="text-foreground">{property.yearBuilt}</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lot Size:</span>
              {/* <span className="text-foreground">{property.lotSize}</span> */}
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Square Footage:</span>
              <span className="text-foreground">{property.sqft} sq ft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
