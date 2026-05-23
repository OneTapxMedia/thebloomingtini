import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS.corporate;

export const metadata: Metadata = {
    title: "Corporate Event Bartending Philadelphia | The Blooming Tini",
    description: data.description,
    openGraph: {
        title: data.title,
        description: data.description,
        images: [data.heroImage],
    },
};

export default function CorporatePage() {
    return <EventPageTemplate data={data} />;
}
