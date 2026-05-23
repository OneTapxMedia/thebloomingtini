import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Blooming Tini — Mobile Bartending Philadelphia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(135deg, #2C2C2C 0%, #8E5C7D 55%, #D291BC 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "80px",
                    fontFamily: "Georgia, serif",
                    color: "white",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        fontSize: 44,
                        fontStyle: "italic",
                        color: "#E8B4D4",
                        marginBottom: 8,
                        display: "flex",
                    }}
                >
                    Where Celebrations Bloom
                </div>
                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 600,
                        textAlign: "center",
                        letterSpacing: -2,
                        lineHeight: 1.05,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <span>The Blooming Tini</span>
                </div>
                <div
                    style={{
                        marginTop: 28,
                        fontSize: 28,
                        color: "rgba(255,255,255,0.85)",
                        display: "flex",
                    }}
                >
                    Mobile Bartending · Philadelphia · Bensalem · Bucks County
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: 48,
                        left: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 20,
                        color: "#D4B56A",
                        letterSpacing: 6,
                        textTransform: "uppercase",
                    }}
                >
                    Licensed · Insured · RAMP Certified
                </div>
            </div>
        ),
        { ...size }
    );
}
