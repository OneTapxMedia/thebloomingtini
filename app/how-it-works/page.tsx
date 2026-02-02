"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Reach Out",
        description: "Fill out our quote request form with your event details, date, and guest count. The more details, the better!",
        icon: "📝",
    },
    {
        number: "02",
        title: "Consultation",
        description: "We'll schedule a call or meet-up to discuss your vision, menu preferences, and any special requests for your event.",
        icon: "💬",
    },
    {
        number: "03",
        title: "Custom Proposal",
        description: "Receive a personalized quote and menu recommendations tailored to your celebration and budget.",
        icon: "✨",
    },
    {
        number: "04",
        title: "Secure Your Date",
        description: "Sign the contract and submit your deposit to lock in your event date. We book up quickly, especially for peak season!",
        icon: "📅",
    },
    {
        number: "05",
        title: "Final Planning",
        description: "Two weeks before your event, we'll finalize the cocktail menu, timeline, and any last-minute details.",
        icon: "📋",
    },
    {
        number: "06",
        title: "Event Day",
        description: "We arrive early to set up, then serve your guests with professionalism and flair. You relax and enjoy!",
        icon: "🥂",
    },
];

const timeline = [
    { time: "6+ months before", task: "Book us! Popular dates fill quickly" },
    { time: "1 month before", task: "Finalize cocktail menu" },
    { time: "2 weeks before", task: "Confirm final guest count" },
    { time: "1 week before", task: "Purchase alcohol (we'll send a shopping list)" },
    { time: "Day of event", task: "We arrive 1-2 hours early for setup" },
];

export default function HowItWorksPage() {
    return (
        <>
            <Hero
                title="How It Works"
                subtitle="The Process"
                description="From first contact to last call, here's what to expect when you book The Blooming Tini."
                height="medium"
            />

            {/* Steps */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 mb-12 last:mb-0"
                            >
                                {/* Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-pink text-white flex items-center justify-center font-heading text-xl font-bold">
                                        {step.number}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="w-0.5 h-12 bg-pink/20 mx-auto mt-4" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className="flex-1 pt-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">{step.icon}</span>
                                        <h3 className="text-xl font-heading font-semibold text-dark">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-pink font-accent text-2xl">Planning</span>
                            <h2 className="mt-2">
                                Event <span className="text-pink">Timeline</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-6 p-4 bg-cream rounded-xl"
                                >
                                    <span className="font-semibold text-pink whitespace-nowrap min-w-[140px]">
                                        {item.time}
                                    </span>
                                    <span className="text-dark">{item.task}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="py-16 bg-pink">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-white text-2xl font-heading mb-6">
                            What to Expect on Event Day
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="text-center">
                                <div className="text-4xl mb-3">⏰</div>
                                <h4 className="text-gold font-semibold mb-2">Early Arrival</h4>
                                <p className="text-white/70 text-sm">
                                    We arrive 1-2 hours before service to set up our beautiful bar display.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">🍸</div>
                                <h4 className="text-gold font-semibold mb-2">Seamless Service</h4>
                                <p className="text-white/70 text-sm">
                                    Professional, friendly bartenders keep drinks flowing and guests happy.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-3">✨</div>
                                <h4 className="text-gold font-semibold mb-2">Clean Departure</h4>
                                <p className="text-white/70 text-sm">
                                    We pack up and leave your space spotless — like we were never there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4">Ready to <span className="text-pink">Start</span>?</h2>
                    <p className="text-muted max-w-xl mx-auto mb-8">
                        Let&apos;s begin planning your perfect bar experience.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Get a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
