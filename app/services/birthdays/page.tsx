import type { Metadata } from "next";
import EventPageTemplate from "@/components/EventPageTemplate";
import { EVENTS } from "@/lib/events";

const data = EVENTS.birthdays;

export const metadata: Metadata = {
    title: "Birthday Party Bartending | The Blooming Tini",
    description: data.description,
    openGraph: {
        title: data.title,
        description: data.description,
        images: [data.heroImage],
    },
};

export default function BirthdaysPage() {
    return <EventPageTemplate data={data} />;
}
