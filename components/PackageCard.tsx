"use client";

import { motion } from "framer-motion";

interface PackageCardProps {
    name: string;
    price: string;
    priceNote?: string;
    description: string;
    features: string[];
    popular?: boolean;
    index?: number;
}

export default function PackageCard({
    name,
    price,
    priceNote,
    description,
    features,
    popular = false,
    index = 0,
}: PackageCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative rounded-3xl p-8 ${popular
                    ? "bg-pink text-white shadow-2xl scale-105 z-10"
                    : "bg-white text-dark shadow-lg"
                }`}
        >
            {/* Popular Badge */}
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-gold text-dark text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                        Most Popular
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-8">
                <h3 className={`text-2xl font-heading font-semibold mb-2 ${popular ? "text-white" : "text-dark"}`}>
                    {name}
                </h3>
                <div className="mb-3">
                    <span className={`text-4xl font-heading font-bold ${popular ? "text-gold" : "text-pink"}`}>
                        {price}
                    </span>
                    {priceNote && (
                        <span className={`text-sm ml-1 ${popular ? "text-white/70" : "text-muted"}`}>
                            {priceNote}
                        </span>
                    )}
                </div>
                <p className={`text-sm ${popular ? "text-white/80" : "text-muted"}`}>
                    {description}
                </p>
            </div>

            {/* Divider */}
            <div className={`h-px w-full mb-8 ${popular ? "bg-white/20" : "bg-gray-200"}`} />

            {/* Features */}
            <ul className="space-y-4 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${popular ? "text-gold" : "text-pink"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className={`text-sm ${popular ? "text-white/90" : "text-dark/80"}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <a
                href="/contact"
                className={`block w-full py-4 rounded-full text-center font-medium transition-all duration-300 ${popular
                        ? "bg-gold text-dark hover:bg-gold-light hover:shadow-lg"
                        : "bg-pink text-white hover:bg-pink-light hover:shadow-lg"
                    }`}
            >
                Get Started
            </a>
        </motion.div>
    );
}
