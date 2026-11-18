import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090B",
          borderRadius: 6,
          border: "1.5px solid #D4AF37",
          color: "#D4AF37",
          fontWeight: 800,
          fontSize: 16,
          fontFamily: "serif",
          letterSpacing: "-0.5px",
        }}
      >
        NJ
      </div>
    ),
    { ...size }
  );
}
