import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS["bridal-showers"];

export const metadata: Metadata = {
    title: "Bridal Shower Bartending | The Blooming Tini",
    description: data.description,
    openGraph: {
        title: data.title,
        description: data.description,
        images: [data.heroImage],
    },
};

export default function BridalShowersPage() {
    return <EventPageTemplate data={data} />;
}
