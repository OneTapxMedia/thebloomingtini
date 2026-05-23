"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { value: 120, suffix: "+", label: "Events Poured", sub: "Weddings, galas & private parties" },
    { value: 5, suffix: "★", label: "Average Rating", sub: "Across every review platform" },
    { value: 48, suffix: "+", label: "Signature Cocktails", sub: "Crafted from real flowers & fresh fruit" },
    { value: 100, suffix: "%", label: "Licensed & Insured", sub: "RAMP certified — PA & NJ" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) =>
        Math.round(latest).toString()
    );

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, {
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
            });
            return controls.stop;
        }
    }, [inView, to, count]);

    return (
        <span ref={ref} className="inline-flex items-baseline">
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="relative py-20 md:py-28 bg-forest text-white overflow-hidden">
            {/* Botanical SVG accent */}
            <svg
                className="absolute -top-10 -left-10 w-72 h-72 text-pink-light/10"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                aria-hidden="true"
            >
                <path d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z" />
                <path d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z" />
                <circle cx="50" cy="50" r="2" fill="currentColor" stroke="none" />
            </svg>
            <svg
                className="absolute -bottom-10 -right-10 w-72 h-72 text-gold/10 rotate-45"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                aria-hidden="true"
            >
                <path d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z" />
                <path d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z" />
            </svg>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <span className="eyebrow text-pink-light">By the Numbers</span>
                    <h2 className="text-white mt-2">
                        A celebration record that <span className="text-gold">speaks</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="text-5xl md:text-6xl font-heading font-semibold text-gold mb-2 leading-none">
                                <Counter to={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-white font-medium mb-1">{stat.label}</p>
                            <p className="text-white/60 text-sm leading-relaxed">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
