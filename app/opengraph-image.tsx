import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#09090B",
          border: "2px solid #27272A",
          position: "relative",
        }}
      >
        {/* Subtle Luxury Outer Ring Border */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            pointerEvents: "none",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "serif",
                fontSize: 42,
                fontWeight: 800,
                letterSpacing: 4,
                color: "#FFFFFF",
              }}
            >
              NIRAJ JEWELLERS
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 6,
                color: "#D4AF37",
                marginTop: 4,
              }}
            >
              HAYES • LONDON • EST. DECADES
            </span>
          </div>

          {/* Monogram Badge */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              border: "1.5px solid #D4AF37",
              backgroundColor: "#141416",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF3D6",
              fontSize: 32,
              fontFamily: "serif",
              fontWeight: 900,
            }}
          >
            NJ
          </div>
        </div>

        {/* Central Hero Statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 10,
            maxWidth: 950,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#D4AF37",
              fontSize: 15,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span>Master Goldsmiths</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>Direct Workshop Pricing</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>London Assay Office</span>
          </div>

          <span
            style={{
              fontFamily: "serif",
              fontSize: 58,
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#F4F4F5",
            }}
          >
            London&apos;s Bespoke Goldsmith Atelier &amp; Gold Wholesaler
          </span>

          <span
            style={{
              fontSize: 22,
              color: "#A1A1AA",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Bespoke 22ct/18ct bridal suites, certified natural diamonds &amp; wholesale bullion by Master Jeweller Viky. 136 Uxbridge Road, Hayes.
          </span>
        </div>

        {/* Bottom Verification Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272A",
            paddingTop: 24,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", gap: 30, fontSize: 15, color: "#D4AF37", fontWeight: 600 }}>
            <span>London Leopard&apos;s Head Hallmarked (916 / 750)</span>
            <span>In-House Hayes Workshop Repairs</span>
            <span>VIP WhatsApp: +44 7955 565137</span>
          </div>

          <span style={{ fontSize: 14, color: "#71717A", letterSpacing: 1 }}>
            nirajjewellers.co.uk
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
