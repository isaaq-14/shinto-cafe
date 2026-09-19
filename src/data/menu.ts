/**
 * The full menu. Edit this file (or replace it with a CMS fetch) and the site updates.
 *
 * diet: "v" vegetarian, "e" contains egg, "nv" non-vegetarian.
 * `dots: false` on a section hides diet markers (used for drinks).
 * TODO(owner): confirm every price and diet marker against the printed menu.
 */

export type Diet = "v" | "e" | "nv";

export type Variant = { name: string; price: number; diet: Diet };

export type MenuItem = {
  id: string;
  name: string;
  price?: number;
  description?: string;
  diet?: Diet;
  spicy?: boolean;
  /** Extra line shown in bold under the description, e.g. add-on prices. */
  extra?: string;
  variants?: Variant[];
};

export type MenuSection = {
  title: string;
  note?: string;
  dots: boolean;
  addon?: string;
  items: MenuItem[];
};

export type MenuTab = { id: string; label: string; sections: MenuSection[] };

export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* ---------- tiny builders keep the data below readable ---------- */
const v = (name: string, price: number, diet: Diet): Variant => ({ name, price, diet });

const item = (
  name: string,
  price: number,
  description: string,
  diet: Diet = "v",
  o: Partial<MenuItem> = {},
): MenuItem => ({ id: slug(name), name, price, description, diet, ...o });

const withVariants = (
  name: string,
  description: string,
  variants: Variant[],
  o: Partial<MenuItem> = {},
): MenuItem => ({ id: slug(name), name, description, variants, ...o });

const MILK = "Oat, almond, lactose-free or coconut milk +₹80. Flavor of choice +₹60.";

export const MENU: MenuTab[] = [
  {
    id: "mains",
    label: "Mains & ramen",
    sections: [
      {
        title: "Mains",
        dots: true,
        items: [
          item("Nasi Goreng", 625, "Indonesian hearty meal with pineapple prawn fried rice. Side of egg, salad and fryums.", "nv"),
          withVariants("Japanese Teriyaki Don", "Jasmine rice served with teriyaki gravy.", [v("Eggplant and mushroom", 520, "v"), v("Chicken", 550, "nv")]),
          withVariants("Red Thai Wonton Soup", "Wontons in a rich coconutty red Thai soup.", [v("Tofu", 490, "v"), v("Chicken", 535, "nv")]),
          item("Katsu Veloute", 600, "Chicken katsu over mushroom veloute sauce, with a side salad.", "nv"),
          item("Grilled Chicken in Peanut Satay Sauce", 600, "Served with pickled vegetables.", "nv"),
        ],
      },
      {
        title: "Ramen",
        dots: true,
        items: [
          withVariants("Kimchi Ramen", "Funky house-made kimchi broth with corn and bok choy, topped with a boiled egg and sesame.", [v("Tofu", 640, "v"), v("Chicken", 680, "nv")], { spicy: true }),
          withVariants("Miso Chilli Ramen", "Umami miso broth with corn, bok choy and mushroom, topped with a boiled egg and sesame, drizzled with house chilli oil.", [v("Mushroom", 640, "v"), v("Chicken", 680, "nv")]),
        ],
      },
    ],
  },
  {
    id: "sandos",
    label: "Sandos & noodles",
    sections: [
      {
        title: "Sandwiches",
        dots: true,
        items: [
          item("Kung Pao Sando", 550, "Crispy chicken in kung pao sauce, crunchy peanuts, in toasted Hokkaido milk bread.", "nv"),
          withVariants("Kimcheese Sando", "House-made kimchi with 3 cheeses in toasted Hokkaido milk bread.", [v("Classic", 480, "v"), v("Chicken", 525, "nv")]),
          item("Red Purple Melt", 525, "Adzuki bean and beetroot patty, sun-dried tomato, caramelized onion, in-house basil garlic aioli, pesto and cheese, served in multigrain sourdough."),
          withVariants("Banh Mi EQ", "Our take on the Vietnamese classic: minced spiced protein, pickled vegetables, basil pesto and house chilli mayo, served in a baguette.", [v("Tofu", 480, "v"), v("Chicken", 525, "nv")]),
          item("Tamago Ham EQ Sando", 480, "Egg salad, kewpie mayo with a hint of mustard, caramelized onions in Hokkaido milk bread.", "e", { extra: "Add ham +₹100" }),
        ],
      },
      {
        title: "Noodles",
        dots: true,
        addon: "Egg +₹60. Chicken +₹80. Prawns +₹100.",
        items: [
          item("Drunken Noodles", 525, "Flat noodles made with Thai basil and veggies in a spicy, tangy sauce, with peanuts on top."),
          item("Tempeh Dandan Noodles", 525, "Noodles in Sichuan pepper, hoisin sauce and chilli bean sauce, topped with tempeh keema.", "v", { spicy: true }),
        ],
      },
    ],
  },
  {
    id: "bites",
    label: "Bites",
    sections: [
      {
        title: "Shinto bites",
        dots: true,
        items: [
          item("Okonomiyaki", 360, "Japan's crispy pancake with cabbage, carrots and scallions, topped with kewpie mayo and okonomiyaki sauce.", "v", { extra: "Add egg +₹60 or chicken +₹80" }),
          withVariants("Japanese Karaage", "Fried bite-sized Japanese street-style snack.", [v("Chicken", 340, "nv"), v("Prawn", 370, "nv"), v("Veg", 270, "v")]),
          item("Demonslayer's Potato Mochi", 250, "Soy-glazed potato mochi with a gooey, cheesy filling."),
          withVariants("Japanese Street Style Gyoza", "Gyoza with in-house crispy garlic dip.", [v("Lotus stem", 350, "v"), v("Chicken", 350, "nv")]),
          item("Osaka Fries", 290, "Fries drizzled with okonomiyaki sauce, with a side of kewpie mayo."),
          item("Loaded Hash", 360, "Hashbrowns topped with garlic basil sour cream, guac, feta cheese and cherry tomatoes."),
          item("Avo Mushroom Tacos", 360, "Taco with mushroom in black bean sauce, guac, garlic sour cream, salsa, pickled vegetables and chilli crisps."),
        ],
      },
    ],
  },
  {
    id: "toasts",
    label: "Breakfast & toasts",
    sections: [
      {
        title: "All-day egg breakfast",
        dots: true,
        items: [
          withVariants("Omelettes", "", [v("Classic", 350, "e"), v("Mushroom", 380, "e")]),
          item("Teriyaki Lahsa", 390, "Creamy Yemeni eggs in Asian teriyaki sauce with a fried egg on top, served with tortilla.", "e"),
          item("Sriracha Butter Garlic Eggs", 350, "Sunny side up over sriracha, crispy caramelized onions and in-house garlic chilli oil.", "e"),
        ],
      },
      {
        title: "Loaded sourdough toasts",
        dots: true,
        addon: "Egg +₹60.",
        items: [
          item("Chilli Orange Avo", 390, "Guac, spiced orange and sundried tomatoes on multigrain sourdough."),
          item("Miso Creamcheese Avo Toast", 390, "Sliced avocado, miso cream cheese and pickled vegetables on multigrain sourdough."),
          item("Mushroom Toast", 390, "Smooth mushroom cream, sautéed mushrooms and sour cream on multigrain sourdough."),
          item("Drunken Egg Toast", 390, "Smashed Korean mayak egg toast with chive cream cheese over multigrain sourdough.", "e"),
        ],
      },
      {
        title: "Sweet toasts",
        dots: true,
        note: "Hong Kong style French toast: soft French toast with the filling inside and cream on top.",
        addon: "Ice cream scoop +₹60.",
        items: [
          item("The Bounty", 420, "Chocolate coconut, peanut butter filling.", "e"),
          item("CB&B", 420, "Cashew cream and blueberries, with cashew butter filling.", "e"),
          item("Pan-coco-dan", 420, "Pandan vanilla cream, with coconut kaya filling.", "e"),
          item("Red Adzuki", 420, "Japanese red bean (adzuki) filling, topped with vanilla cream.", "e"),
          item("Hot Chocolate French Toast", 460, "Nutella filling, topped with marshmallow and hot chocolate sauce.", "e"),
          item("Honey Miso Coconut Toast", 460, "Hokkaido milk toast caramelised with coconut sugar, miso and honey, topped with coconut ice cream, drizzled with honey and coconut sugar."),
        ],
      },
    ],
  },
  {
    id: "bakes",
    label: "Bakes & desserts",
    sections: [
      {
        title: "Cookies and tea cakes",
        dots: true,
        items: [
          item("Midnight Miso Melt Cookie", 220, "Brown butter miso cookie with chocolate and caramel chunks."),
          item("White Chocolate Cranberry Cookie", 220, "With white chocolate chunks and dried cranberries."),
          item("Chocolate Toasted Banana Bread", 290, "Toasted banana bread topped with chocolate ganache."),
          item("Orange Coffee Cake", 290, "Tea cake slice topped with orange cream."),
        ],
      },
      {
        title: "Dessert",
        dots: true,
        items: [
          item("Milo Tres Leches", 390, "Tres leches with a Milo twist."),
          item("Crookie Brookie Sundae", 480, "Gooey brookies topped with vanilla ice cream, cookie crumbs, house caramel sauce and hot chocolate sauce."),
          item("Citrus Cream Berry Croissant", 450, "Butter-toasted croissant filled with house seasonal berry compote and orange mascarpone cream."),
        ],
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee",
    sections: [
      {
        title: "Cold coffee",
        dots: false,
        addon: MILK,
        items: [
          item("House Cold Coffee", 330, "A chilled, bold coffee with a smooth, rich flavor, served over ice."),
          item("Cold Coffee Pro", 390, "Gymbro special! Cold coffee spiked with rich peanut butter and whey protein."),
        ],
      },
      {
        title: "Cold brews",
        dots: false,
        note: "18-hour cold brew from a medium dark roast, Ratnagiri estate (Ratnagiri AAA). Notes of toffee, clove and blackcurrant.",
        items: [
          item("Virgin Cold Brew", 290, "Funky cold brew served over ice."),
          item("Gin(ger) Tonic Brew", 330, "Cold brew, fresh lemongrass, ginger concentrate and fizz."),
          item("Tropical Cold Brew Fizz", 350, "Twisted piña colada: pineapple in coconut water, with a twist of yuzu in cold brew."),
          item("Cold Brew Sour", 350, "Cold brew's take on the classic whiskey sour."),
        ],
      },
      {
        title: "Cold brews with cream foam",
        dots: false,
        items: [
          item("Nutty Butter Cold Brew", 360, "Cold brew spiked with hazelnut, topped with brown butter cold foam."),
          item("Ca Phe Trung", 360, "Our version of Vietnamese Hanoi-style iced coffee: cold brew topped with rich egg custard."),
          item("Mont Blanc", 360, "Cold brew with vanilla brown sugar concentrate, topped with zesty orange foam."),
        ],
      },
    ],
  },
  {
    id: "matcha",
    label: "Matcha & hojicha",
    sections: [
      {
        title: "Matcha",
        dots: false,
        addon: MILK,
        items: [
          item("Matcha Latte (hot or iced)", 360, "Classic matcha latte with ceremonial matcha and milk of choice."),
          item("Mango Strawberry Matcha (iced)", 390, "Mango milk, topped with matcha and strawberry foam."),
          item("Blueberry Cheesecake Matcha (iced)", 390, "Blueberry milk topped with matcha, cream cheese foam and butter cookie crumbs."),
          item("Lotus Biscoff Matcha (iced)", 390, "Biscoff milk, matcha, Biscoff foam and cookie."),
          item("Peach Coconut Matcha Cloud (iced)", 380, "Matcha cloud over peachy coconut water."),
          item("Matchagato", 380, "Vanilla ice cream topped with freshly whisked matcha."),
        ],
      },
      {
        title: "Hojicha",
        dots: false,
        items: [
          item("Hojicha Latte (hot or iced)", 330, "Classic latte with hojicha and milk of choice.", "v", { extra: "Suggested add-ons: hazelnut, vanilla" }),
          item("Sesame Cloud Hojicha (iced)", 390, "Hojicha in milk topped with black sesame cold foam."),
          item("Nutty Toffee Hojicha (iced)", 360, "Hojicha in milk with a nutty toffee undertone."),
        ],
      },
    ],
  },
  {
    id: "frappes",
    label: "Frappes & mocktails",
    sections: [
      {
        title: "Hot chocolate",
        dots: false,
        items: [
          item("Regular", 350, ""),
          item("Orange", 380, "Fresh orange zest for the balance. House favourite."),
          item("Miso", 380, "Umami, savoury miso for the balance."),
        ],
      },
      {
        title: "Frappes and smoothies",
        dots: false,
        items: [
          item("Mango Sticky Rice Frappe", 380, "Thailand's favourite: mango sticky rice in a glass, with mango pulp, coconut milk and sticky rice chunks."),
          item("Strawberry Milo Frappe", 380, "Milo frappe topped with strawberry cream."),
          item("Hot Girl Smoothie", 390, "Blueberries, banana, collagen, yogurt, honey, chia seeds and milk of choice."),
        ],
      },
      {
        title: "Mocktails",
        dots: false,
        items: [
          item("Jamun Cranberry Gingerale", 330, "Spiced jamun with cranberry juice, topped with in-house gingerale and fizz."),
          item("Lemongrass Citrus Breeze", 330, "Lemongrass with litchi juice, with a twist of orange."),
          item("Mango Coconut Kult", 330, "Tangy blend of Yakult, juicy mango, coconut milk and fresh basil."),
        ],
      },
    ],
  },
];

/* ---------- helpers ---------- */
export function findItem(itemId: string): { tab: MenuTab; item: MenuItem } | undefined {
  for (const tab of MENU)
    for (const sec of tab.sections) {
      const found = sec.items.find((i) => i.id === itemId);
      if (found) return { tab, item: found };
    }
}

/** True when at least one orderable version of the item is vegetarian. */
export function hasVegVersion(i: MenuItem): boolean {
  return i.variants ? i.variants.some((x) => x.diet === "v") : i.diet === "v";
}

/** Returns the item as it should appear under the "vegetarian only" filter, or null. */
export function vegOnly(i: MenuItem): MenuItem | null {
  if (i.variants) {
    const variants = i.variants.filter((x) => x.diet === "v");
    return variants.length ? { ...i, variants } : null;
  }
  return i.diet === "v" ? i : null;
}
