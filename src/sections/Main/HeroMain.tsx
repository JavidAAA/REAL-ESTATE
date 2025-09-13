
import SearchBox from "@/components/SearchBox"
import { Search, MapPin, Home, DollarSign } from "lucide-react"


export function HeroMain() {
  return (
    <section className="relative min-h-[700px] md:min-h-screen flex items-center justify-center overflow-hidden px-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/bg-hero.jpg" alt="Luxury Property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80"/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your
          <span className="block text-primary">Dream Property</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience luxury living with our curated collection of premium properties in the most exclusive locations.
        </p>

        {/* Search Bar */}
        <SearchBox/>
      </div>
    </section>
  )
}
