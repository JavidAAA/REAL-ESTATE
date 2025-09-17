"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

interface CarouselProps {
    children: React.ReactNode
    autoSlide?: boolean
    autoSlideInterval?: number
}

export default function Carousel({
    children,
    autoSlide = false,
    autoSlideInterval = 3000,
}: CarouselProps) {
    const slides = React.Children.toArray(children) // pastikan array
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval])

    return (
        <div className="overflow-hidden relative w-full">
            {/* Wrapper */}
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                        {slide}
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronRight size={40} />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-white p-2" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
