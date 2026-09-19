import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/open-status";
import { site } from "@/data/site";

export function Visit() {
  return (
    <section className="visit on-green" id="visit" aria-labelledby="visit-h">
      <div className="wrap visit-grid">
        <div>
          <h2 className="display" id="visit-h">Find us</h2>
          <address>{site.address.full}</address>
          <div className="actions">
            <Button asChild variant="primary">
              <a href={site.links.maps} target="_blank" rel="noopener noreferrer">Get directions</a>
            </Button>
            <Button asChild variant="ghost">
              <a href={`tel:${site.phone.tel}`}>Call {site.phone.display}</a>
            </Button>
          </div>
        </div>
        <div>
          <h3>Hours</h3>
          <dl className="hours">
            <dt>{site.hours.label}</dt>
            <dd>{site.hours.text}</dd>
          </dl>
          <OpenStatus />
          <h3>Good to know</h3>
          <ul className="facts">
            {/* <li>{site.costForTwo}</li> */}
            <li>Pets are welcome.</li>
            <li>
              Order delivery on{" "}
              <a href={site.links.zomato} target="_blank" rel="noopener noreferrer" className="underline">Zomato</a>
              {site.links.swiggy && (
                <>
                  {" "}or{" "}
                  <a href={site.links.swiggy} target="_blank" rel="noopener noreferrer" className="underline">Swiggy</a>
                </>
              )}
              .
            </li>
            <li>
              Follow{" "}
              <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="underline">{site.links.instagramHandle}</a>{" "}
              for our curated posts and exciting updates!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
