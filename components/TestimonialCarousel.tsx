"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMG } from "@/lib/images";

export type Testimonial = {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
    event?: string;
};

const defaultTestimonials: Testimonial[] = [
    {
        quote:
            "The Blooming Tini didn't just bartend our wedding — they turned the bar into the most photographed corner of the night. Every guest asked for the signature cocktail recipe.",
        author: "Sarah & Michael",
        role: "Wedding · October 2024",
        avatar: IMG.avatar1,
        event: "Wedding",
    },
    {
        quote:
            "Punctual, polished, and unbelievably kind. They handled a 200-person corporate launch with the calm of a 5-star hotel. We've already re-booked them for our holiday party.",
        author: "Jennifer R.",
        role: "VP Marketing · December 2024",
        avatar: IMG.avatar2,
        event: "Corporate",
    },
    {
        quote:
            "I told them my theme was 'garden party meets old Hollywood' — they brought edible flowers, custom menus, and a champagne tower. My 40th felt like a magazine spread.",
        author: "Lauren M.",
        role: "Milestone Birthday · September 2024",
        avatar: IMG.avatar3,
        event: "Birthday",
    },
    {
        quote:
            "From the first call to the final glass collected, every detail was handled. Our bridal shower felt like we had stepped into a fairytale florist's dream.",
        author: "Ava & Family",
        role: "Bridal Shower · August 2024",
        avatar: IMG.avatar4,
        event: "Shower",
    },
];

export default function TestimonialCarousel({
    testimonials = defaultTestimonials,
}: { testimonials?: Testimonial[] }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => {
            setIndex((i) => (i + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(t);
    }, [paused, testimonials.length]);

    const current = testimonials[index];

    return (
        <section
            className="relative py-20 md:py-28 bg-dark text-white overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Decorative blobs */}
            <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-pink/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="eyebrow text-pink-light">Love Letters</span>
                    <h2 className="text-white mt-2">
                        What our clients <span className="text-gold">say</span>
                    </h2>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Big floating quote glyph */}
                    <svg
                        className="absolute -top-8 -left-4 md:-left-12 w-20 h-20 text-pink/20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <div className="relative min-h-[280px] md:min-h-[260px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full text-center"
                            >
                                <p className="font-heading text-2xl md:text-3xl leading-snug text-white mb-8">
                                    “{current.quote}”
                                </p>

                                <div className="flex items-center justify-center gap-4">
                                    {current.avatar && (
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-pink/40">
                                            <Image
                                                src={current.avatar}
                                                alt={current.author}
                                                fill
                                                sizes="56px"
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="text-left">
                                        <p className="font-semibold text-white">{current.author}</p>
                                        {current.role && (
                                            <p className="text-sm text-pink-light">{current.role}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                aria-label={`Show testimonial ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-pink" : "w-6 bg-white/20 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mt-6">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-4 h-4 text-gold"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
