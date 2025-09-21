import { notFound } from "next/navigation"
import { listingsProperties } from "@/constants"
import ImageSlider from "@/components/ImageSlider"
import { Navbar } from "@/sections/Navbar"
import Footer from "@/sections/Footer"
import { PropertyDetails } from "@/sections/Property/PropertyDetails"
import PropertyFeatures from "@/sections/Property/PropertyFeatures"
import ContactAgent from "@/sections/Property/ContactAgent"
import Image from "next/image"

interface PropertyPageProps {
  params: Promise<{ id: string }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params

  const property = listingsProperties.find(
    (prop) => prop.id.toString() === id
  )

  if (!property) {
    notFound()
  }

  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <ImageSlider autoSlide={true} autoSlideInterval={4000}>
          {property.carousel?.map((image, i) => (
            <div key={i} className="relative w-full h-[500px]">
              <Image
                src={image}
                alt={`slide-${i}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/40 " />
              
            </div>
          ))}
        </ImageSlider>

        <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <PropertyDetails property={property} />
              <PropertyFeatures features={property.features} amenities={property.amenities} />
            </div>
            <div className="lg:col-span-1">
              <ContactAgent property={property} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
