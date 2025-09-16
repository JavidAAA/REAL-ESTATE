import React from 'react'
import { Facebook, Twitter, Instagram, LinkedinIcon, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-border px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-xl text-foreground">Global Property Innovation</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Your premier destination for luxury real estate. We specialize in connecting discerning clients with
              exceptional properties in the most exclusive locations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick as */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Quick as</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-muted-foreground">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                <p className='text-[15px]'>
                  Jl. Bypass Ngurah Rai No.21, Sanur, Denpasar Selatan, Bali
                </p>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 lg:w-4 lg:h-4 mr-3 text-primary" />
                <p className='text-[15px]'>
                  +62 817-359-851
                </p>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <p className='text-[15px]'>
                  admin@globalpropertyinnovation.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Global Property Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer