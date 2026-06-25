import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  className,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title} {accent && <span className="text-primary">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
