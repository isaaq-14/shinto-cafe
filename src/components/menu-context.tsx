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
  const [pending, setPending] = React.useState<string | null>(null);

  const jumpTo = React.useCallback(
    (tabId: string, itemId: string) => {
      const found = findItem(itemId);
      // If the vegetarian filter would hide the dish, switch it off.
      if (veg && found && !hasVegVersion(found.item)) setVeg(false);
      setTab(tabId);
      setPending(itemId);
    },
    [veg],
  );

  // Wait for the target tab to render, then scroll to the item.
  React.useEffect(() => {
    if (!pending) return;
    const el = document.getElementById(pending);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
    const t = window.setTimeout(() => el.classList.remove("flash"), 2400);
    setPending(null);
    return () => window.clearTimeout(t);
  }, [pending, tab, veg]);

  const value = React.useMemo(() => ({ tab, setTab, veg, setVeg, jumpTo }), [tab, veg, jumpTo]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
