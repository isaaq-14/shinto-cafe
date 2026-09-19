import { ImageResponse } from "next/og";
import { LOGO_PATH, LOGO_VIEWBOX, LOGO_ASPECT } from "@/data/logo";

export const alt = "Shinto, Asian café and coffee bar in Indiranagar, Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const h = 380;
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
          background: "#0F4A1C",
          color: "#F1E9D2",
        }}
      >
        <svg width={h * LOGO_ASPECT} height={h} viewBox={LOGO_VIEWBOX}>
          <path fill="#F1E9D2" fillRule="evenodd" d={LOGO_PATH} />
        </svg>
        <div style={{ marginTop: 28, fontSize: 38, color: "#9BCB4A", fontWeight: 700 }}>
          Ramen, sandos, matcha and cold brew in Indiranagar
        </div>
      </div>
    ),
    { ...size },
  );
}
