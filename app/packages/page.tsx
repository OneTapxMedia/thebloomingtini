import { Metadata } from "next";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Packages & Pricing | The Blooming Tini",
    description: "View our mobile bartending packages and pricing. Choose from Essential, Premium, or Luxe tiers for your Philadelphia area event.",
};

const packages = [
    {
        name: "Essential",
        price: "Starting at $350",
        priceNote: "for 3 hours",
        description: "Perfect for intimate gatherings and smaller celebrations",
        features: [
            "1 professional bartender",
            "Up to 50 guests",
            "Basic bar setup & breakdown",
            "Standard glassware",
            "Ice and coolers",
            "Fresh mixers and garnishes",
            "Liability insurance",
        ],
    },
    {
        name: "Premium",
        price: "Starting at $550",
        priceNote: "for 4 hours",
        description: "Our most popular package for weddings and special events",
        features: [
            "2 professional bartenders",
            "Up to 100 guests",
            "Elevated bar presentation",
            "Premium glassware",
            "Custom cocktail menu (3 signatures)",
            "Specialty garnishes & ingredients",
            "Day-of coordination",
            "Full liability & liquor insurance",
        ],
        popular: true,
    },
    {
        name: "Luxe",
        price: "Starting at $850",
        priceNote: "for 5 hours",
        description: "The ultimate bar experience for luxury celebrations",
        features: [
            "2-3 professional bartenders",
            "Unlimited guests",
            "Show-stopping bar setup",
            "Crystal glassware upgrade",
            "Unlimited custom cocktails",
            "Expert menu consultation",
            "Champagne tower option",
            "Priority booking & support",
            "Complimentary tastings",
        ],
    },
];

const addons = [
    { name: "Additional Bartender", price: "$150/hour" },
    { name: "Extra Hour of Service", price: "$100/hour" },
    { name: "Champagne Tower Setup", price: "$200" },
    { name: "Custom Cocktail Tastings", price: "$150" },
    { name: "Late Night Service (after 11pm)", price: "$75/hour" },
    { name: "Mocktail Station", price: "$100" },
];

export default function PackagesPage() {
    return (
        <>
            <Hero
                title="Packages & Pricing"
                subtitle="Investment"
                description="Transparent pricing for exceptional service. Choose the package that fits your celebration."
                height="medium"
            />

            {/* Packages */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:-mt-8">
                        {packages.map((pkg, index) => (
                            <PackageCard key={pkg.name} {...pkg} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-pink font-accent text-2xl">Customize</span>
                            <h2 className="mt-2">
                                Add-On <span className="text-pink">Options</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {addons.map((addon) => (
                                <div
                                    key={addon.name}
                                    className="flex justify-between items-center p-4 bg-cream rounded-xl"
                                >
                                    <span className="font-medium text-dark">{addon.name}</span>
                                    <span className="text-pink font-semibold">{addon.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className="py-16 bg-pink">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-white text-xl font-heading mb-6">
                            A Few Things to Know
                        </h3>
                        <ul className="text-white/80 text-left space-y-3 max-w-xl mx-auto">
                            <li className="flex items-start gap-3">
                                <span className="text-gold">✿</span>
                                <span>Prices are estimates — your custom quote may vary based on event details</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold">✿</span>
                                <span>Travel fees may apply for events outside our primary service area</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold">✿</span>
                                <span>All packages require a 50% deposit to secure your date</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold">✿</span>
                                <span>A 20% gratuity is customary but not included in pricing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-cream">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-4">Not Sure Which <span className="text-pink">Package</span>?</h2>
                    <p className="text-muted max-w-xl mx-auto mb-8">
                        Tell us about your event and we&apos;ll recommend the perfect package for your needs and budget.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Get a Custom Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
