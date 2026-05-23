"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyMobileCTA() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Track scroll position relative to viewport + footer
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportH = window.innerHeight;
            const docH = document.documentElement.scrollHeight;
            const distFromBottom = docH - (scrollY + viewportH);
            // Show after scrolling past first viewport, hide near footer
            setShow(scrollY > 480 && distFromBottom > 380);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // Watch body.style.overflow — set to 'hidden' when mobile menu opens
    useEffect(() => {
        const check = () => setMenuOpen(document.body.style.overflow === "hidden");
        check();
        const observer = new MutationObserver(check);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["style"],
        });
        return () => observer.disconnect();
    }, []);

    if (pathname === "/contact" || dismissed) return null;

    const visible = show && !menuOpen;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                    className="lg:hidden fixed bottom-4 left-4 right-4 z-40"
                >
                    <div className="bg-dark text-white rounded-2xl shadow-2xl flex items-center gap-3 p-3 pr-4">
                        <div className="relative w-10 h-10 rounded-xl bg-pink/20 flex items-center justify-center flex-shrink-0">
                            <span className="absolute inset-0 rounded-xl bg-pink/40 animate-pulse-ring" />
                            <span className="relative text-pink-light">✦</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-white/70 leading-tight">Booking 2026 dates now</p>
                            <p className="text-sm font-medium leading-tight">Reserve your date</p>
                        </div>
                        <Link
                            href="/contact"
                            className="btn btn-primary text-xs py-2.5 px-4 flex-shrink-0"
                        >
                            Plan
                        </Link>
                        <button
                            onClick={() => setDismissed(true)}
                            aria-label="Dismiss"
                            className="w-6 h-6 flex items-center justify-center text-white/40 hover:text-white text-xs"
                        >
                            ×
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
