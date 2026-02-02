"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
    {
        icon: "💜",
        title: "Personal Touch",
        description: "Every event gets our full attention. We treat your celebration like our own.",
    },
    {
        icon: "✨",
        title: "Quality First",
        description: "Premium ingredients, professional service, and meticulous attention to detail.",
    },
    {
        icon: "🤝",
        title: "Reliability",
        description: "Licensed, insured, and always on time. You can count on us.",
    },
    {
        icon: "🌸",
        title: "Creativity",
        description: "Custom cocktails and unique presentations that wow your guests.",
    },
];

export default function AboutPage() {
    return (
        <>
            <Hero
                title="Our Story"
                subtitle="About Us"
                description="A sister-and-friend duo with a shared passion for celebrations and craft cocktails."
                height="medium"
            />

            {/* Story */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-pink font-accent text-2xl">From Friends to Founders</span>
                            <h2 className="mt-2 mb-6">
                                Where It All <span className="text-pink">Began</span>
                            </h2>
                            <div className="space-y-4 text-muted leading-relaxed">
                                <p>
                                    What started as a love for hosting friends and family has blossomed into The Blooming Tini — a mobile bartending service built on the belief that every celebration deserves to be special.
                                </p>
                                <p>
                                    We&apos;re a sister-and-friend duo based in Bensalem, PA, and we&apos;ve combined our hospitality backgrounds and passion for mixology to create memorable bar experiences for events of all sizes.
                                </p>
                                <p>
                                    From our first backyard party to weddings with hundreds of guests, we&apos;ve learned that what people remember most isn&apos;t just the drinks — it&apos;s the feeling. The laughter, the toasts, the moments that bring people together. That&apos;s what we&apos;re really here to serve.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-rose/20 to-forest/20 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <span className="text-6xl mb-4 block">👩‍👩‍👧</span>
                                    <p className="text-pink font-heading text-xl">Photo Placeholder</p>
                                    <p className="text-muted text-sm">Founders photo coming soon</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-pink font-accent text-2xl">What We Believe</span>
                        <h2 className="mt-2">
                            Our <span className="text-pink">Values</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-muted text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-pink">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-white text-2xl font-heading mb-8">
                            Licensed, Insured & Certified
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/10 rounded-xl p-6">
                                <div className="text-3xl mb-3">📋</div>
                                <h4 className="text-gold font-semibold mb-2">RAMP Certified</h4>
                                <p className="text-white/70 text-sm">
                                    PA Responsible Alcohol Management Program certified bartenders
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6">
                                <div className="text-3xl mb-3">🛡️</div>
                                <h4 className="text-gold font-semibold mb-2">Fully Insured</h4>
                                <p className="text-white/70 text-sm">
                                    General liability and liquor liability coverage for peace of mind
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6">
                                <div className="text-3xl mb-3">✅</div>
                                <h4 className="text-gold font-semibold mb-2">Licensed</h4>
                                <p className="text-white/70 text-sm">
                                    Properly licensed to serve in Pennsylvania and New Jersey
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4">Let&apos;s Create Something <span className="text-pink">Special</span></h2>
                    <p className="text-muted max-w-xl mx-auto mb-8">
                        We&apos;d love to hear about your upcoming celebration.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
