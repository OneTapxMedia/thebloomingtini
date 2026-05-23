import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Minimal server-side sanity check
        if (!body?.name || !body?.email || !body?.eventType) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        // In production, send via Resend/SendGrid here.
        // For now, log so the deployment can capture via Vercel logs while the
        // owner wires up an email provider — the client also falls back to mailto.
        console.log("[contact] new inquiry", {
            ...body,
            receivedAt: new Date().toISOString(),
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("[contact] error", err);
        return NextResponse.json(
            { ok: false, error: "Server error" },
            { status: 500 }
        );
    }
}
