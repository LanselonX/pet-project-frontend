import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";

export default function UnitInput({
  unit,
  className,
  value,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { unit: string }) {
  return (
    <div className="relative">
      <Input
        className={cn("pr-10", className)}
        value={value ?? ""}
        {...props}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground pointer-events-none">
        {unit}
      </span>
    </div>
  );
}
