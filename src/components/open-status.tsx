"use client";

import * as React from "react";
import { site } from "@/data/site";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const fmt = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  const hour = ((h + 11) % 12) + 1;
  return `${hour}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h >= 12 ? "pm" : "am"}`;
};

function compute(): { open: boolean; text: string } {
  // Current time in the café's timezone, regardless of where the visitor is.
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const now = h * 60 + m;
  const open = toMinutes(site.hours.open);
  const close = toMinutes(site.hours.close);

  if (now >= open && now < close) return { open: true, text: `Open now, until ${fmt(site.hours.close)}` };
  if (now < open) return { open: false, text: `Closed now, opens at ${fmt(site.hours.open)}` };
  return { open: false, text: `Closed now, opens tomorrow at ${fmt(site.hours.open)}` };
}

/** Live open/closed pill. Renders after mount so server and client HTML always match. */
export function OpenStatus() {
  const [status, setStatus] = React.useState<{ open: boolean; text: string } | null>(null);
  React.useEffect(() => {
    setStatus(compute());
    const id = window.setInterval(() => setStatus(compute()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return <div className="open-status" aria-hidden="true" style={{ visibility: "hidden" }}><i />&nbsp;</div>;
  return (
    <p className="open-status" data-open={status.open} role="status">
      <i aria-hidden="true" />
      {status.text}
    </p>
  );
}
