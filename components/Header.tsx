"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMega, setActiveMega] = useState<number | null>(null);
    const closeTimer = useRef<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveMega(null);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const openMega = (idx: number) => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setActiveMega(idx);
    };

    const scheduleCloseMega = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => {
            setActiveMega(null);
        }, 120);
    };

    const cancelClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const currentMega = activeMega !== null ? NAV[activeMega] : null;

    return (
        <>
            {/* Top utility bar */}
            <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-dark text-white/90 text-xs py-1.5">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                        <span className="text-gold">✦</span>
                        Licensed · Insured · RAMP Certified · Bensalem, PA
                    </span>
                    <a
                        href="https://instagram.com/thebloomingtini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-light transition-colors"
                    >
                        @thebloomingtini
                    </a>
                </div>
            </div>

            {/* Gradient scrim behind nav when over hero */}
            {!isScrolled && !isOpen && (
                <div
                    aria-hidden="true"
                    className="hidden md:block pointer-events-none fixed left-0 right-0 top-0 h-36 z-40"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(20,20,20,0.75) 0%, rgba(20,20,20,0.45) 55%, rgba(20,20,20,0) 100%)",
                    }}
                />
            )}
            {!isScrolled && !isOpen && (
                <div
                    aria-hidden="true"
                    className="md:hidden pointer-events-none fixed left-0 right-0 top-0 h-32 z-40"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(20,20,20,0.70) 0%, rgba(20,20,20,0.40) 60%, rgba(20,20,20,0) 100%)",
                    }}
                />
            )}

            <header
                onMouseLeave={scheduleCloseMega}
                className={`fixed left-0 right-0 z-50 transition-all duration-500 md:top-[28px] top-0 ${isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-sm py-2.5 md:top-0"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group relative z-10 min-w-0" aria-label="The Blooming Tini — Home">
                            <div className={`relative transition-all duration-300 overflow-hidden rounded-full flex-shrink-0 ${isScrolled
                                ? "w-[46px] h-[46px] md:w-[56px] md:h-[56px]"
                                : "w-[54px] h-[54px] md:w-[72px] md:h-[72px] shadow-lg ring-1 ring-white/20"
                                }`}>
                                <Image
                                    src="/logo-circular.png"
                                    alt="The Blooming Tini"
                                    fill
                                    priority
                                    sizes="80px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="leading-tight min-w-0">
                                <span
                                    className={`block font-heading font-semibold tracking-tight transition-all truncate ${(isScrolled || isOpen)
                                        ? "text-sm md:text-lg text-dark"
                                        : "text-base md:text-xl text-white"
                                        }`}
                                >
                                    The Blooming Tini
                                </span>
                                <span
                                    className={`block text-[8px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] mt-0.5 transition-colors truncate ${(isScrolled || isOpen) ? "text-pink" : "text-pink-light"
                                        }`}
                                >
                                    Mobile Bar Co.
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 h-full" onMouseEnter={cancelClose}>
                            {NAV.map((item, idx) => {
                                if (item.kind === "link") {
                                    const active = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onMouseEnter={() => setActiveMega(null)}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-pink ${(isScrolled || isOpen) ? "text-dark" : "text-white"
                                                }`}
                                        >
                                            {item.label}
                                            {active && (
                                                <motion.span
                                                    layoutId="navUnderline"
                                                    className="absolute -bottom-0.5 left-4 right-4 h-px bg-pink"
                                                />
                                            )}
                                        </Link>
                                    );
                                }

                                const isActive = activeMega === idx;
                                const isCurrent = pathname.startsWith(item.href);
                                return (
                                    <div
                                        key={item.label}
                                        onMouseEnter={() => openMega(idx)}
                                        className="relative"
                                    >
                                        <Link
                                            href={item.href}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-pink flex items-center gap-1 ${(isScrolled || isOpen) ? "text-dark" : "text-white"
                                                } ${isActive ? "text-pink" : ""}`}
                                            aria-expanded={isActive}
                                        >
                                            {item.label}
                                            <motion.svg
                                                animate={{ rotate: isActive ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="w-3 h-3 opacity-60"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </motion.svg>
                                            {isCurrent && (
                                                <motion.span
                                                    layoutId="navUnderline"
                                                    className="absolute -bottom-0.5 left-4 right-4 h-px bg-pink"
                                                />
                                            )}
                                        </Link>
                                    </div>
                                );
                            })}
                            <Link href="/contact" className="btn btn-primary text-sm py-2.5 px-5 ml-3">
                                Plan Your Event
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <div className="flex flex-col gap-1.5">
                                <span
                                    className={`block w-5 h-0.5 transition-all duration-300 ${isOpen
                                        ? "rotate-45 translate-y-2 bg-dark"
                                        : isScrolled
                                            ? "bg-dark"
                                            : "bg-white"
                                        }`}
                                />
                                <span
                                    className={`block w-5 h-0.5 transition-all duration-300 ${isOpen
                                        ? "opacity-0"
                                        : isScrolled
                                            ? "bg-dark"
                                            : "bg-white"
                                        }`}
                                />
                                <span
                                    className={`block w-5 h-0.5 transition-all duration-300 ${isOpen
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

                {/* Desktop mega menu panel */}
                {currentMega && currentMega.kind === "mega" && (
                    <div
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleCloseMega}
                    >
                        <MegaMenu item={currentMega} onClose={() => setActiveMega(null)} />
                    </div>
                )}
            </header>

            {/* Mobile menu */}
            <MobileMenu
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                items={NAV}
                currentPath={pathname}
            />
        </>
    );
}
