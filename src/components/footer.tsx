import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer on-green">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {site.name}, Indiranagar, Bengaluru</span>
        <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
}
