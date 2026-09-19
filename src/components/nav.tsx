import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

export function Nav() {
  return (
    <nav className="nav on-green" aria-label="Main">
      <a className="logo" href="#top" aria-label="Shinto, back to top">
        <Logo />
      </a>
      <div className="nav-links">
        <a href="#menu">Menu</a>
        <a className="hide-sm" href="#space">Our space</a>
        <a className="hide-sm" href="#visit">Visit</a>
        <Button asChild variant="matcha" size="sm">
          <a href={`tel:${site.phone.tel}`}>Call</a>
        </Button>
      </div>
    </nav>
  );
}
