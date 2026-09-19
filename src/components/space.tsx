import type { CSSProperties } from "react";

const CHIPS = [
  { label: "Two floors", c: "var(--custard)", r: "-3deg" },
  { label: "First-floor balcony", c: "var(--matcha)", r: "2deg" },
  { label: "Pet friendly", c: "var(--blush)", r: "-1.5deg" },
  { label: "Ramen meets iced coffee", c: "var(--red)", r: "3deg" },
  { label: "Laptop friendly", c: "var(--sand)", r: "-2deg" },
];

export function Space() {
  return (
    <section className="space grid-paper" id="space" aria-labelledby="space-h">
      <div className="wrap space-grid">
        <div>
          <h2 className="display" id="space-h">Come for the ramen, stay for the balcony</h2>
          <p>
            Shinto spreads over two floors in Indiranagar. Head upstairs for the balcony if it&apos;s free. Dogs are welcome, and plenty of people settle in with a laptop and a cold brew.
          </p>
        </div>
        <ul className="chips" aria-label="About the space" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {CHIPS.map((c) => (
            <li key={c.label} className="chip" style={{ "--c": c.c, "--r": c.r } as CSSProperties}>
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
