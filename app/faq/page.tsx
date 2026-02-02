"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        category: "Booking & Pricing",
        questions: [
            {
                q: "How far in advance should I book?",
                a: "We recommend booking 3-6 months in advance for weddings and large events, especially during peak season (May-October). Smaller events can sometimes be accommodated with shorter notice, depending on availability.",
            },
            {
                q: "What is your pricing structure?",
                a: "Our pricing is based on event duration, guest count, and the level of service you need. We offer three main packages starting at $350 for our Essential package. For a detailed quote, please fill out our contact form with your event details.",
            },
            {
                q: "Do you require a deposit?",
                a: "Yes, we require a 50% non-refundable deposit to secure your date. The remaining balance is due one week before your event.",
            },
            {
                q: "What is your cancellation policy?",
                a: "Deposits are non-refundable. If you need to cancel or reschedule, please contact us as soon as possible. We'll do our best to work with you on rescheduling to a new date.",
            },
        ],
    },
    {
        category: "Services & Logistics",
        questions: [
            {
                q: "What is 'dry hire'?",
                a: "Dry hire means you provide the alcohol and we provide everything else — professional bartenders, bar setup, glassware, ice, mixers, garnishes, and all equipment. This gives you full control over your beverage selection and budget.",
            },
            {
                q: "Can you help me figure out how much alcohol to buy?",
                a: "Absolutely! Once we know your guest count, event duration, and drink preferences, we'll provide a detailed shopping list with recommended quantities for beer, wine, and spirits.",
            },
            {
                q: "Do you provide the bar or table?",
                a: "We bring all bar equipment, but typically require a 6-8 foot table to be provided by the venue or rented. We can recommend rental companies if needed. For our Luxe package, we offer upgraded bar setups.",
            },
            {
                q: "What time do you arrive for setup?",
                a: "We typically arrive 1-2 hours before service begins to set up our bar and prep for the event. We'll coordinate exact timing with you during the final planning call.",
            },
            {
                q: "Do you stay for the entire event?",
                a: "Yes! Our bartenders stay for the full duration of your contracted service time, plus additional time for setup and breakdown.",
            },
        ],
    },
    {
        category: "Drinks & Menu",
        questions: [
            {
                q: "Can you create a custom cocktail menu?",
                a: "Yes! We love creating signature cocktails that match your event theme, colors, or story. Our Premium and Luxe packages include custom cocktail creation and menu design.",
            },
            {
                q: "Do you offer non-alcoholic options?",
                a: "Absolutely! We can create beautiful mocktails, set up a coffee/tea station, or provide refreshing non-alcoholic beverages for guests who don't drink alcohol.",
            },
            {
                q: "Can you accommodate dietary restrictions?",
                a: "Yes, we can work around most dietary needs and allergies. Just let us know during the planning process and we'll ensure safe options are available.",
            },
        ],
    },
    {
        category: "Legal & Insurance",
        questions: [
            {
                q: "Are you licensed and insured?",
                a: "Yes! We carry both general liability and liquor liability insurance. All our bartenders are RAMP certified (PA Responsible Alcohol Management Program) and properly licensed to serve.",
            },
            {
                q: "What states do you serve?",
                a: "We're licensed to serve in Pennsylvania and New Jersey. Our primary service area is the greater Philadelphia region, but we can travel for special events.",
            },
            {
                q: "Will you check IDs?",
                a: "Yes, we take responsible service seriously. We check IDs for anyone who appears under 30 and will not serve anyone who is visibly intoxicated.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <>
            <Hero
                title="FAQ"
                subtitle="Questions?"
                description="Everything you need to know about booking mobile bartending for your event."
                height="medium"
            />

            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((category, catIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="mb-12 last:mb-0"
                            >
                                <h3 className="text-xl font-heading font-semibold text-pink mb-6">
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.questions.map((faq, qIndex) => {
                                        const itemId = `${catIndex}-${qIndex}`;
                                        const isOpen = openItems.includes(itemId);

                                        return (
                                            <div
                                                key={itemId}
                                                className="bg-white rounded-xl overflow-hidden shadow-sm"
                                            >
                                                <button
                                                    onClick={() => toggleItem(itemId)}
                                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                                >
                                                    <span className="font-medium text-dark pr-4">{faq.q}</span>
                                                    <span
                                                        className={`text-pink transition-transform ${isOpen ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 9l-7 7-7-7"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-6 pb-4">
                                                                <p className="text-muted leading-relaxed">{faq.a}</p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 bg-pink">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-white text-2xl font-heading mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-white/80 max-w-xl mx-auto mb-8">
                        We&apos;re happy to answer any questions you might have. Reach out and let&apos;s chat about your event!
                    </p>
                    <Link href="/contact" className="btn btn-gold">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
