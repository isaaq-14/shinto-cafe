"use client";

import { MENU, vegOnly, type Diet, type MenuItem, type MenuSection as Section } from "@/data/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useMenu } from "@/components/menu-context";

const DIET_LABEL: Record<Diet, string> = {
  v: "Vegetarian",
  e: "Contains egg",
  nv: "Non-vegetarian",
};

function DietDot({ diet }: { diet: Diet }) {
  return <i className={`dot ${diet}`} role="img" aria-label={DIET_LABEL[diet]} title={DIET_LABEL[diet]} />;
}

function ItemRow({ item, dots }: { item: MenuItem; dots: boolean }) {
  return (
    <li className="item" id={item.id}>
      <div className="item-head">
        {dots && item.diet && <DietDot diet={item.diet} />}
        <h4>{item.name}</h4>
        {item.spicy && <Badge className="spicy">spicy</Badge>}
        {item.price != null && <span className="price">₹{item.price}</span>}
      </div>
      {item.description && <p className="desc">{item.description}</p>}
      {item.extra && <p className="desc extra">{item.extra}</p>}
      {item.variants && (
        <ul className="vars">
          {item.variants.map((v) => (
            <li key={v.name}>
              {dots && <DietDot diet={v.diet} />}
              {v.name} <b>₹{v.price}</b>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function SectionBlock({ section, veg }: { section: Section; veg: boolean }) {
  const items = veg ? section.items.map(vegOnly).filter((i): i is MenuItem => i !== null) : section.items;
  if (!items.length) return null;
  return (
    <div className="sec">
      <h3>{section.title}</h3>
      {section.note && <p className="sec-note">{section.note}</p>}
      <ul className="items">
        {items.map((i) => (
          <ItemRow key={i.id} item={i} dots={section.dots} />
        ))}
      </ul>
      {section.addon && (
        <p className="addon">
          <b>Add-on</b>
          {section.addon}
        </p>
      )}
    </div>
  );
}

export function MenuSection() {
  const { tab, setTab, veg, setVeg } = useMenu();
  return (
    <section className="menu on-green" id="menu" aria-labelledby="menu-h">
      <div className="wrap">
        <div className="menu-head">
          <div>
            <h2 className="display" id="menu-h">The menu</h2>
            <p>Food and coffee, all day. Brewtifully Asian.</p>
          </div>
          <div className="filters">
            <label className="inline-flex cursor-pointer items-center gap-2.5 font-semibold">
              <Switch checked={veg} onCheckedChange={setVeg} />
              Vegetarian only
            </label>
            <div className="legend" aria-label="Dietary key">
              <span><i className="dot v" />Veg</span>
              <span><i className="dot e" />Egg</span>
              <span><i className="dot nv" />Non-veg</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <div className="tabs-bar">
          <div className="wrap">
            <TabsList className="tabs" aria-label="Menu categories">
              {MENU.map((t) => (
                <TabsTrigger key={t.id} value={t.id}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        <div className="wrap">
          {MENU.map((t) => (
            <TabsContent key={t.id} value={t.id}>
              {t.sections.map((s) => (
                <SectionBlock key={s.title} section={s} veg={veg} />
              ))}
            </TabsContent>
          ))}
          <p className="menu-foot">Menu and prices can change. Please ask at the counter if you have a dietary question.</p>
        </div>
      </Tabs>
    </section>
  );
}
