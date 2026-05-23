"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const eventTypes = [
    { value: "Wedding", label: "Wedding" },
    { value: "Corporate Event", label: "Corporate" },
    { value: "Birthday Party", label: "Birthday" },
    { value: "Bridal Shower", label: "Bridal Shower" },
    { value: "Holiday Party", label: "Holiday" },
    { value: "Other", label: "Other" },
];

function calc(guests: number, hours: number, eventType: string) {
    // Tiering by guests
    let tier: "Essential" | "Premium" | "Luxe" = "Essential";
    let base = 350;
    let baseHours = 3;
    if (guests >= 60 && guests < 110) {
        tier = "Premium";
        base = 550;
        baseHours = 4;
    } else if (guests >= 110) {
        tier = "Luxe";
        base = 850;
        baseHours = 5;
    }

    const extraHours = Math.max(0, hours - baseHours);
    const hourlyAdd = extraHours * 100;
    const guestSurcharge = guests > 150 ? (guests - 150) * 4 : 0;
    const weddingPremium = eventType === "Wedding" ? 100 : 0;

    const low = base + hourlyAdd + guestSurcharge + weddingPremium;
    const high = Math.round(low * 1.25);

    return { tier, low, high };
}

export default function QuoteCalculator() {
    const [guests, setGuests] = useState(80);
    const [hours, setHours] = useState(4);
    const [eventType, setEventType] = useState("Wedding");

    const result = useMemo(() => calc(guests, hours, eventType), [guests, hours, eventType]);

    const queryString = new URLSearchParams({
        eventType,
        guestCount: String(guests),
        hours: String(hours),
        estimate: `${result.low}-${result.high}`,
        package: result.tier,
    }).toString();

    return (
        <section className="section bg-mist relative overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="eyebrow">Estimate Your Investment</span>
                    <h2 className="mt-2 mb-4">
                        Build your <span className="gradient-text">custom quote</span>
                    </h2>
                    <p className="text-muted">
                        Slide to your event details for an instant ballpark — your real quote always wins (often friendlier than the estimate).
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 max-w-5xl mx-auto">
                    {/* Controls */}
                    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-md">
                        {/* Event Type */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-dark mb-3">Event Type</label>
                            <div className="flex flex-wrap gap-2">
                                {eventTypes.map((t) => (
                                    <button
                                        key={t.value}
                                        onClick={() => setEventType(t.value)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${eventType === t.value
                                            ? "bg-pink text-white shadow-md"
                                            : "bg-cream text-dark hover:bg-pink/10"
                                            }`}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Guests slider */}
                        <div className="mb-8">
                            <div className="flex items-baseline justify-between mb-3">
                                <label className="text-sm font-medium text-dark">Guest count</label>
                                <span className="text-2xl font-heading text-pink font-semibold tabular-nums">
                                    {guests}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={20}
                                max={250}
                                step={5}
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                                className="w-full accent-pink"
                                aria-label="Guest count"
                            />
                            <div className="flex justify-between text-xs text-muted mt-1">
                                <span>20</span>
                                <span>250+</span>
                            </div>
                        </div>

                        {/* Hours slider */}
                        <div>
                            <div className="flex items-baseline justify-between mb-3">
                                <label className="text-sm font-medium text-dark">Service hours</label>
                                <span className="text-2xl font-heading text-pink font-semibold tabular-nums">
                                    {hours} hr
                                </span>
                            </div>
                            <input
                                type="range"
                                min={2}
                                max={8}
                                step={1}
                                value={hours}
                                onChange={(e) => setHours(Number(e.target.value))}
                                className="w-full accent-pink"
                                aria-label="Service hours"
                            />
                            <div className="flex justify-between text-xs text-muted mt-1">
                                <span>2 hr</span>
                                <span>8 hr</span>
                            </div>
                        </div>
                    </div>

                    {/* Result Card */}
                    <motion.div
                        key={`${result.tier}-${result.low}`}
                        initial={{ opacity: 0.6, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="bg-dark text-white rounded-3xl p-8 shadow-xl flex flex-col"
                    >
                        <span className="text-xs uppercase tracking-[0.25em] text-pink-light mb-2">
                            Recommended
                        </span>
                        <h3 className="text-white font-heading text-3xl mb-1">
                            The {result.tier}
                        </h3>
                        <p className="text-white/70 text-sm mb-6">
                            Best fit for {guests} guests over {hours} hours
                        </p>

                        <div className="border-t border-white/10 pt-6 mb-6 flex-1">
                            <p className="text-xs uppercase tracking-wider text-white/50 mb-2">
                                Estimated Range
                            </p>
                            <p className="text-4xl font-heading font-semibold text-gold tabular-nums">
                                ${result.low.toLocaleString()}
                                <span className="text-white/40 mx-2">–</span>
                                ${result.high.toLocaleString()}
                            </p>
                            <p className="text-xs text-white/50 mt-2">
                                Includes bartenders, full setup, mixers, garnishes, glassware
                            </p>
                        </div>

                        <Link
                            href={`/contact?${queryString}`}
                            className="btn btn-gold w-full"
                        >
                            Lock in this date
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
