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
          padding: "48px 56px",
          backgroundColor: "#09090B",
          border: "2px solid #27272A",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle Luxury Outer Ring Border */}
        <div
          style={{
            position: "absolute",
            inset: "16px",
            border: "1px solid rgba(212, 175, 55, 0.25)",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />

        {/* Top Header Row / Navbar Snapshot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
            borderBottom: "1px solid #27272A",
            paddingBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Monogram Badge */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                border: "1.5px solid #D4AF37",
                backgroundColor: "#141416",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF3D6",
                fontSize: 24,
                fontFamily: "serif",
                fontWeight: 900,
              }}
            >
              NJ
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "serif",
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                  color: "#FFFFFF",
                }}
              >
                NIRAJ JEWELLERS
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 4,
                  color: "#D4AF37",
                  marginTop: 2,
                }}
              >
                HAYES • LONDON • EST. DECADES
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 18px",
              borderRadius: "20px",
              backgroundColor: "#141416",
              border: "1px solid rgba(212, 175, 55, 0.35)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span
              style={{
                color: "#E4E4E7",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Open Today 11am – 5pm • Hayes Workshop
            </span>
          </div>
        </div>

        {/* Central Hero Statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            zIndex: 10,
            maxWidth: 1020,
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#D4AF37",
              fontSize: 13,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span>Master Goldsmiths</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>136 Uxbridge Road</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>Direct Workshop Pricing</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>London Assay Office</span>
          </div>

          <span
            style={{
              fontFamily: "serif",
              fontSize: 52,
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#F4F4F5",
            }}
          >
            London&apos;s Bespoke Goldsmith Atelier &amp; Gold Wholesaler
          </span>

          <span
            style={{
              fontSize: 20,
              color: "#A1A1AA",
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            Handcrafted 22ct/18ct bridal suites, certified diamond rings &amp; live bullion rates by Niraj Jewellers Ltd. In-house Hayes workshop with zero retail markups.
          </span>
        </div>

        {/* Live Gold Bullion Rate Ticker Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#141416",
            border: "1px solid #27272A",
            borderRadius: "10px",
            padding: "14px 24px",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span
              style={{
                color: "#D4AF37",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              LIVE LBMA BULLION
            </span>
          </div>

          <div style={{ display: "flex", gap: 28, fontSize: 14 }}>
            <span style={{ color: "#E4E4E7" }}>
              24ct Pure: <strong style={{ color: "#FFF3D6" }}>£68.50/g</strong>
            </span>
            <span style={{ color: "#E4E4E7" }}>
              22ct Sovereign: <strong style={{ color: "#D4AF37" }}>£62.80/g</strong>
            </span>
            <span style={{ color: "#E4E4E7" }}>
              18ct Fine: <strong style={{ color: "#FFF3D6" }}>£51.40/g</strong>
            </span>
          </div>

          <span style={{ fontSize: 13, color: "#10B981", fontWeight: 700 }}>
            WhatsApp VIP: +44 7955 565137
          </span>
        </div>

        {/* Bottom Verification Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272A",
            paddingTop: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 13,
              color: "#A1A1AA",
              fontWeight: 500,
            }}
          >
            <span>London Leopard&apos;s Head Hallmarked (916 / 750)</span>
            <span>•</span>
            <span>In-House Hayes Workshop Repairs</span>
            <span>•</span>
            <span>3D CAD Bridal Commissions</span>
          </div>

          <span style={{ fontSize: 13, color: "#D4AF37", letterSpacing: 1, fontWeight: 600 }}>
            nirajjewellers.co.uk
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
