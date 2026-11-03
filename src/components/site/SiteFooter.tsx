import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-semibold">
            {site.name} ({site.shortName})
          </div>
          <p className="mt-2 text-sm text-primary-foreground/75">
            {site.institution}
            <br />
            {site.city}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/projects" className="hover:text-primary-foreground">
                Projects & Products
              </Link>
            </li>
            <li>
              <Link to="/collaborations" className="hover:text-primary-foreground">
                Collaborations
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-primary-foreground">
                Team
              </Link>
            </li>
            <li>
              <Link to="/publications" className="hover:text-primary-foreground">
                Publications
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-primary-foreground">
                News & Events
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Have a problem in mind?</div>
          <p className="mt-3 text-sm text-primary-foreground/75">
            You don't need an AI solution in mind. Tell us what you face in practice.
          </p>
          <Link
            to="/collaborate"
            className="mt-4 inline-block rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-navy-deep hover:opacity-90"
          >
            Collaborate With Us
          </Link>
          <p className="mt-4 text-sm">
            <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-4">
              {site.contactEmail}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          © {new Date().getFullYear()} {site.name}, {site.institution}
        </div>
      </div>
    </footer>
  );
}
