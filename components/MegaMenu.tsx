"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/lib/nav";

interface MegaMenuProps {
    item: Extract<NavItem, { kind: "mega" }>;
    onClose: () => void;
}

export default function MegaMenu({ item, onClose }: MegaMenuProps) {
    return (
        <AnimatePresence>
            <motion.div
                key="mega-panel"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 right-0 top-full pt-4"
                onMouseLeave={onClose}
            >
                <div className="container mx-auto px-6">
                    <div className="bg-cream/95 backdrop-blur-xl border border-pink/15 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Decorative botanical accent */}
                        <svg
                            className="absolute -top-12 -right-12 w-48 h-48 text-pink/10 pointer-events-none"
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            aria-hidden="true"
                        >
                            <path d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z" />
                            <path d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z" />
                        </svg>

                        <div className="grid lg:grid-cols-[2fr_1.1fr] gap-0">
                            {/* Link sections */}
                            <div className="p-8 lg:p-10">
                                {/* Overview link */}
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="group inline-flex items-center gap-2 mb-6 text-pink font-medium text-sm hover:gap-3 transition-all"
                                >
                                    <span>View all {item.label.toLowerCase()}</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>

                                <div className="grid grid-cols-2 gap-8">
                                    {item.sections.map((section) => (
                                        <div key={section.title}>
                                            <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-pink mb-4">
                                                {section.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {section.links.map((link) => (
                                                    <li key={link.href + link.label}>
                                                        <Link
                                                            href={link.href}
                                                            onClick={onClose}
                                                            className="group block py-1.5"
                                                        >
                                                            <span className="block font-heading text-lg text-dark group-hover:text-pink transition-colors leading-snug">
                                                                {link.label}
                                                            </span>
                                                            {link.description && (
                                                                <span className="block text-sm text-muted leading-snug mt-0.5">
                                                                    {link.description}
                                                                </span>
                                                            )}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Featured panel */}
                            <Link
                                href={item.feature.href}
                                onClick={onClose}
                                className="group relative block bg-dark text-white overflow-hidden min-h-[320px]"
                            >
                                <Image
                                    src={item.feature.image}
                                    alt={item.feature.title}
                                    fill
                                    sizes="(min-width: 1024px) 40vw, 100vw"
                                    className="object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/40 to-transparent" />
                                <div className="relative p-8 lg:p-10 flex flex-col h-full justify-end min-h-[320px]">
                                    <span className="text-pink-light font-accent text-2xl mb-1 block">
                                        {item.feature.eyebrow}
                                    </span>
                                    <h3 className="font-heading text-3xl text-white mb-3 leading-tight">
                                        {item.feature.title}
                                    </h3>
                                    <p className="text-white/85 text-sm leading-relaxed mb-5 max-w-sm">
                                        {item.feature.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-pink-light text-sm font-medium">
                                        {item.feature.cta}
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
