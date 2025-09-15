"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Listings", href: "/listings" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [hasScroll, setHasScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 32)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
                hasScroll && "bg-black backdrop-blur-lg border-b border-gray-800",
                isOpen && "bg-black"
            )}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-9 xl:px-0 py-5 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo2.png" alt="logo" width={120} height={120} />
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "text-md font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="md:hidden border border-white p-1 rounded-lg z-50"
                >
                    {isOpen ? (
                        <X className="w-7 h-7 text-gold-500" />
                    ) : (
                        <Menu className="w-7 h-7 text-gold-500" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={clsx(
                "md:hidden transition-all duration-600 overflow-hidden",
                isOpen ? "h-screen" : "h-0"
            )}>
                <div className="flex flex-col items-start translate-x-16 justify-center h-full space-y-4 bg-black transform -translate-y-24 gap-3">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={clsx(
                                "text-4xl uppercase font-bold transition-colors hover:text-gold-500",
                                pathname === item.href ? "text-gold-500" : "text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>


        </nav>
    )
}
