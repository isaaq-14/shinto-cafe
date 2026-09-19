import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Lanterns } from "@/components/lanterns";

export function Hero() {
  return (
    <header className="hero on-green" id="top">
      <Lanterns />
      <div className="arch">
        <h1 className="wordmark">
          <Logo title="Shinto" />
        </h1>
        <p className="tags">
          <span>[asian café]</span>
          <span>[pet friendly]</span>
        </p>
        <p className="hero-sub">
          Ramen, sandos, matcha and cold brew in Indiranagar. Japanese, Korean, Thai, Vietnamese and Indonesian plates, plus specialty coffee.
        </p>
        <div className="hero-cta">
          <Button asChild variant="primary">
            <a href="#menu">See the menu</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#visit">Plan your visit</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
