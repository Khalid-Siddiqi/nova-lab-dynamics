import { createFileRoute, Link } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { Container, PageHeader, SectionHeading } from "@/components/site/Page";
import { Placeholder } from "@/components/site/Placeholder";
import { people, personGroups, type Person } from "@/content/people";

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: "Team | Medical AI Lab, GUTECH" },
      {
        name: "description",
        content:
          "Faculty, researchers, engineers, students, clinical collaborators, and alumni of the Medical AI Lab, and what each of them contributes.",
      },
    ],
  }),
  component: TeamPage,
});

function PersonCard({ person }: { person: Person }) {
  return (
    <li className="flex gap-5 rounded-lg border border-border bg-card p-5">
      {person.photo ? (
        <img src={person.photo} alt="" className="h-24 w-24 shrink-0 rounded-md object-cover" />
      ) : (
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground">
          <UserRound size={32} aria-hidden />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="font-display text-xl font-semibold">
          <Link
            to="/team/$slug"
            params={{ slug: person.slug }}
            className="text-foreground hover:text-link"
          >
            {person.name}
          </Link>
        </h3>
        <p className="text-sm font-medium text-muted-foreground">{person.role}</p>
        {person.contribution ? (
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">
            {person.contribution}
          </p>
        ) : (
          <Placeholder className="mt-3">One sentence on this person's contribution.</Placeholder>
        )}
        <Link
          to="/team/$slug"
          params={{ slug: person.slug }}
          className="mt-3 inline-block text-sm font-semibold text-link"
        >
          Profile and related work
        </Link>
      </div>
    </li>
  );
}

const emptyGroupNote: Record<string, string> = {
  Students: "Add student members and the project each one works on.",
  "Clinical Collaborators":
    "Add clinicians who work with the lab, with their consent, and what each contributes.",
  Alumni: "Add former members and where they went next.",
};

function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Team" title="The people behind the work">
        Faculty, researchers, engineers, students, and clinical collaborators. For each person we
        say what they actually contribute, and link to their work.
      </PageHeader>

      <Container className="space-y-14 py-14">
        {personGroups.map((group) => {
          const members = people.filter((p) => p.group === group);
          return (
            <section key={group} aria-labelledby={`group-${group}`}>
              <SectionHeading id={`group-${group}`}>{group}</SectionHeading>
              {members.length > 0 ? (
                <ul className="mt-6 grid gap-5 md:grid-cols-2">
                  {members.map((p) => (
                    <PersonCard key={p.slug} person={p} />
                  ))}
                </ul>
              ) : (
                <Placeholder className="mt-5">
                  {emptyGroupNote[group] ?? `Add ${group.toLowerCase()}.`}
                </Placeholder>
              )}
            </section>
          );
        })}
      </Container>
    </>
  );
}
