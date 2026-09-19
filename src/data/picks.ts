import { slug } from "./menu";

/** "First-timers start here" tiles. `tab` and `itemId` must exist in menu.ts. */
export type Pick = {
  tab: string;
  itemId: string;
  title: string;
  description: string;
  price: string;
  /** CSS colour token for the tile background. */
  tile: string;
  big?: boolean;
};

export const PICKS: Pick[] = [
  { tab: "sandos", itemId: slug("Kung Pao Sando"), title: "Kung Pao Sando", description: "Crispy chicken, kung pao sauce and peanuts in toasted Hokkaido milk bread.", price: "₹550", tile: "var(--red)", big: true },
  { tab: "mains", itemId: slug("Miso Chilli Ramen"), title: "Miso Chilli Ramen", description: "Umami miso broth, corn, bok choy and house chilli oil.", price: "from ₹640", tile: "var(--custard)" },
  { tab: "coffee", itemId: slug("Ca Phe Trung"), title: "Ca Phe Trung", description: "Cold brew under a rich egg custard, Hanoi style.", price: "₹360", tile: "var(--matcha)" },
  { tab: "bites", itemId: slug("Demonslayer's Potato Mochi"), title: "Demonslayer's Potato Mochi", description: "Soy-glazed, with a gooey cheesy middle.", price: "₹250", tile: "var(--blush)" },
  { tab: "toasts", itemId: slug("Red Adzuki"), title: "Red Adzuki French Toast", description: "Japanese red bean filling with vanilla cream on top.", price: "₹420", tile: "var(--sand)" },
];
