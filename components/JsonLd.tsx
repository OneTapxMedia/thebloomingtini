/**
 * Reusable schema.org JSON-LD injector.
 * Usage: <JsonLd data={{...}} /> anywhere in the tree.
 * Safe in both server and client components.
 */
export default function JsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            // Stable, sanitized stringify — no user input flows in.
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}
