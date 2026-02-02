"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index?: number;
}

export default function ServiceCard({
    icon,
    title,
    description,
    index = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-rose/20 to-gold/20 rotate-45" />
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink to-pink-light flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-heading font-semibold text-dark mb-3 group-hover:text-pink transition-colors">
                {title}
            </h3>
            <p className="text-muted leading-relaxed">{description}</p>

            {/* Hover Indicator */}
            <div className="mt-6 flex items-center gap-2 text-pink font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">Learn more</span>
                <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </div>
        </motion.div>
    );
}
