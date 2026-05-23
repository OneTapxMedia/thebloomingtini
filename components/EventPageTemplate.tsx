"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { IMG, LINKS } from "@/lib/images";

export type EventPageData = {
    slug: string;
    eyebrow: string;
    title: string;
    description: string;
    heroImage: string;
    intro: {
        eyebrow: string;
        heading: string;
        body: string;
    };
    included: Array<{ title: string; description: string; icon?: React.ReactNode }>;
    signatureTouches: Array<{ title: string; description: string }>;
    pricing: {
        startingAt: string;
        package: string;
        details: string;
    };
    gallery: string[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    faqs: Array<{ q: string; a: string }>;
    relatedEvents: Array<{ slug: string; label: string; image: string }>;
};

const Check = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default function EventPageTemplate({ data }: { data: EventPageData }) {
    return (
        <>
            <Hero
                title={data.title}
                subtitle={data.eyebrow}
                description={data.description}
                backgroundImage={data.heroImage}
                height="large"
            >
                <Link href="/contact" className="btn btn-gold">
                    Plan Your Event
                </Link>
                <a
                    href={LINKS.honeybook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                >
                    Book via HoneyBook
                </a>
            </Hero>

            {/* Intro */}
            <section className="section bg-cream">
                <div className="container-narrow text-center">
                    <span className="eyebrow">{data.intro.eyebrow}</span>
                    <h2 className="mt-2 mb-6">{data.intro.heading}</h2>
                    <p className="text-muted leading-relaxed text-lg">{data.intro.body}</p>
                </div>
            </section>

            {/* What's Included */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-14">
                        <span className="eyebrow">What's Included</span>
                        <h2 className="mt-2">
                            Everything you need <span className="gradient-text">(except the bottles)</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.included.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-cream rounded-2xl p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-pink/15 flex items-center justify-center text-pink mb-4">
                                    {item.icon ?? Check}
                                </div>
                                <h4 className="font-heading text-xl text-dark mb-2">{item.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signature touches — image + bullets */}
            <section className="section bg-mist">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={data.gallery[0] ?? data.heroImage}
                                    alt={`${data.title} signature touch`}
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink/15 rounded-full -z-10" />
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/15 rounded-3xl -z-10" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="eyebrow">Signature Touches</span>
                            <h2 className="mt-2 mb-6">
                                Why our {data.eyebrow.toLowerCase()} feel <span className="gradient-text">unforgettable</span>
                            </h2>
                            <div className="space-y-5">
                                {data.signatureTouches.map((t, i) => (
                                    <motion.div
                                        key={t.title}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-9 h-9 rounded-full bg-pink/15 flex items-center justify-center flex-shrink-0 text-pink mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-dark mb-1">{t.title}</h4>
                                            <p className="text-muted text-sm leading-relaxed">{t.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing card */}
            <section className="section bg-white">
                <div className="container-narrow">
                    <div className="bg-gradient-to-br from-dark to-dark-light text-white rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Decorative botanical */}
                        <svg
                            className="absolute -top-12 -right-12 w-72 h-72 text-pink/10 pointer-events-none"
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            aria-hidden="true"
                        >
                            <path d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z" />
                            <path d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z" />
                        </svg>
                        <div className="relative p-10 md:p-14">
                            <span className="text-pink-light font-accent text-3xl block mb-2">Investment</span>
                            <h2 className="text-white mb-3">
                                {data.title} starting at <span className="text-gold">{data.pricing.startingAt}</span>
                            </h2>
                            <p className="text-white/80 mb-2 text-lg">
                                <strong className="text-white">{data.pricing.package}</strong>
                            </p>
                            <p className="text-white/65 mb-8 leading-relaxed max-w-2xl">
                                {data.pricing.details}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/packages" className="btn btn-gold">
                                    See all packages
                                </Link>
                                <Link href="/contact" className="btn btn-ghost">
                                    Get a custom quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {data.gallery.length > 0 && (
                <section className="section bg-cream">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="eyebrow">Recent Pours</span>
                            <h2 className="mt-2">
                                {data.title} <span className="gradient-text">we&rsquo;ve poured</span>
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {data.gallery.slice(0, 6).map((src, i) => (
                                <motion.div
                                    key={src + i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`relative overflow-hidden rounded-2xl group ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
                                >
                                    <Image
                                        src={src}
                                        alt={`${data.title} gallery ${i + 1}`}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonial */}
            <section className="py-20 md:py-28 bg-forest text-white relative overflow-hidden">
                <svg
                    className="absolute -top-10 -left-10 w-72 h-72 text-pink/10"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    aria-hidden="true"
                >
                    <path d="M50 10 C 30 30, 30 50, 50 70 C 70 50, 70 30, 50 10 Z" />
                    <path d="M20 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 20 50 Z" />
                </svg>
                <div className="container-narrow text-center relative z-10">
                    <span className="eyebrow text-pink-light">Love Letters</span>
                    <h2 className="text-white mt-2 mb-10">From a recent {data.eyebrow.toLowerCase()}</h2>
                    <p className="font-heading text-2xl md:text-3xl leading-snug text-white mb-6">
                        &ldquo;{data.testimonial.quote}&rdquo;
                    </p>
                    <p className="font-semibold text-white">{data.testimonial.author}</p>
                    <p className="text-pink-light text-sm">{data.testimonial.role}</p>
                </div>
            </section>

            {/* FAQ snippet */}
            {data.faqs.length > 0 && (
                <section className="section bg-white">
                    <div className="container-narrow">
                        <div className="text-center mb-10">
                            <span className="eyebrow">Quick Answers</span>
                            <h2 className="mt-2">{data.title} FAQ</h2>
                        </div>
                        <div className="space-y-4">
                            {data.faqs.map((faq, i) => (
                                <motion.details
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group bg-cream rounded-2xl p-5 cursor-pointer"
                                >
                                    <summary className="flex justify-between items-center font-medium text-dark list-none">
                                        <span className="pr-4">{faq.q}</span>
                                        <span className="text-pink transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                                    </summary>
                                    <p className="text-muted text-sm leading-relaxed mt-3">{faq.a}</p>
                                </motion.details>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/faq" className="text-pink font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                                See the full FAQ
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Related events */}
            {data.relatedEvents.length > 0 && (
                <section className="section bg-cream">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-10">
                            <span className="eyebrow">Other Celebrations</span>
                            <h2 className="mt-2">We pour for <span className="gradient-text">these too</span></h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {data.relatedEvents.map((evt) => (
                                <Link key={evt.slug} href={`/services/${evt.slug}`} className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src={evt.image}
                                        alt={evt.label}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                        <p className="font-heading text-lg leading-tight">{evt.label}</p>
                                        <p className="text-xs text-pink-light mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Explore <span>→</span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="relative py-24 md:py-32 overflow-hidden isolate bg-cream">
                <div className="absolute inset-0 -z-20 opacity-40">
                    <Image src={data.heroImage} alt="" fill sizes="100vw" className="object-cover" />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-cream/85 to-cream" />
                <div className="container-narrow text-center relative z-10">
                    <span className="eyebrow">Let&rsquo;s Pour Yours</span>
                    <h2 className="mt-2 mb-6">Ready to bloom?</h2>
                    <p className="text-muted text-lg mb-10 leading-relaxed">
                        Tell us about your {data.eyebrow.toLowerCase()}. We&rsquo;ll send a custom proposal within 48 hours — usually faster.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact" className="btn btn-primary">
                            Get a quote
                        </Link>
                        <a
                            href={LINKS.honeybook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Open HoneyBook
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

// Export a helper "all event types" registry for cross-linking
export const EVENT_INDEX = [
    { slug: "weddings", label: "Weddings", image: IMG.weddingBar },
    { slug: "bridal-showers", label: "Bridal Showers", image: IMG.cocktailRose },
    { slug: "baby-showers", label: "Baby Showers", image: IMG.matchaLatte },
    { slug: "corporate", label: "Corporate Events", image: IMG.corporateEvent },
    { slug: "birthdays", label: "Birthdays", image: IMG.cocktailChampagneBloom },
    { slug: "wellness", label: "Wellness & Pilates", image: IMG.matchaLatte },
    { slug: "engagement", label: "Engagement Parties", image: IMG.cocktailRose },
    { slug: "backyard", label: "Backyard Parties", image: IMG.outdoorBar },
];
