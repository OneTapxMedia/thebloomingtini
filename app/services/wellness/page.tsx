import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS.wellness;

export const metadata: Metadata = {
    title: "Matcha Bar & Wellness Event Catering | The Blooming Tini",
    description: data.description,
    openGraph: {
        title: data.title,
        description: data.description,
        images: [data.heroImage],
    },
};

export default function WellnessPage() {
    return <EventPageTemplate data={data} />;
}
