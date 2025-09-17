import { Bath, Bed, Calendar, Check, Square } from 'lucide-react'
import React from 'react'

interface PropertyFeaturesProps {
  features: string[]
  amenities: string[]
}


export default function PropertyFeatures({ features, amenities }: PropertyFeaturesProps) {
  return (
    <div>
      <div className="space-y-8 mt-12">
        {/* Features */}
        <div className="bg-black border-border text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="text-foreground leading-none font-semibold">Property Features</div>
          </div>
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-black border-borde text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
          <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
            <div className="text-foreground leading-none font-semibold">Amenities</div>
          </div>
          <div className="px-6">
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-transparent bg-secondar [a&]:hover:bg-secondary/90 p-1 rounded-lg text-xs"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

