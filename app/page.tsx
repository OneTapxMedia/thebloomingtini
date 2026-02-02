"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Weddings & Bridal",
    description: "Make your special day unforgettable with our elegant bar service and custom cocktail menus designed for your celebration.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Corporate Events",
    description: "Impress clients and celebrate milestones with professional bartending that elevates your company gatherings.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: "Private Parties",
    description: "From birthdays to backyard bashes, we bring the bar to you with handcrafted cocktails and expert service.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fundraisers & Galas",
    description: "Add sophistication to your charitable events with premium bar service that keeps guests engaged and generous.",
  },
];

const testimonials = [
  {
    quote: "The Blooming Tini made our wedding reception absolutely magical! Their attention to detail and beautiful presentation had all our guests raving.",
    author: "Sarah & Michael",
    role: "Wedding, October 2024",
  },
  {
    quote: "Professional, punctual, and the cocktails were incredible. They elevated our corporate holiday party to a whole new level.",
    author: "Jennifer R.",
    role: "Corporate Event, December 2024",
  },
  {
    quote: "From setup to cleanup, everything was handled flawlessly. The custom cocktail menu they created for my 40th was the highlight of the night!",
    author: "David M.",
    role: "Birthday Party, September 2024",
  },
];

const eventTypes = [
  "Weddings",
  "Bridal Showers",
  "Corporate Events",
  "Birthday Parties",
  "Baby Showers",
  "Graduations",
  "Holiday Parties",
  "Engagement Parties",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Where Celebrations Bloom"
        title="Mobile Bartending for Life's Best Moments"
        description="From intimate gatherings to grand celebrations, we bring the bar to you — complete with handcrafted cocktails, professional service, and a touch of botanical elegance."
        height="full"
      >
        <Link href="/contact" className="btn btn-gold">
          Get a Quote
        </Link>
        <Link href="/gallery" className="btn btn-secondary border-white text-white hover:bg-white hover:text-pink">
          View Our Work
        </Link>
      </Hero>

      {/* Services Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pink font-accent text-2xl"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2"
            >
              Every Event Deserves a <span className="text-pink">Perfect Pour</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Types Banner */}
      <section className="py-12 bg-pink overflow-hidden">
        <div className="flex animate-marquee">
          {[...eventTypes, ...eventTypes].map((event, index) => (
            <span
              key={index}
              className="text-white/80 text-lg font-medium whitespace-nowrap mx-8 flex items-center gap-4"
            >
              {event}
              <span className="text-pink">✿</span>
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-pink font-accent text-2xl">Why Choose Us</span>
              <h2 className="mt-2 mb-6">
                More Than Just <span className="text-pink">Bartending</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                We&apos;re a sister-and-friend duo who believe every celebration deserves to bloom. Based in Bensalem, PA, we bring licensed, insured, and RAMP-certified bartending services to the greater Philadelphia area.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Licensed & Insured", desc: "Full liability and liquor liability coverage for your peace of mind" },
                  { title: "Custom Cocktail Menus", desc: "Signature drinks tailored to your event's theme and preferences" },
                  { title: "Full Bar Setup", desc: "We bring everything except the alcohol — glassware, ice, garnishes, and more" },
                  { title: "Professional Service", desc: "RAMP-certified bartenders who know how to make your guests feel special" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-rose/20 to-gold/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">🍸</span>
                  <p className="text-pink font-heading text-xl">Photo Placeholder</p>
                  <p className="text-muted text-sm">Bar setup image coming soon</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pink font-accent text-2xl"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2"
            >
              What Our Clients <span className="text-pink">Say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-gold font-accent text-3xl">Ready to Celebrate?</span>
            <h2 className="text-white mt-2 mb-6">
              Let&apos;s Make Your Event Unforgettable
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Tell us about your upcoming celebration and we&apos;ll create a custom bar experience that wows your guests.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-gold">
                Get a Quote
              </Link>
              <Link href="/packages" className="btn btn-secondary border-white text-white hover:bg-white hover:text-pink">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pink font-accent text-2xl"
            >
              Service Area
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 mb-6"
            >
              Proudly Serving <span className="text-pink">Greater Philadelphia</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted mb-8"
            >
              Based in Bensalem, PA, we bring our mobile bar experience to events throughout Philadelphia, Bucks County, Montgomery County, and surrounding PA/NJ areas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {["Philadelphia", "Bensalem", "Bucks County", "Montgomery County", "Delaware County", "South Jersey"].map((area) => (
                <span key={area} className="px-4 py-2 bg-cream rounded-full text-sm text-dark font-medium">
                  {area}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}
