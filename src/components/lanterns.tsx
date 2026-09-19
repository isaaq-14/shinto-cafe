"use client";

import type { CSSProperties } from "react";

const LANTERNS = [
  { x: "29%", s: 0.9, l: 1.5 },
  { x: "50%", s: 1.15, l: 0.7 },
  { x: "71%", s: 0.95, l: 1.7 },
];

function swing(el: HTMLElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  el.style.animation = "none";
  void el.offsetWidth; // restart the animation
  el.style.animation = "swing 2.6s ease-out";
}

/** Three paper lanterns that drop in on load and swing when poked. */
export function Lanterns() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="glow" cx="50%" cy="55%" r="60%">
            <stop offset="0" stopColor="#FFF6CC" />
            <stop offset=".7" stopColor="#F6DF9A" />
            <stop offset="1" stopColor="#E7BF62" />
          </radialGradient>
          <symbol id="lantern-body" viewBox="0 0 100 124">
            <rect x="36" y="0" width="28" height="8" rx="2" fill="#2A1F14" />
            <ellipse cx="50" cy="64" rx="46" ry="54" fill="url(#glow)" />
            <path d="M6 48 Q50 60 94 48 M4 64 Q50 78 96 64 M6 80 Q50 92 94 80" fill="none" stroke="#B8893A" strokeOpacity=".45" strokeWidth="1.6" />
            <rect x="36" y="114" width="28" height="8" rx="2" fill="#2A1F14" />
          </symbol>
        </defs>
      </svg>
      {LANTERNS.map((l, i) => (
        <button
          key={i}
          type="button"
          className="lantern"
          style={{ "--x": l.x, "--s": l.s, "--l": l.l } as CSSProperties}
          aria-label="Swing the paper lantern"
          onClick={(e) => swing(e.currentTarget)}
          onMouseEnter={(e) => swing(e.currentTarget)}
        >
          <i className="string" />
          <svg viewBox="0 0 100 124" aria-hidden="true">
            <use href="#lantern-body" />
          </svg>
        </button>
      ))}
    </>
  );
}
