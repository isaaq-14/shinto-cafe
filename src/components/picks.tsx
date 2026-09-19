"use client";

import type { CSSProperties } from "react";
import { PICKS } from "@/data/picks";
import { useMenu } from "@/components/menu-context";

export function Picks() {
  const { jumpTo } = useMenu();
  return (
    <section className="picks grid-paper" id="picks" aria-labelledby="picks-h">
      <div className="wrap">
        <h2 className="display" id="picks-h">First-timers start here</h2>
        <p className="lead">Five dishes that get talked about most. Tap one to jump to it on the menu.</p>
        <div className="picks-grid">
          {PICKS.map((p) => (
            <button
              key={p.itemId}
              type="button"
              className={`tile${p.big ? " big" : ""}`}
              style={{ "--tile": p.tile } as CSSProperties}
              aria-label={`${p.title}, ${p.price}. See on the menu.`}
              onClick={() => jumpTo(p.tab, p.itemId)}
            >
              <span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </span>
              <span className="price-sticker">
                {p.price.startsWith("from ") ? (
                  <>
                    from
                    <br />
                    {p.price.slice(5)}
                  </>
                ) : (
                  p.price
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
