import { stages, type Stage } from "@/content/projects";
import { Unconfirmed } from "./Placeholder";

export function StageBadge({ stage, confirmed }: { stage: Stage; confirmed: boolean }) {
  return (
    <span className="inline-flex flex-wrap items-center text-sm">
      <span className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground">
        {stage}
      </span>
      {!confirmed && <Unconfirmed>stage to be confirmed</Unconfirmed>}
    </span>
  );
}

/** Shows where the project sits on the path from problem to tool in use. */
export function StageTrack({ stage, confirmed }: { stage: Stage; confirmed: boolean }) {
  const current = stages.indexOf(stage);
  return (
    <div>
      <ol className="grid grid-cols-4 gap-1" aria-label="Project stage">
        {stages.map((s, i) => (
          <li key={s} aria-current={i === current ? "step" : undefined}>
            <div className={`h-1.5 rounded-full ${i <= current ? "bg-primary" : "bg-border"}`} />
            <div
              className={`mt-2 text-xs leading-tight ${
                i === current ? "font-semibold text-foreground" : "text-muted-foreground"
              }`}
            >
              {s}
            </div>
          </li>
        ))}
      </ol>
      {!confirmed && (
        <p className="mt-3 text-xs text-note-foreground">
          <Unconfirmed>stage to be confirmed by the project lead</Unconfirmed>
        </p>
      )}
    </div>
  );
}
