import type { CSSProperties } from "react";

const CHIPS = [
  { label: "TEXT", c: "var(--custard)", r: "-3deg" },
  { label: "TEXT", c: "var(--matcha)", r: "2deg" },
  { label: "TEXT", c: "var(--blush)", r: "-1.5deg" },
  { label: "TEXT", c: "var(--red)", r: "3deg" },
  { label: "TEXT", c: "var(--sand)", r: "-2deg" },
];

export function Space() {
  return (
    <section className="space grid-paper" id="space" aria-labelledby="space-h">
      <div className="wrap space-grid">
        <div>
          <h2 className="display" id="space-h">lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
