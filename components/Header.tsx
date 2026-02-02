"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl">🌸</span>
                        <div>
                            <span
                                className={`text-xl font-heading font-semibold transition-colors ${isScrolled ? "text-dark" : "text-white"
                                    }`}
                            >
                                The Blooming Tini
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-pink ${isScrolled ? "text-dark" : "text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="btn btn-primary text-sm">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ${isOpen
                                        ? "rotate-45 translate-y-2 bg-dark"
                                        : isScrolled
                                            ? "bg-dark"
                                            : "bg-white"
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ${isOpen
                                        ? "opacity-0"
                                        : isScrolled
                                            ? "bg-dark"
                                            : "bg-white"
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ${isOpen
                                        ? "-rotate-45 -translate-y-2 bg-dark"
                                        : isScrolled
                                            ? "bg-dark"
                                            : "bg-white"
                                    }`}
                            />
                        </div>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-0 top-0 bg-cream z-40 pt-24"
                    >
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="block text-2xl font-heading text-dark py-2 hover:text-pink transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    className="pt-4"
                                >
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary w-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Get a Quote
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
