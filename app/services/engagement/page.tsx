import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS.engagement;

export const metadata: Metadata = {
    title: "Engagement Party Bartending | The Blooming Tini",
    description: data.description,
    openGraph: {
        title: data.title,
        description: data.description,
        images: [data.heroImage],
    },
};

export default function EngagementPage() {
    return <EventPageTemplate data={data} />;
}
