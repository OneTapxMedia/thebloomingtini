import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services | The Blooming Tini",
    description: "Professional mobile bartending services for weddings, corporate events, private parties, and special occasions in Philadelphia and surrounding areas.",
};

const services = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Weddings & Bridal Showers",
        description: "From intimate vineyard ceremonies to grand ballroom receptions, we create a bar experience that matches your wedding vision. Custom signature cocktails, elegant presentation, and seamless service.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: "Corporate Events",
        description: "Elevate your company gatherings with professional bartending. Perfect for holiday parties, product launches, client appreciation events, and team celebrations.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
        ),
        title: "Birthday Parties",
        description: "Make milestone birthdays unforgettable with craft cocktails and professional service. From sweet 16 mocktail bars to 50th birthday celebrations.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
        ),
        title: "Baby Showers",
        description: "Celebrate new arrivals with elegant mocktail bars and light refreshments. We create beautiful, Instagram-worthy drink stations for expecting parents.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: "Engagement Parties",
        description: "Toast to love with custom cocktails that tell your story. Perfect for engagement announcements and pre-wedding celebrations.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
        title: "Graduations",
        description: "Celebrate academic achievements in style. From high school to PhD, we create memorable bar experiences for graduates and their guests.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Fundraisers & Galas",
        description: "Add sophistication to charitable events with premium bar service. Professional presentation that impresses donors and keeps the giving spirit high.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: "Backyard Parties",
        description: "Transform your backyard into a bar destination. BBQs, pool parties, summer gatherings — we bring the craft cocktail experience to your home.",
    },
];

const included = [
    "Professional, RAMP-certified bartender(s)",
    "Full bar setup and breakdown",
    "Custom cocktail menu creation",
    "Fresh mixers, garnishes, and ingredients",
    "All bar supplies and equipment",
    "Glassware and barware",
    "Ice and coolers",
    "General liability insurance",
    "Liquor liability insurance",
];

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Our Services"
                subtitle="What We Offer"
                description="Professional mobile bartending for every celebration. We bring the bar to you with style, expertise, and a personal touch."
                height="medium"
            />

            {/* Services Grid */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-pink font-accent text-2xl">The Full Experience</span>
                            <h2 className="mt-2 mb-6">
                                What&apos;s <span className="text-pink">Included</span>
                            </h2>
                            <p className="text-muted leading-relaxed mb-8">
                                When you book The Blooming Tini, you get a complete bar experience. No hidden fees, no surprise charges — just premium service from setup to cleanup.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {included.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-dark">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink/10 to-gold/10 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <span className="text-6xl mb-4 block">🥂</span>
                                    <p className="text-pink font-heading text-xl">Photo Placeholder</p>
                                    <p className="text-muted text-sm">Bartender in action</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink/20 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dry Hire Explanation */}
            <section className="py-16 bg-pink">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-white text-2xl font-heading mb-4">
                            What is &quot;Dry Hire&quot;?
                        </h3>
                        <p className="text-white/80 leading-relaxed mb-6">
                            We operate on a &quot;dry hire&quot; basis, which means <strong className="text-gold">you provide the alcohol</strong> and we provide everything else. This gives you complete control over your beverage selection and budget while ensuring you get professional, licensed bartending service.
                        </p>
                        <p className="text-white/60 text-sm">
                            Don&apos;t worry — we&apos;ll help you calculate exactly how much you need based on your guest count and event duration!
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4">Ready to <span className="text-pink">Book</span>?</h2>
                    <p className="text-muted max-w-xl mx-auto mb-8">
                        Tell us about your event and let&apos;s create something special together.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Get a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
