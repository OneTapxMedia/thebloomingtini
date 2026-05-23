"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";

const featured = [
    {
        name: "The Garden Bloom",
        notes: "Gin · elderflower · cucumber · edible blossom",
        img: IMG.cocktailGarden,
        accent: "sage",
    },
    {
        name: "Rose Petal Martini",
        notes: "Vodka · rose · lychee · prosecco float",
        img: IMG.cocktailRose,
        accent: "pink",
    },
    {
        name: "Champagne Bloom",
        notes: "Bubbly · St-Germain · lavender · grapefruit twist",
        img: IMG.cocktailCitrus,
        accent: "gold",
    },
];

export default function CocktailPreview() {
    return (
        <section className="section bg-ivory">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-[1.1fr_2fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <span className="eyebrow">Signature Pours</span>
                        <h2 className="mt-2 mb-6">
                            Cocktails that <span className="gradient-text">photograph</span> as well as they taste
                        </h2>
                        <p className="text-muted leading-relaxed mb-6">
                            Every event gets a custom menu built around your story, palette, and palate. Here&apos;s a glimpse of the bloom-forward classics our hosts request again and again.
                        </p>
                        <Link
                            href="/cocktails"
                            className="inline-flex items-center gap-2 text-pink font-medium group"
                        >
                            See the full menu
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3 md:gap-5">
                        {featured.map((c, i) => (
                            <motion.div
                                key={c.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`relative group ${i === 1 ? "mt-8 md:mt-12" : ""}`}
                            >
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-dark shadow-lg">
                                    <Image
                                        src={c.img}
                                        alt={c.name}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                        <p className="font-heading text-sm md:text-base leading-tight mb-1">
                                            {c.name}
                                        </p>
                                        <p className="text-[10px] md:text-xs text-white/75 hidden md:block">
                                            {c.notes}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
