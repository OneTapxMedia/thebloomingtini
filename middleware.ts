import { NextRequest, NextResponse } from "next/server";

/**
 * Preview access gate.
 *
 * Set PREVIEW_PASSWORD as an environment variable on Vercel
 * (Settings → Environment Variables) to lock the entire site behind
 * HTTP basic auth. Unset/delete the variable to unlock.
 *
 * Optional: also set PREVIEW_USER (defaults to "preview").
 *
 * Assets (logo, fonts, OG image, robots/sitemap) bypass the gate so
 * server-side previews and social cards still render.
 */
export function middleware(req: NextRequest) {
    const expectedPassword = process.env.PREVIEW_PASSWORD;

    // No password configured → site is fully public.
    if (!expectedPassword) {
        return NextResponse.next();
    }

    const expectedUser = process.env.PREVIEW_USER || "preview";

    const auth = req.headers.get("authorization");
    if (auth) {
        const [scheme, encoded] = auth.split(" ");
        if (scheme === "Basic" && encoded) {
            try {
                // Edge runtime: use atob, not Buffer
                const decoded = atob(encoded);
                const idx = decoded.indexOf(":");
                if (idx !== -1) {
                    const user = decoded.slice(0, idx);
                    const password = decoded.slice(idx + 1);
                    if (user === expectedUser && password === expectedPassword) {
                        return NextResponse.next();
                    }
                }
            } catch {
                // fall through to 401
            }
        }
    }

    return new NextResponse(
        "Authentication required — this site is in client preview.",
        {
            status: 401,
            headers: {
                "WWW-Authenticate":
                    'Basic realm="The Blooming Tini — Preview", charset="UTF-8"',
            },
        }
    );
}

export const config = {
    // Apply to every route EXCEPT static assets that need to render
    // for favicons, OG previews, and SEO files.
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|opengraph-image.png|twitter-image.png|robots.txt|sitemap.xml).*)",
    ],
};
