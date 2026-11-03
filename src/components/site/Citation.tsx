import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import type { Publication } from "@/content/publications";
import { getProject } from "@/content/projects";
import { Unconfirmed } from "./Placeholder";

/** A readable citation: authors in original order, members highlighted, then links. */
export function Citation({ pub, showProject = true }: { pub: Publication; showProject?: boolean }) {
  const project = pub.project ? getProject(pub.project) : undefined;

  return (
    <article className="py-6">
      <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
        {pub.title}
      </h3>

      <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">
        {pub.authors.map((a, i) => (
          <Fragment key={`${a.name}-${i}`}>
            {i > 0 && ", "}
            {a.member ? (
              <Link
                to="/team/$slug"
                params={{ slug: a.member }}
                className="font-semibold text-foreground underline decoration-link decoration-2 underline-offset-4"
                title="Lab member"
              >
                {a.name}
              </Link>
            ) : (
              a.name
            )}
            {a.affiliations && <sup>{a.affiliations.join(",")}</sup>}
          </Fragment>
        ))}
        {!pub.authorsComplete && ", et al."}
      </p>

      {pub.affiliations && (
        <p className="mt-1 text-sm text-muted-foreground">
          {pub.affiliations.map((aff, i) => (
            <Fragment key={aff}>
              {i > 0 && "; "}
              <sup>{i + 1}</sup>
              {aff}
            </Fragment>
          ))}
        </p>
      )}

      <p className="mt-1 text-sm text-muted-foreground">
        <em>{pub.venue}</em>, {pub.year}
        {pub.status && ` (${pub.status})`}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {pub.doi ? (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            DOI: {pub.doi}
          </a>
        ) : (
          <span className="text-muted-foreground">DOI not yet available</span>
        )}
        {showProject && project && (
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="text-link">
            Project: {project.name}
          </Link>
        )}
        {!pub.verified && <Unconfirmed>citation details to be verified</Unconfirmed>}
      </div>
    </article>
  );
}
