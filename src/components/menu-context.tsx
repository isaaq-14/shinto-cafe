"use client";

import * as React from "react";
import { MENU, findItem, hasVegVersion } from "@/data/menu";

type MenuState = {
  tab: string;
  setTab: (id: string) => void;
  veg: boolean;
  setVeg: (on: boolean) => void;
  /** Switch to the item's tab, scroll to it and highlight it. */
  jumpTo: (tabId: string, itemId: string) => void;
};

const MenuContext = React.createContext<MenuState | null>(null);

export function useMenu() {
  const ctx = React.useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used inside <MenuProvider>");
  return ctx;
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [tab, setTab] = React.useState(MENU[0].id);
  const [veg, setVeg] = React.useState(false);
  // An object (not a string) so clicking the same tile twice still re-triggers the effect.
  const [pending, setPending] = React.useState<{ id: string } | null>(null);

  const jumpTo = React.useCallback(
    (tabId: string, itemId: string) => {
      const found = findItem(itemId);
      // If the vegetarian filter would hide the dish, switch it off.
      if (veg && found && !hasVegVersion(found.item)) setVeg(false);
      setTab(tabId);
      setPending({ id: itemId });
    },
    [veg],
  );

  // Scroll to the dish once it is actually on screen. The newly selected tab's content can
  // mount a frame later than the state change, so poll briefly instead of looking only once.
  React.useEffect(() => {
    if (!pending) return;
    let raf = 0;
    let frames = 0;
    let cancelled = false;

    const attempt = () => {
      if (cancelled) return;
      const el = document.getElementById(pending.id);
      const displayed = !!el && el.getClientRects().length > 0;
      if (!el || !displayed) {
        if (frames++ < 90) raf = requestAnimationFrame(attempt); // give up after ~1.5s
        else setPending(null);
        return;
      }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      el.classList.remove("flash");
      void el.offsetWidth; // restart the highlight animation
      el.classList.add("flash");
      // Remove the highlight however the animation ends (finished, cancelled because the tab was
      // hidden, or disabled by reduced-motion) so it can never replay later.
      const clear = () => el.classList.remove("flash");
      el.addEventListener("animationend", clear, { once: true });
      el.addEventListener("animationcancel", clear, { once: true });
      window.setTimeout(clear, 2600);
      setPending(null);
    };

    attempt();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [pending]);

  const value = React.useMemo(() => ({ tab, setTab, veg, setVeg, jumpTo }), [tab, veg, jumpTo]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
