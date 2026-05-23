"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import { IMG } from "@/lib/images";

type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    category: "Weddings" | "Corporate" | "Parties" | "Cocktails" | "Details";
};

const galleryImages: GalleryImage[] = [
    { id: 1, src: IMG.weddingBar, alt: "Garden wedding bar setup at golden hour", category: "Weddings" },
    { id: 2, src: IMG.corporateEvent, alt: "Corporate launch reception", category: "Corporate" },
    { id: 3, src: IMG.cocktailGarden, alt: "Garden Bloom signature cocktail", category: "Cocktails" },
    { id: 4, src: IMG.partyGuests, alt: "Guests toasting at a private celebration", category: "Parties" },
    { id: 5, src: IMG.weddingTable, alt: "Elegant bar table styling", category: "Weddings" },
    { id: 6, src: IMG.cocktailRose, alt: "Rose Petal Martini", category: "Cocktails" },
    { id: 7, src: IMG.outdoorBar, alt: "Outdoor bar under string lights", category: "Parties" },
    { id: 8, src: IMG.garnishDetail, alt: "Garnish detail — edible blossoms", category: "Details" },
    { id: 9, src: IMG.bartenderAction, alt: "Bartender pouring with precision", category: "Details" },
    { id: 10, src: IMG.glassware, alt: "Crystal glassware service", category: "Details" },
    { id: 11, src: IMG.cocktailCitrus, alt: "Champagne Bloom", category: "Cocktails" },
    { id: 12, src: IMG.cocktailSmoke, alt: "Smoked old fashioned", category: "Cocktails" },
];

const categories: Array<GalleryImage["category"] | "All"> = [
    "All",
    "Weddings",
    "Corporate",
    "Parties",
    "Cocktails",
    "Details",
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    const filteredImages =
        selectedCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const close = useCallback(() => setSelectedIdx(null), []);
    const next = useCallback(() => {
        setSelectedIdx((i) =>
            i === null ? null : (i + 1) % filteredImages.length
        );
    }, [filteredImages.length]);
    const prev = useCallback(() => {
        setSelectedIdx((i) =>
            i === null ? null : (i - 1 + filteredImages.length) % filteredImages.length
        );
    }, [filteredImages.length]);

    useEffect(() => {
        if (selectedIdx === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedIdx, close, next, prev]);

    const current = selectedIdx !== null ? filteredImages[selectedIdx] : null;

    return (
        <>
            <Hero
                title="Our gallery"
                subtitle="Portfolio"
                description="A glimpse into the celebrations we've been honored to be part of."
                backgroundImage={IMG.outdoorBar}
                height="medium"
            />

            {/* Filter */}
            <section className="py-8 bg-cream border-b border-pink/15 sticky top-0 z-30 backdrop-blur-md bg-cream/85">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? "bg-pink text-white shadow-md"
                                        : "bg-white text-dark hover:bg-pink/10"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, i) => (
                                <motion.button
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedIdx(i)}
                                    className="cursor-pointer group mb-5 break-inside-avoid w-full text-left relative block overflow-hidden rounded-2xl"
                                    aria-label={`Open ${image.alt}`}
                                >
                                    <div className={`relative ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"} overflow-hidden`}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-xs uppercase tracking-wider text-pink-light mb-0.5">{image.category}</p>
                                            <p className="text-sm font-medium">{image.alt}</p>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {current && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[85vh] aspect-video"
                        >
                            <Image
                                src={current.src}
                                alt={current.alt}
                                fill
                                sizes="100vw"
                                className="object-contain"
                                priority
                            />
                            <div className="absolute -bottom-12 inset-x-0 text-center text-white/80 text-sm">
                                {current.alt} <span className="text-pink-light ml-2">· {current.category}</span>
                            </div>
                        </motion.div>

                        {/* Prev */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={close}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
