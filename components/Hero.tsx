"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import Image from "next/image";

interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    children?: ReactNode;
    backgroundImage?: string;
    overlay?: boolean;
    height?: "full" | "large" | "medium";
    align?: "left" | "center";
    kenBurns?: boolean;
    showScrollIndicator?: boolean;
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
    kenBurns = true,
    showScrollIndicator,
}: HeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, 120]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

    const heightClasses = {
        full: "min-h-screen",
        large: "min-h-[85vh]",
        medium: "min-h-[60vh]",
    };

    const showIndicator =
        showScrollIndicator !== undefined ? showScrollIndicator : height === "full";

    return (
        <section
            ref={ref}
            className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden isolate`}
        >
            {/* Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 -z-20"
            >
                {backgroundImage ? (
                    <div className={`relative w-full h-full ${kenBurns ? "animate-ken-burns" : ""}`}>
                        <Image
                            src={backgroundImage}
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-pink via-pink-dark to-dark" />
                )}
            </motion.div>

            {/* Overlay gradient — luxury filmic blend */}
            {overlay && (
                <>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark/70 via-dark/55 to-dark/85" />
                    {/* Subtle radial vignette to focus text */}
                    <div
                        className="absolute inset-0 -z-10 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.55) 100%)",
                        }}
                    />
                </>
            )}

            {/* Botanical decorative blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-pink/20 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-gold/15 blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.25, 0.4],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Subtle botanical SVG sprinkle */}
            <svg
                className="absolute top-1/4 left-8 w-32 h-32 text-pink/30 -z-10 hidden md:block"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                aria-hidden="true"
            >
                <motion.path
                    d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.6 }}
                />
                <motion.path
                    d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.9 }}
                />
                <motion.circle cx="50" cy="50" r="2.5" fill="currentColor" stroke="none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8 }}
                />
            </svg>
            <svg
                className="absolute bottom-1/4 right-8 w-40 h-40 text-gold/30 -z-10 hidden md:block rotate-45"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                aria-hidden="true"
            >
                <motion.path
                    d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.2 }}
                />
                <motion.path
                    d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                />
            </svg>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className={`container mx-auto px-6 relative z-10 ${align === "center" ? "text-center" : "text-left"}`}
            >
                <div className="max-w-4xl mx-auto">
                    {subtitle && (
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="inline-block text-pink-light font-accent text-3xl md:text-5xl mb-4 drop-shadow-sm"
                            style={{ fontFamily: "var(--font-accent), 'Corinthia', cursive" }}
                        >
                            {subtitle}
                        </motion.span>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold mb-6 leading-[1.05] tracking-tight"
                        style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
                    >
                        {title}
                    </motion.h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.55 }}
                            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    )}

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.75 }}
                            className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : "justify-start"}`}
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            {showIndicator && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-3 bg-white/60 rounded-full" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
