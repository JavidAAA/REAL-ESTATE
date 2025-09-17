import { notFound } from "next/navigation"
import { listingsProperties } from "@/constants"
import ImageSlider from "@/components/ImageSlider"
import { Navbar } from "@/sections/Navbar"
import Footer from "@/sections/Footer"
import { PropertyDetails } from "@/sections/Property/PropertyDetails"
import PropertyFeatures from "@/sections/Property/PropertyFeatures"

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

  const slides = [
    "/mulia.webp",
    "/mulia2.webp",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  ]

  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <ImageSlider autoSlide={true} autoSlideInterval={4000}>
          {property.carousel?.map((image, i) => (
            <div key={i}>
              <img
                src={image}
                alt={`slide-${i}`}
                className="w-full h-[500px] object-cover"
              />
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
              {/* <ContactAgent property={property} /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
