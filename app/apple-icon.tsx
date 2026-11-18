import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090B",
          borderRadius: 36,
          border: "2.5px solid #D4AF37",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" style={{ marginBottom: 4 }}>
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        <div
          style={{
            color: "#FFF3D6",
            fontWeight: 900,
            fontSize: 74,
            fontFamily: "serif",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          NJ
        </div>
        <div
          style={{
            color: "#D4AF37",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 4,
            marginTop: 6,
          }}
        >
          NIRAJ
        </div>
      </div>
    ),
    { ...size }
  );
}
