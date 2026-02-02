"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    children?: ReactNode;
    backgroundImage?: string;
    overlay?: boolean;
    height?: "full" | "large" | "medium";
    align?: "left" | "center";
}

export default function Hero({
    title,
    subtitle,
    description,
    children,
    backgroundImage,
    overlay = true,
    height = "large",
    align = "center",
}: HeroProps) {
    const heightClasses = {
        full: "min-h-screen",
        large: "min-h-[85vh]",
        medium: "min-h-[60vh]",
    };

    return (
        <section
            className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
        >
            {/* Background */}
            {backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-pink via-pink-dark to-dark" />
            )}

            {/* Overlay */}
            {overlay && (
                <div className="absolute inset-0 bg-dark/40" />
            )}

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-pink/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className={`container mx-auto px-6 relative z-10 ${align === "center" ? "text-center" : "text-left"}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {subtitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block text-pink font-accent text-3xl md:text-4xl mb-4"
                        >
                            {subtitle}
                        </motion.span>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : "justify-start"}`}
                        >
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {height === "full" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
