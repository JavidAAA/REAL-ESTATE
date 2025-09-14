"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import Image from "next/image"
import { useState, useEffect } from "react"


const navigation = [
    { name: "Home", href: "/" },
    { name: "Listings", href: "/listings" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [hasScroll, setHasScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 32)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <nav className={clsx("fixed top-0 left-0 right-0 z-50 transition-all duration-100", hasScroll && 'bg-black backdrop-blur-lg border border-b')}>
            <div className="max-w-7xl mx-auto px-5 md:px-9 xl:px-0 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src='/logo2.png' alt="logo" width={120} height={120} />
                        {/* <span className="font-bold text-xl text-foreground">Global Property Innovation</span> */}
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    "text-md font-medium transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
