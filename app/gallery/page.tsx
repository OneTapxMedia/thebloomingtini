"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";

// Placeholder images - replace with real photos
const galleryImages = [
    { id: 1, src: "/placeholder-1.jpg", alt: "Wedding bar setup", category: "Weddings" },
    { id: 2, src: "/placeholder-2.jpg", alt: "Corporate event", category: "Corporate" },
    { id: 3, src: "/placeholder-3.jpg", alt: "Signature cocktails", category: "Cocktails" },
    { id: 4, src: "/placeholder-4.jpg", alt: "Birthday party", category: "Parties" },
    { id: 5, src: "/placeholder-5.jpg", alt: "Elegant setup", category: "Weddings" },
    { id: 6, src: "/placeholder-6.jpg", alt: "Craft cocktail", category: "Cocktails" },
    { id: 7, src: "/placeholder-7.jpg", alt: "Outdoor event", category: "Parties" },
    { id: 8, src: "/placeholder-8.jpg", alt: "Bar detail", category: "Details" },
    { id: 9, src: "/placeholder-9.jpg", alt: "Team in action", category: "Details" },
];

const categories = ["All", "Weddings", "Corporate", "Parties", "Cocktails", "Details"];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages =
        selectedCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    return (
        <>
            <Hero
                title="Our Gallery"
                subtitle="Portfolio"
                description="A glimpse into the celebrations we've been honored to be part of."
                height="medium"
            />

            {/* Filter */}
            <section className="py-8 bg-cream border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? "bg-pink text-white"
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
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedImage(image.id)}
                                    className="cursor-pointer group"
                                >
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-rose/20 to-gold/20 relative">
                                        {/* Placeholder - replace with real Image component */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <span className="text-4xl mb-2 block">📸</span>
                                                <p className="text-pink font-medium">{image.alt}</p>
                                                <p className="text-sm text-muted">{image.category}</p>
                                            </div>
                                        </div>
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-pink/0 group-hover:bg-pink/20 transition-colors flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-3xl">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Coming Soon Message */}
                    <div className="text-center mt-12 p-8 bg-white rounded-2xl">
                        <span className="text-4xl mb-4 block">🌸</span>
                        <h3 className="text-xl font-heading mb-2">Photos Coming Soon!</h3>
                        <p className="text-muted max-w-md mx-auto">
                            We&apos;re building our portfolio with every event. Follow us on Instagram to see our latest work!
                        </p>
                        <a
                            href="https://instagram.com/thebloomingini"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-pink font-medium hover:text-pink-light transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            @thebloomingini
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-4xl w-full aspect-video bg-gradient-to-br from-rose/30 to-gold/30 rounded-2xl flex items-center justify-center"
                        >
                            <div className="text-center text-white">
                                <span className="text-6xl mb-4 block">📸</span>
                                <p className="text-xl">Image Lightbox</p>
                                <p className="text-white/60 mt-2">Click anywhere to close</p>
                            </div>
                        </motion.div>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white text-3xl hover:text-pink transition-colors"
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
