import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS["baby-showers"];

export const metadata: Metadata = {
    title: "Baby Shower Mocktails | The Blooming Tini",
    description: data.description,
    openGraph: {
        title: data.title,
        description: data.description,
        images: [data.heroImage],
    },
};

export default function BabyShowersPage() {
    return <EventPageTemplate data={data} />;
}
