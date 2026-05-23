import { IMG } from "./images";

export type NavLink = {
    href: string;
    label: string;
    description?: string;
};

export type NavSection = {
    title: string;
    links: NavLink[];
};

export type NavItem =
    | {
        kind: "link";
        href: string;
        label: string;
    }
    | {
        kind: "mega";
        label: string;
        href: string;
        sections: NavSection[];
        feature: {
            eyebrow: string;
            title: string;
            description: string;
            href: string;
            cta: string;
            image: string;
        };
    };

export const NAV: NavItem[] = [
    {
        kind: "mega",
        label: "Services",
        href: "/services",
        sections: [
            {
                title: "Celebrations",
                links: [
                    { href: "/services/weddings", label: "Weddings", description: "Custom menus, the Bloom Bar, & coupes with your initials" },
                    { href: "/services/bridal-showers", label: "Bridal Showers", description: "Pink champagne, labeled flutes, photographable" },
                    { href: "/services/baby-showers", label: "Baby Showers", description: "Beautiful mocktails she'll actually want to drink" },
                    { href: "/services/birthdays", label: "Birthdays & Milestones", description: "30th, 40th, sweet 16 — all blooming" },
                    { href: "/services/engagement", label: "Engagement Parties", description: "Their first 'us' cocktail, on cue" },
                ],
            },
            {
                title: "Corporate & Wellness",
                links: [
                    { href: "/services/corporate", label: "Corporate Events", description: "Holiday parties, launches, retreats · COI ready" },
                    { href: "/services/wellness", label: "Wellness & Pilates", description: "Matcha bar with custom-labeled cups" },
                    { href: "/services/backyard", label: "Backyard Parties", description: "Block parties, brunch parties, golden hour" },
                    { href: "/services", label: "View all services →", description: "See every event we pour" },
                ],
            },
        ],
        feature: {
            eyebrow: "Signature Build",
            title: "The Bloom Bar",
            description: "Our custom mobile bar — white slat panels, hand-painted sign, abundant florals. Built by hand, designed to be photographed.",
            href: "/about",
            cta: "See the bar",
            image: IMG.bloomBar,
        },
    },
    {
        kind: "mega",
        label: "Cocktails",
        href: "/cocktails",
        sections: [
            {
                title: "The Menu",
                links: [
                    { href: "/cocktails#brunch", label: "Blooming Brunch", description: "Aperol Spritz · Bloody Mary · Mimosa · Bellini" },
                    { href: "/cocktails#signature", label: "Signature Blooms", description: "Garden Bloom · Rose Petal · Sage Smoke" },
                    { href: "/cocktails#matcha", label: "The Matcha Bar", description: "For Pilates socials & baby showers" },
                    { href: "/cocktails#custom", label: "Custom Menus", description: "We notice the details" },
                ],
            },
            {
                title: "Details",
                links: [
                    { href: "/cocktails", label: "Custom Labels", description: "Initials, themes, brands on every cup" },
                    { href: "/services#dry-hire", label: "Dry Hire Explained", description: "You bring the bottles, we bring the bar" },
                    { href: "/faq", label: "What's Included", description: "Glassware, ice, garnishes, the works" },
                    { href: "/gallery", label: "Cocktail Gallery", description: "See past pours in action" },
                ],
            },
        ],
        feature: {
            eyebrow: "Featured Pour",
            title: "The Garden Bloom",
            description: "Gin, elderflower, muddled cucumber, fresh blossom. The one our hosts request first.",
            href: "/cocktails",
            cta: "View the menu",
            image: IMG.cocktailGarden,
        },
    },
    {
        kind: "mega",
        label: "Packages",
        href: "/packages",
        sections: [
            {
                title: "Tiers",
                links: [
                    { href: "/packages#essential", label: "Essential — from $350", description: "Intimate gatherings, up to 50 guests" },
                    { href: "/packages#premium", label: "Premium — from $550", description: "Our most-loved package · 100 guests" },
                    { href: "/packages#luxe", label: "Luxe — from $850", description: "Show-stopping bar · unlimited guests" },
                ],
            },
            {
                title: "Build Your Quote",
                links: [
                    { href: "/packages#calculator", label: "Quote Calculator", description: "Slide to your event size — instant ballpark" },
                    { href: "/packages#addons", label: "Add-Ons", description: "Champagne tower, mocktail station, more" },
                    { href: "/contact", label: "Custom Proposal", description: "We'll send a tailored package in 48 hours" },
                ],
            },
        ],
        feature: {
            eyebrow: "Most Popular",
            title: "The Premium",
            description: "Two bartenders, 100 guests, custom cocktail menu, elevated bar presentation, day-of coordination.",
            href: "/packages",
            cta: "See what's included",
            image: IMG.cocktailRose,
        },
    },
    {
        kind: "mega",
        label: "About",
        href: "/about",
        sections: [
            {
                title: "Our Story",
                links: [
                    { href: "/about", label: "Two moms, one big dream", description: "How the Bloom Bar came to be" },
                    { href: "/about#values", label: "What We Believe", description: "Personal · creative · reliable" },
                    { href: "/about#certifications", label: "Licensed & Insured", description: "RAMP certified · PA & NJ" },
                ],
            },
            {
                title: "Connect",
                links: [
                    { href: "/gallery", label: "Gallery", description: "Recent events & cocktails" },
                    { href: "/faq", label: "FAQ", description: "Booking, timing, alcohol, all of it" },
                    { href: "https://instagram.com/thebloomingtini", label: "@thebloomingtini", description: "Follow along on Instagram" },
                ],
            },
        ],
        feature: {
            eyebrow: "Behind the Bar",
            title: "Built by hand",
            description: "Late-night conversations, hospitality dreams, and one custom-built bar. Read the full story.",
            href: "/about",
            cta: "Meet the founders",
            image: IMG.whyUs,
        },
    },
    { kind: "link", label: "Gallery", href: "/gallery" },
    { kind: "link", label: "FAQ", href: "/faq" },
];
