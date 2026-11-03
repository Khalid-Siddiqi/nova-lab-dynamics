import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, Mail } from "lucide-react";
import { Container, PageHeader } from "@/components/site/Page";
import { site } from "@/content/site";

export const Route = createFileRoute("/collaborate")({
  head: () => ({
    meta: [
      { title: "Collaborate With Us | Medical AI Lab, GUTECH" },
      {
        name: "description",
        content:
          "Clinicians, hospitals, researchers, and other domain experts: bring us a problem you face, even if you have no AI solution in mind.",
      },
    ],
  }),
  component: CollaboratePage,
});

const inputClass =
  "mt-1.5 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30";

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-foreground">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-0.5 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {children}
    </div>
  );
}

function CollaboratePage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `A problem for the Medical AI Lab — ${get("organization")}`;
    const body = [
      `Name: ${get("name")}`,
      `Work email: ${get("email")}`,
      `Organization: ${get("organization")}`,
      "",
      "What problem are you facing?",
      get("problem"),
      "",
      "Who experiences it, and how do they handle it today?",
      get("today"),
    ].join("\n");

    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHeader eyebrow="Collaborate With Us" title="Bring us a problem, not a solution">
        We work with clinicians, hospitals, researchers, and other domain experts. You don't need an
        AI solution in mind. Tell us what you face in your work, and we will study it with you.
      </PageHeader>

      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_340px]">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-6"
          aria-describedby="privacy-note"
        >
          <div
            id="privacy-note"
            role="note"
            className="flex gap-3 rounded-md border border-note-border bg-note p-4 text-note-foreground"
          >
            <ShieldAlert size={22} className="mt-0.5 shrink-0" aria-hidden />
            <p className="text-[15px] leading-relaxed">
              <strong>Please leave out any patient-identifying information:</strong> names, medical
              record numbers, dates of birth, photos, or anything else that could identify a
              patient.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label="Name">
              <input id="name" name="name" required autoComplete="name" className={inputClass} />
            </Field>
            <Field id="email" label="Work email">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </Field>
          </div>

          <Field id="organization" label="Organization">
            <input
              id="organization"
              name="organization"
              required
              autoComplete="organization"
              className={inputClass}
            />
          </Field>

          <Field
            id="problem"
            label="What problem are you facing?"
            hint="Describe it in your own words. No technical detail needed."
          >
            <textarea
              id="problem"
              name="problem"
              required
              rows={5}
              aria-describedby="problem-hint"
              className={inputClass}
            />
          </Field>

          <Field
            id="today"
            label="Who experiences it, and how do they handle it today?"
            hint="For example: which staff or patients are affected, and what the current process looks like."
          >
            <textarea
              id="today"
              name="today"
              required
              rows={5}
              aria-describedby="today-hint"
              className={inputClass}
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={18} aria-hidden /> Send via email
          </button>

          <p className="text-sm text-muted-foreground" aria-live="polite">
            {sent
              ? `Your email app should now open with your message addressed to ${site.contactEmail}. Please press send there. If nothing opened, email us directly.`
              : "This opens your email app with your answers filled in, ready to send."}
          </p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="font-semibold text-foreground">Prefer to email directly?</h2>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-2 inline-block break-all text-link"
            >
              {site.contactEmail}
            </a>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="font-semibold text-foreground">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-foreground/85">
              <li>We read your message and reply to set up a conversation.</li>
              <li>We learn how the problem shows up in your work, ideally by visiting.</li>
              <li>If it is a good fit, we agree together on what to build and how to test it.</li>
            </ol>
          </div>
        </aside>
      </Container>
    </>
  );
}
