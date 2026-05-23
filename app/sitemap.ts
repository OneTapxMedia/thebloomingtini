import type { MetadataRoute } from "next";

const SITE = "https://thebloomingtini.com";

const routes = [
    "",
    "/services",
    "/services/weddings",
    "/services/bridal-showers",
    "/services/baby-showers",
    "/services/corporate",
    "/services/birthdays",
    "/services/wellness",
    "/services/engagement",
    "/services/backyard",
    "/packages",
    "/cocktails",
    "/how-it-works",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return routes.map((path) => ({
        url: `${SITE}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
    }));
}
