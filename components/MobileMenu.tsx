"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/lib/nav";
import { LINKS, IMG } from "@/lib/images";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    items: NavItem[];
    currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, items, currentPath }: MobileMenuProps) {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="lg:hidden fixed inset-0 z-40"
                >
                    {/* Background gradient + image */}
                    <div className="absolute inset-0 bg-cream" />
                    <Image
                        src={IMG.weddingBar}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/85 to-cream" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col pt-24 overflow-y-auto overscroll-contain"
                        style={{ paddingBottom: "calc(11rem + env(safe-area-inset-bottom))" }}
                    >
                        <div className="container mx-auto px-6 flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-8"
                            >
                                <span className="font-accent text-3xl text-pink block">Welcome</span>
                                <p className="text-muted text-sm mt-1">
                                    Where would you like to bloom?
                                </p>
                            </motion.div>

                            <nav className="space-y-2">
                                {items.map((item, i) => {
                                    if (item.kind === "link") {
                                        return (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, x: -16 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.15 + i * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={onClose}
                                                    className={`block py-3.5 border-b border-pink/10 font-heading text-2xl transition-colors ${currentPath === item.href ? "text-pink" : "text-dark hover:text-pink"
                                                        }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.div>
                                        );
                                    }

                                    const isExpanded = expandedIdx === i;
                                    return (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 + i * 0.05 }}
                                            className="border-b border-pink/10"
                                        >
                                            <button
                                                onClick={() => setExpandedIdx(isExpanded ? null : i)}
                                                className="w-full flex items-center justify-between py-3.5 text-left"
                                                aria-expanded={isExpanded}
                                            >
                                                <span className="font-heading text-2xl text-dark group-hover:text-pink transition-colors">
                                                    {item.label}
                                                </span>
                                                <motion.span
                                                    animate={{ rotate: isExpanded ? 45 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="w-7 h-7 rounded-full bg-pink/10 flex items-center justify-center text-pink"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </motion.span>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-4 pl-2 space-y-4">
                                                            {/* View-all overview link */}
                                                            <Link
                                                                href={item.href}
                                                                onClick={onClose}
                                                                className="inline-flex items-center gap-2 text-pink font-medium text-sm"
                                                            >
                                                                <span>View all {item.label.toLowerCase()}</span>
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                </svg>
                                                            </Link>
                                                            {/* Featured card at top */}
                                                            <Link
                                                                href={item.feature.href}
                                                                onClick={onClose}
                                                                className="block relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md group/feat"
                                                            >
                                                                <Image
                                                                    src={item.feature.image}
                                                                    alt={item.feature.title}
                                                                    fill
                                                                    sizes="100vw"
                                                                    className="object-cover group-hover/feat:scale-105 transition-transform duration-500"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 to-transparent" />
                                                                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                                                    <span className="text-pink-light font-accent text-xl block">
                                                                        {item.feature.eyebrow}
                                                                    </span>
                                                                    <p className="font-heading text-lg leading-tight">{item.feature.title}</p>
                                                                </div>
                                                            </Link>

                                                            {item.sections.map((section) => (
                                                                <div key={section.title}>
                                                                    <h5 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-pink mb-2">
                                                                        {section.title}
                                                                    </h5>
                                                                    <ul className="space-y-1">
                                                                        {section.links.map((link) => (
                                                                            <li key={link.href + link.label}>
                                                                                <Link
                                                                                    href={link.href}
                                                                                    onClick={onClose}
                                                                                    className="block py-2 text-dark hover:text-pink transition-colors"
                                                                                >
                                                                                    <span className="font-medium text-base">{link.label}</span>
                                                                                    {link.description && (
                                                                                        <span className="block text-xs text-muted leading-snug">
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
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Locked CTA bar — fixed to viewport bottom, doesn't scroll with content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="fixed bottom-0 left-0 right-0 z-50 px-6 pt-5 bg-gradient-to-t from-cream via-cream/95 to-cream/0 backdrop-blur-md"
                            style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
                        >
                            <div className="space-y-3">
                                <Link href="/contact" onClick={onClose} className="btn btn-primary w-full">
                                    Plan Your Event
                                </Link>
                                <a
                                    href={LINKS.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full text-xs py-2.5"
                                >
                                    Follow @thebloomingtini
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
