import { LOGO_PATH, LOGO_VIEWBOX } from "@/data/logo";

/** The Shinto wordmark + dog. Inherits colour from `currentColor`. */
export function Logo({ title, className }: { title?: string; className?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  );
}
