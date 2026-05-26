import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
    title: "The Menu | Blooming Brunch & Signature Cocktails",
    description:
        "Explore The Blooming Tini's signature menus — Blooming Brunch, custom event pours, matcha & wellness drinks. Every menu is built around your story.",
    alternates: { canonical: "https://thebloomingtini.com/cocktails" },
    openGraph: {
        title: "Signature Cocktails & Brunch Menu",
        description: "Blooming Brunch · Signature Blooms · Matcha Bar — all crafted custom for your event.",
        url: "https://thebloomingtini.com/cocktails",
        images: [IMG.heroFlight],
    },
};

type Cocktail = {
    name: string;
    tagline: string;
    notes: string;
    spec: string;
    image: string;
    family: "Brunch" | "Floral" | "Classic" | "Wellness";
};

const cocktails: Cocktail[] = [
    // Blooming Brunch — their actual menu
    {
        name: "Aperol Spritz",
        tagline: "A bubbly and refreshing Italian classic.",
        notes: "Aperol · prosecco · soda · orange slice",
        spec: "Over ice · brunch-approved · sunset orange",
        image: IMG.cocktailCitrus,
        family: "Brunch",
    },
    {
        name: "Bloody Mary",
        tagline: "Savory, spicy, and perfectly sippable.",
        notes: "Vodka · house Bloody Mary mix · pickled veggie garnish",
        spec: "On the rocks · brunch staple",
        image: IMG.cocktailBerry,
        family: "Brunch",
    },
    {
        name: "Tropical Mimosa",
        tagline: "A sunny, tropical twist on a brunch classic.",
        notes: "Malibu rum · champagne · pineapple juice · grenadine",
        spec: "Served up · golden + pink",
        image: IMG.cocktailChampagneBloom,
        family: "Brunch",
    },
    {
        name: "Peach Bellini",
        tagline: "Sweet and bubbly with a burst of peach.",
        notes: "Prosecco · house peach puree · fresh peach garnish",
        spec: "Served up · the bridal favorite",
        image: IMG.cocktailRose,
        family: "Brunch",
    },
    // Signature blooms
    {
        name: "The Garden Bloom",
        tagline: "Our signature — pretty, herbal, unforgettable.",
        notes: "Gin · elderflower liqueur · muddled cucumber · edible blossom",
        spec: "Served up · garden-fresh · crowd favorite",
        image: IMG.cocktailGarden,
        family: "Floral",
    },
    {
        name: "Rose Petal Martini",
        tagline: "Equal parts pretty and pour-worthy.",
        notes: "Vodka · rose syrup · lychee · prosecco float · petal garnish",
        spec: "Served up · romantic",
        image: IMG.cocktailRose,
        family: "Floral",
    },
    {
        name: "Sage Smoke Old Fashioned",
        tagline: "Smoke show — literally.",
        notes: "Bourbon · maple · orange bitters · burnt sage smoke under cloche",
        spec: "On the rocks · theatrical · table-side",
        image: IMG.cocktailSmoke,
        family: "Classic",
    },
    {
        name: "Espresso Petal",
        tagline: "Late-night magic in a glass.",
        notes: "Vodka · espresso · coffee liqueur · rose · cocoa dust",
        spec: "Served up · for the after-party",
        image: IMG.cocktailEspresso,
        family: "Classic",
    },
    {
        name: "The Tini Martini",
        tagline: "Classic on the surface, ours underneath.",
        notes: "Gin · dry vermouth · house olive brine · twist or olive",
        spec: "Stirred · served up · always cold",
        image: IMG.cocktailMartini,
        family: "Classic",
    },
];

const matchaMenu = [
    {
        name: "Strawberry Soft Life Matcha",
        notes: "Ceremonial matcha · strawberry · oat milk · custom labels",
    },
    {
        name: "Lavender Vanilla Matcha",
        notes: "Ceremonial matcha · lavender syrup · vanilla · oat milk",
    },
    {
        name: "Rose Honey Matcha",
        notes: "Ceremonial matcha · rose · raw honey · oat milk",
    },
];

const families = ["Brunch", "Floral", "Classic", "Wellness"] as const;

export default function CocktailsPage() {
    return (
        <>
            <Hero
                title="The menu"
                subtitle="Where cocktails bloom"
                description="Every event gets a custom menu — built around your story, your colors, and your palate. Here's a glimpse of what's already on the chalkboard."
                backgroundImage={IMG.cocktailRose}
                height="medium"
            />

            {/* Intro / philosophy */}
            <section className="section bg-cream">
                <div className="container-narrow text-center">
                    <span className="eyebrow">Our Philosophy</span>
                    <h2 className="mt-2 mb-6">
                        Fresh flowers, fresh juice, <span className="gradient-text">custom labels for every event</span>
                    </h2>
                    <p className="text-muted leading-relaxed">
                        Every drink starts at the farmers&apos; market — citrus pressed the morning of, blossoms snipped the night before, syrups simmered in our own kitchen. And yes, we&apos;ll print custom labels for your couple&apos;s name, your brand, your shower theme — you can taste the difference, and so can your guests.
                    </p>
                </div>
            </section>

            {/* Blooming Brunch section */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="eyebrow">The Blooming Brunch</span>
                        <h2 className="mt-2">
                            Where brunch cocktails <span className="gradient-text">bloom</span>
                        </h2>
                        <p className="text-muted max-w-xl mx-auto mt-4">
                            Thoughtfully created for brides, best friends, and the moments that deserve something truly special.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cocktails.filter(c => c.family === "Brunch").map((c) => (
                            <article
                                key={c.name}
                                className="group bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={c.image}
                                        alt={c.name}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-heading text-lg text-dark mb-1">{c.name}</h3>
                                    <p className="text-pink text-xs italic mb-2">{c.tagline}</p>
                                    <p className="text-dark/80 text-sm leading-snug mb-2">{c.notes}</p>
                                    <p className="text-[10px] uppercase tracking-wider text-muted">{c.spec}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Signature blooms */}
            <section className="section bg-mist">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="eyebrow">Signature Blooms</span>
                        <h2 className="mt-2">
                            Cocktails that <span className="gradient-text">photograph</span> as well as they taste
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cocktails.filter(c => c.family !== "Brunch").map((c) => (
                            <article
                                key={c.name}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={c.image}
                                        alt={c.name}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-dark/75 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider rounded-full">
                                        {c.family}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-heading text-xl text-dark mb-1">{c.name}</h3>
                                    <p className="text-pink text-sm italic mb-3">{c.tagline}</p>
                                    <p className="text-dark/80 text-sm leading-relaxed mb-3">{c.notes}</p>
                                    <p className="text-xs uppercase tracking-wider text-muted">{c.spec}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Matcha / Wellness Bar */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
                        <div>
                            <span className="eyebrow">The Matcha Bar</span>
                            <h2 className="mt-2 mb-6">
                                For wellness events, <span className="gradient-text">Pilates socials</span>, &amp; baby showers
                            </h2>
                            <p className="text-muted leading-relaxed mb-6">
                                Not every celebration calls for a cocktail. Our ceremonial matcha bar serves whipped, layered, custom-labeled lattes that look as good as they taste — and they&apos;re always toddler-approved.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {matchaMenu.map((m) => (
                                    <li key={m.name} className="flex items-start gap-3">
                                        <span className="text-pink mt-1">✦</span>
                                        <div>
                                            <p className="font-medium text-dark">{m.name}</p>
                                            <p className="text-sm text-muted">{m.notes}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="btn btn-primary">
                                Book the matcha bar
                            </Link>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={IMG.matchaLatte}
                                alt="Custom-labeled Soft Life Social matcha latte on a vintage pink iridescent cake stand"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Families summary strip */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {families.map((f) => (
                            <div key={f} className="bg-cream rounded-2xl p-5 text-center shadow-sm">
                                <p className="text-pink font-heading text-2xl mb-1">
                                    {f === "Wellness" ? matchaMenu.length : cocktails.filter((c) => c.family === f).length}
                                </p>
                                <p className="text-xs uppercase tracking-wider text-muted">{f}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-cream">
                <div className="container-narrow text-center">
                    <span className="eyebrow">Build Your Menu</span>
                    <h2 className="mt-2 mb-6">
                        Ready to design <span className="gradient-text">your signature pour</span>?
                    </h2>
                    <p className="text-muted mb-8 leading-relaxed">
                        Tell us your event details and we&apos;ll send a custom menu mockup — usually within 48 hours of your inquiry.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Start your menu
                    </Link>
                </div>
            </section>
        </>
    );
}
