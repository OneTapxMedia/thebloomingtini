"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role?: string;
    image?: string;
    index?: number;
}

export default function TestimonialCard({
    quote,
    author,
    role,
    image,
    index = 0,
}: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-md relative"
        >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center">
                    <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="pt-4">
                <p className="text-dark/80 leading-relaxed mb-6 italic">
                    &ldquo;{quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                    {image ? (
                        <img
                            src={image}
                            alt={author}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose to-gold flex items-center justify-center text-white font-semibold">
                            {author.charAt(0)}
                        </div>
                    )}
                    <div>
                        <p className="font-semibold text-dark">{author}</p>
                        {role && <p className="text-sm text-muted">{role}</p>}
                    </div>
                </div>
            </div>

            {/* Star Rating */}
            <div className="absolute top-8 right-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        </motion.div>
    );
}
