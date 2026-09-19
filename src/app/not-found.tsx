import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="notfound on-green">
      <Logo title="Shinto" className="w-[min(320px,70vw)]" />
      <h1 className="display" style={{ fontSize: "clamp(32px,6vw,56px)" }}>This page wandered off</h1>
      <p>We can&apos;t find what you were looking for, but the menu is right where you left it.</p>
      <Button asChild variant="primary">
        <Link href="/">Back to the home page</Link>
      </Button>
    </main>
  );
}
