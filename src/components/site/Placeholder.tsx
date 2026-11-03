import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Clearly marked stand-in for content the lab has not supplied or approved yet.
 * Visitors see that something is missing; lab members see what to add.
 */
export function Placeholder({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-dashed border-note-border bg-note px-4 py-3 text-sm text-note-foreground ${className}`}
    >
      <span className="mr-2 inline-block rounded bg-note-foreground px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-note">
        Placeholder
      </span>
      {children}
    </div>
  );
}

export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-md border border-dashed border-note-border bg-note p-6 text-center text-sm text-note-foreground ${className}`}
    >
      <ImageIcon size={28} aria-hidden />
      <span className="rounded bg-note-foreground px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-note">
        Placeholder
      </span>
      <span>{label}</span>
    </div>
  );
}

/** Small inline marker for a detail that still needs confirming. */
export function Unconfirmed({ children = "to be confirmed" }: { children?: ReactNode }) {
  return (
    <span className="ml-2 inline-block rounded border border-dashed border-note-border bg-note px-1.5 py-0.5 text-xs font-medium text-note-foreground">
      {children}
    </span>
  );
}
