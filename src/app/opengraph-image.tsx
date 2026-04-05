import { ImageResponse } from "next/og";

export const alt = "The Agile Project — Agile, Fintech & Trading Platform Delivery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#0ea5e9",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
            }}
          >
            AP
          </div>
          <span style={{ color: "#94a3b8", fontSize: "24px", fontWeight: 600 }}>
            The Agile Project
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Delivering Software That Moves Markets
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            maxWidth: "700px",
          }}
        >
          Agile Project Management · Fintech · Trading Platforms
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: "20px",
            color: "#64748b",
          }}
        >
          theagileproject.com — By Sujit Kumar Thakur
        </div>
      </div>
    ),
    { ...size }
  );
}
