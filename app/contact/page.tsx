"use client";

import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { IMG } from "@/lib/images";

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

const formSchema = z.object({
    name: z.string().min(2, "Please tell us your name"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    eventType: z.string().min(1, "Choose an event type"),
    eventDate: z.string().min(1, "Pick a date (estimate is fine)"),
    guestCount: z.string().min(1, "Estimated guest count"),
    hours: z.string().optional(),
    venue: z.string().optional(),
    message: z.string().optional(),
    estimate: z.string().optional(),
    package: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function ContactInner() {
    const params = useSearchParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            eventType: params.get("eventType") || "",
            eventDate: "",
            guestCount: params.get("guestCount") || "",
            hours: params.get("hours") || "",
            venue: "",
            message: "",
            estimate: params.get("estimate") || "",
            package: params.get("package") || "",
        },
    });

    useEffect(() => {
        // Sync URL prefill into the form when params change client-side
        const eventType = params.get("eventType");
        const guestCount = params.get("guestCount");
        const hours = params.get("hours");
        const estimate = params.get("estimate");
        const pkg = params.get("package");
        if (eventType) setValue("eventType", eventType);
        if (guestCount) setValue("guestCount", guestCount);
        if (hours) setValue("hours", hours);
        if (estimate) setValue("estimate", estimate);
        if (pkg) setValue("package", pkg);
    }, [params, setValue]);

    const onSubmit = async (data: FormValues) => {
        setSubmitError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Bad response");

            setIsSubmitted(true);
            reset();
        } catch {
            // Mailto fallback so no inquiry is ever lost
            const subject = encodeURIComponent(
                `New inquiry — ${data.eventType} on ${data.eventDate}`
            );
            const lines = [
                `Name: ${data.name}`,
                `Email: ${data.email}`,
                `Phone: ${data.phone || "-"}`,
                `Event Type: ${data.eventType}`,
                `Event Date: ${data.eventDate}`,
                `Guests: ${data.guestCount}`,
                `Hours: ${data.hours || "-"}`,
                `Venue: ${data.venue || "-"}`,
                `Package: ${data.package || "-"}`,
                `Estimate: ${data.estimate || "-"}`,
                "",
                "Message:",
                data.message || "",
            ];
            const mailto = `mailto:hello@thebloomingtini.com?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
            window.location.href = mailto;
            setSubmitError(
                "Our form had a hiccup — we opened your email so you can hit send."
            );
        }
    };

    if (isSubmitted) {
        return (
            <>
                <Hero
                    title="Thank You"
                    subtitle="Message received"
                    description="We've received your inquiry and will get back to you within 24-48 hours."
                    backgroundImage={IMG.heroChampagne}
                    height="medium"
                />
                <section className="section bg-cream">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-md"
                        >
                            <svg
                                className="w-16 h-16 mx-auto text-pink mb-4"
                                viewBox="0 0 100 100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M50 15 C 30 35, 30 55, 50 75 C 70 55, 70 35, 50 15 Z" />
                                <path d="M15 50 C 35 40, 50 40, 65 50 C 50 60, 35 60, 15 50 Z" />
                                <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
                            </svg>
                            <h2 className="mb-4">We&rsquo;ll be in touch soon</h2>
                            <p className="text-muted mb-8">
                                In the meantime, follow along on Instagram for the latest pours, setups, and behind-the-scenes magic.
                            </p>
                            <a
                                href="https://instagram.com/thebloomingtini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Follow @thebloomingtini
                            </a>
                        </motion.div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Hero
                title="Tell us about your event"
                subtitle="Let's chat"
                description="Share the vision, we'll send a custom proposal — usually within 24-48 hours."
                backgroundImage={IMG.heroChampagne}
                height="medium"
            />

            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-md">
                                <h3 className="font-heading text-2xl font-semibold mb-6">
                                    Request a quote
                                </h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Your name *
                                            </label>
                                            <input
                                                type="text"
                                                {...register("name")}
                                                className="input"
                                                placeholder="Jane Doe"
                                            />
                                            {errors.name && <p className="field-error">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                {...register("email")}
                                                className="input"
                                                placeholder="jane@email.com"
                                            />
                                            {errors.email && <p className="field-error">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                {...register("phone")}
                                                className="input"
                                                placeholder="(215) 555-0123"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Event type *
                                            </label>
                                            <select {...register("eventType")} className="select">
                                                <option value="">Select event type</option>
                                                {eventTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.eventType && (
                                                <p className="field-error">{errors.eventType.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Event date *
                                            </label>
                                            <input
                                                type="date"
                                                {...register("eventDate")}
                                                className="input"
                                            />
                                            {errors.eventDate && (
                                                <p className="field-error">{errors.eventDate.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-2">
                                                Estimated guests *
                                            </label>
                                            <input
                                                type="number"
                                                {...register("guestCount")}
                                                className="input"
                                                placeholder="75"
                                            />
                                            {errors.guestCount && (
                                                <p className="field-error">{errors.guestCount.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-dark mb-2">
                                            Venue (city or venue name)
                                        </label>
                                        <input
                                            type="text"
                                            {...register("venue")}
                                            className="input"
                                            placeholder="Philadelphia, PA or Venue Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-dark mb-2">
                                            Tell us about your event
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            className="textarea"
                                            placeholder="Vision, theme, colors, special requests, anything you want us to know..."
                                        />
                                    </div>

                                    {/* Hidden context from quote calculator */}
                                    <input type="hidden" {...register("hours")} />
                                    <input type="hidden" {...register("estimate")} />
                                    <input type="hidden" {...register("package")} />

                                    {(params.get("package") || params.get("estimate")) && (
                                        <div className="rounded-2xl bg-cream p-4 text-sm text-dark/80 border border-pink/15">
                                            <p className="font-medium text-pink mb-1">
                                                We received your quote builder estimate:
                                            </p>
                                            <p>
                                                <strong>{params.get("package")}</strong> · est. ${params.get("estimate")}
                                            </p>
                                        </div>
                                    )}

                                    {submitError && (
                                        <p className="text-sm text-pink-dark">{submitError}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary w-full disabled:opacity-60"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Request"}
                                    </button>

                                    <p className="text-xs text-muted text-center">
                                        We respect your privacy. We&rsquo;ll never share your details.
                                    </p>
                                </form>
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h4 className="font-heading font-semibold text-dark mb-2 flex items-center gap-2">
                                    <span className="text-pink">⏱</span> Response time
                                </h4>
                                <p className="text-muted text-sm leading-relaxed">
                                    We respond within 24-48 hours. For urgent inquiries, DM us on Instagram and we&apos;ll reach back faster.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <h4 className="font-heading font-semibold text-dark mb-4">
                                    Other ways to reach us
                                </h4>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:hello@thebloomingtini.com"
                                        className="flex items-center gap-3 text-muted hover:text-pink transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm">hello@thebloomingtini.com</span>
                                    </a>
                                    <a
                                        href="https://instagram.com/thebloomingtini"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-muted hover:text-pink transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span className="text-sm">@thebloomingtini</span>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-pink rounded-2xl p-6 text-white">
                                <h4 className="font-heading font-semibold mb-3">
                                    Service Area
                                </h4>
                                <p className="text-white/80 text-sm mb-4">
                                    Based in Bensalem, PA — serving:
                                </p>
                                <ul className="text-sm text-white/80 space-y-1">
                                    <li>· Philadelphia & Suburbs</li>
                                    <li>· Bucks County</li>
                                    <li>· Montgomery County</li>
                                    <li>· Delaware County</li>
                                    <li>· South Jersey</li>
                                </ul>
                                <p className="text-white/85 text-xs mt-4 font-medium">
                                    Travel fees may apply beyond 30 miles.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={null}>
            <ContactInner />
        </Suspense>
    );
}
