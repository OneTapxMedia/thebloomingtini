"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StatsSection from "@/components/StatsSection";
import PressStrip from "@/components/PressStrip";
import CocktailPreview from "@/components/CocktailPreview";
import { IMG } from "@/lib/images";

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
      <Hero
        subtitle="Where Celebrations Bloom"
        title="Mobile bartending for life&rsquo;s best moments"
        description="From intimate gatherings to grand celebrations, we bring the bar to you — complete with handcrafted cocktails, professional service, and a touch of botanical elegance."
        backgroundImage={IMG.heroPour}
        height="full"
      >
        <Link href="/contact" className="btn btn-gold">
          Plan Your Event
        </Link>
        <Link href="/gallery" className="btn btn-ghost">
          See Recent Pours
        </Link>
      </Hero>

      <PressStrip />

      {/* Services Section */}
      <section className="section bg-cream relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
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
              Every event deserves a <span className="gradient-text">perfect pour</span>
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
            className="text-center mt-14"
          >
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      <CocktailPreview />

      {/* Custom labels — their signature differentiator */}
      <section className="section bg-mist">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="eyebrow">The Signature Touch</span>
              <h2 className="mt-2 mb-6">
                Custom labels for <span className="gradient-text">every event</span>
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Your couple&apos;s name. Your shower theme. Your brand. Every cup, every coupe — printed with the details that make the night yours.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                It&apos;s the kind of detail your guests will photograph, post, and remember. We notice the details so you don&apos;t have to.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Design your labels
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={IMG.customLabeled}
                  alt="Custom-labeled wedding cocktail with bride and groom initials"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink/20 rounded-3xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/15 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types Marquee */}
      <section className="py-10 bg-pink overflow-hidden border-y border-pink-dark/20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...eventTypes, ...eventTypes, ...eventTypes].map((event, index) => (
            <span
              key={index}
              className="text-white text-2xl md:text-3xl font-heading mx-6 flex items-center gap-6"
            >
              {event}
              <span className="text-white/60">✦</span>
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
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="mt-2 mb-6">
                More than just <span className="gradient-text">bartending</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                We&apos;re two moms chasing a dream, building this side by side. Every detail is customized — from the menu to the custom-labeled cups — and the Bloom Bar is our pride and joy. Based in Bensalem, PA, serving the greater Philadelphia and South Jersey area.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Licensed & Insured", desc: "Full liability and liquor liability coverage for your peace of mind" },
                  { title: "Custom Cocktail Menus", desc: "Signature drinks tailored to your event's theme, palette, and palate" },
                  { title: "Full Bar Setup", desc: "We bring everything except the alcohol — glassware, ice, garnishes, and more" },
                  { title: "RAMP Certified Service", desc: "Bartenders trained in responsible service who know how to make guests feel cared for" },
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
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={IMG.whyUs}
                  alt="Bartender preparing a craft cocktail"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl max-w-[240px] hidden md:block"
              >
                <div className="flex gap-1 text-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-dark/80 leading-snug">
                  &ldquo;Truly the most beautiful bar I&rsquo;ve ever seen at a wedding.&rdquo;
                </p>
              </motion.div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink/10 rounded-full -z-10" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gold/10 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden isolate">
        <div className="absolute inset-0 -z-20">
          <Image
            src={IMG.heroWedding}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink/85 via-pink-dark/80 to-dark/85" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-cream font-accent text-3xl md:text-4xl">Ready to Celebrate?</span>
            <h2 className="text-white mt-2 mb-6">
              Let&rsquo;s make your event unforgettable
            </h2>
            <p className="text-white/85 text-lg mb-10 leading-relaxed">
              Tell us about your upcoming celebration and we&apos;ll create a custom bar experience that wows your guests — and lives on in their stories.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-gold">
                Reserve Your Date
              </Link>
              <Link href="/packages" className="btn btn-ghost">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Service Area</span>
            <h2 className="mt-2 mb-6">
              Proudly serving <span className="gradient-text">Greater Philadelphia</span>
            </h2>
            <p className="text-muted mb-10 leading-relaxed">
              Based in Bensalem, PA, we bring our mobile bar experience to events throughout Philadelphia, Bucks County, Montgomery County, and surrounding PA/NJ areas.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {["Philadelphia", "Bensalem", "Bucks County", "Montgomery County", "Delaware County", "South Jersey"].map((area) => (
                <span key={area} className="px-5 py-2.5 bg-white rounded-full text-sm text-dark font-medium shadow-sm">
                  {area}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
