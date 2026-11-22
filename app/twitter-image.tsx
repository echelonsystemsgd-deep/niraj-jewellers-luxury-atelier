import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          backgroundColor: "#FAF9F6",
          border: "2px solid #EADBC8",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle Luxury Outer Ring Border */}
        <div
          style={{
            position: "absolute",
            inset: "16px",
            border: "1px solid rgba(197, 160, 89, 0.35)",
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
            borderBottom: "1px solid #EADBC8",
            paddingBottom: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Monogram Badge */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                border: "1.5px solid #C5A059",
                backgroundColor: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#946A14",
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
                  letterSpacing: 2,
                  color: "#141416",
                }}
              >
                NIRAJ JEWELLERS LTD
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 3.5,
                  color: "#946A14",
                  marginTop: 2,
                }}
              >
                HAYES • LONDON • SINCE 1984 • 42 YEARS OF EXCELLENCE
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
              backgroundColor: "#FFFFFF",
              border: "1px solid #EADBC8",
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
                color: "#141416",
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
            maxWidth: 1040,
            marginTop: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#855F0E",
              fontSize: 12.5,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            <span>Master Goldsmiths</span>
            <span style={{ color: "#C5A059" }}>•</span>
            <span>136 Uxbridge Road</span>
            <span style={{ color: "#C5A059" }}>•</span>
            <span>54-Piece Curated Vault</span>
            <span style={{ color: "#C5A059" }}>•</span>
            <span>London Assay Office</span>
          </div>

          <span
            style={{
              fontFamily: "serif",
              fontSize: 48,
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#141416",
            }}
          >
            London&apos;s Bespoke Goldsmith Atelier &amp; Gold Wholesaler
          </span>

          <span
            style={{
              fontSize: 19,
              color: "#4A4A52",
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            Handcrafted 22ct/18ct bridal suites, certified natural diamonds &amp; live bullion rates since 1984. Complete 54-piece showroom collection on Uxbridge Road, Hayes.
          </span>
        </div>

        {/* Live Gold Bullion Rate Ticker Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            border: "1px solid #EADBC8",
            borderRadius: "12px",
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
                color: "#855F0E",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              LIVE LBMA BULLION
            </span>
          </div>

          <div style={{ display: "flex", gap: 28, fontSize: 14 }}>
            <span style={{ color: "#4A4A52" }}>
              24ct Pure: <strong style={{ color: "#141416" }}>£68.50/g</strong>
            </span>
            <span style={{ color: "#4A4A52" }}>
              22ct Sovereign: <strong style={{ color: "#946A14" }}>£62.80/g</strong>
            </span>
            <span style={{ color: "#4A4A52" }}>
              18ct Fine: <strong style={{ color: "#141416" }}>£51.40/g</strong>
            </span>
          </div>

          <span style={{ fontSize: 13, color: "#10B981", fontWeight: 700 }}>
            WhatsApp: 07955 565137
          </span>
        </div>

        {/* Bottom Verification Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #EADBC8",
            paddingTop: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 12.5,
              color: "#5C5C66",
              fontWeight: 500,
            }}
          >
            <span>London Leopard&apos;s Head Hallmarked (916 / 750)</span>
            <span>•</span>
            <span>In-House Hayes Workshop Repairs</span>
            <span>•</span>
            <span>In-House 3D CAD Bridal Commissions</span>
          </div>

          <span style={{ fontSize: 13, color: "#946A14", letterSpacing: 1, fontWeight: 700 }}>
            www.niraj-jewellers.co.uk
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
