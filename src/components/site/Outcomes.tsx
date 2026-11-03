import { Target, CheckCircle2 } from "lucide-react";
import type { MeasuredOutcome } from "@/content/projects";

/**
 * Keeps what a tool is designed to do visibly separate from what the team
 * has actually measured, so aims are never read as results.
 */
export function Outcomes({
  designedTo,
  measured,
}: {
  designedTo: string[];
  measured: MeasuredOutcome[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Target size={18} aria-hidden /> Designed to
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Aims of the tool. These are not results.
        </p>
        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/85">
          {designedTo.map((d) => (
            <li key={d} className="flex gap-2">
              <span aria-hidden className="text-muted-foreground">
                –
              </span>
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-border bg-measured p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-measured-foreground">
          <CheckCircle2 size={18} aria-hidden /> Measured so far
        </div>
        <p className="mt-1 text-xs text-measured-foreground/80">
          Outcomes the team has actually measured, and how.
        </p>
        {measured.length === 0 ? (
          <p className="mt-4 text-[15px] text-measured-foreground">
            No outcomes have been measured with intended users yet.
          </p>
        ) : (
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-measured-foreground">
            {measured.map((m) => (
              <li key={m.result}>
                <span className="font-semibold">{m.result}</span>
                <span className="block text-sm">
                  {m.how}
                  {m.source && (
                    <>
                      {" · "}
                      <a
                        href={m.source.href}
                        className="underline underline-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {m.source.label}
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
