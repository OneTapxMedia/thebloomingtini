import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS.engagement;

export const metadata: Metadata = {
    title: "Engagement Party Bartending | The Blooming Tini",
    description: data.description,
    alternates: { canonical: `https://thebloomingtini.com/services/${data.slug}` },
    openGraph: {
        title: data.title,
        description: data.description,
        url: `https://thebloomingtini.com/services/${data.slug}`,
        images: [data.heroImage],
    },
};

export default function EngagementPage() {
    return <EventPageTemplate data={data} />;
}
