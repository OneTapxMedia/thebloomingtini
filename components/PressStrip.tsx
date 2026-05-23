"use client";

const press = [
    "Philadelphia Style",
    "The Knot",
    "WeddingWire",
    "Brides of Bucks",
    "Philly Magazine",
    "Garden & Gun",
];

export default function PressStrip() {
    return (
        <section className="bg-cream py-10 border-y border-pink/15">
            <div className="container mx-auto px-6">
                <p className="text-center text-xs uppercase tracking-[0.3em] text-muted mb-6">
                    As Featured & Trusted By
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {press.map((p) => (
                        <span
                            key={p}
                            className="font-heading text-lg md:text-xl text-dark/40 hover:text-pink transition-colors italic"
                        >
                            {p}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
