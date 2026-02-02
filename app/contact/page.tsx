"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

const eventTypes = [
    "Wedding",
    "Bridal Shower",
    "Corporate Event",
    "Birthday Party",
    "Baby Shower",
    "Graduation",
    "Holiday Party",
    "Engagement Party",
    "Other",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        venue: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with email service
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <>
                <Hero
                    title="Thank You!"
                    subtitle="Message Received"
                    description="We've received your inquiry and will get back to you within 24-48 hours."
                    height="medium"
                />
                <section className="section bg-cream">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="bg-white rounded-2xl p-12">
                                <span className="text-6xl mb-6 block">🌸</span>
                                <h2 className="mb-4">We&apos;ll Be in Touch Soon!</h2>
                                <p className="text-muted mb-8">
                                    In the meantime, feel free to follow us on Instagram to see our latest events and cocktail creations.
                                </p>
                                <a
                                    href="https://instagram.com/thebloomingini"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Follow @thebloomingini
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Hero
                title="Get a Quote"
                subtitle="Contact Us"
                description="Tell us about your celebration and we'll create a custom proposal for you."
                height="medium"
            />

            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h3 className="text-2xl font-heading font-semibold mb-6">
                                    Request a Quote
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                                                placeholder="jane@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                                                placeholder="(215) 555-0123"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Event Type *
                                            </label>
                                            <select
                                                name="eventType"
                                                required
                                                value={formData.eventType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all bg-white"
                                            >
                                                <option value="">Select event type</option>
                                                {eventTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Event Date *
                                            </label>
                                            <input
                                                type="date"
                                                name="eventDate"
                                                required
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Estimated Guest Count *
                                            </label>
                                            <input
                                                type="number"
                                                name="guestCount"
                                                required
                                                value={formData.guestCount}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                                                placeholder="75"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-dark mb-2">
                                            Venue Location (City/Venue Name)
                                        </label>
                                        <input
                                            type="text"
                                            name="venue"
                                            value={formData.venue}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all"
                                            placeholder="Philadelphia, PA or Venue Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-dark mb-2">
                                            Tell Us About Your Event
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20 outline-none transition-all resize-none"
                                            placeholder="Share any details about your vision, theme, special requests, or questions..."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full">
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Response Time */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h4 className="font-heading font-semibold text-dark mb-3">
                                    ⏰ Response Time
                                </h4>
                                <p className="text-muted text-sm">
                                    We typically respond within 24-48 hours. For urgent inquiries, please send us a DM on Instagram.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h4 className="font-heading font-semibold text-dark mb-4">
                                    📧 Other Ways to Reach Us
                                </h4>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:hello@thebloomingini.com"
                                        className="flex items-center gap-3 text-muted hover:text-pink transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm">hello@thebloomingini.com</span>
                                    </a>
                                    <a
                                        href="https://instagram.com/thebloomingini"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-muted hover:text-pink transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span className="text-sm">@thebloomingini</span>
                                    </a>
                                </div>
                            </div>

                            {/* Service Area */}
                            <div className="bg-pink rounded-2xl p-6 text-white">
                                <h4 className="font-heading font-semibold mb-3">
                                    📍 Service Area
                                </h4>
                                <p className="text-white/80 text-sm mb-4">
                                    Based in Bensalem, PA serving:
                                </p>
                                <ul className="text-sm text-white/70 space-y-1">
                                    <li>• Philadelphia & Suburbs</li>
                                    <li>• Bucks County</li>
                                    <li>• Montgomery County</li>
                                    <li>• Delaware County</li>
                                    <li>• South Jersey</li>
                                </ul>
                                <p className="text-gold text-xs mt-4">
                                    Travel fees may apply for locations beyond 30 miles
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
