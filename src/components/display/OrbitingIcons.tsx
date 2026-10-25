import type { LucideIcon } from "lucide-react";

const ORBIT_KEYFRAMES = `@keyframes orbit {
  from { transform: rotate(var(--initial-position, 0deg)) translateX(var(--translate-position, 120px)) rotate(calc(-1 * var(--initial-position, 0deg))); }
  to { transform: rotate(calc(var(--initial-position, 0deg) + 360deg)) translateX(var(--translate-position, 120px)) rotate(calc(-1 * (var(--initial-position, 0deg) + 360deg))); }
}`;

const OrbitingIcons = ({ centerIcon: CenterIcon, items }: { centerIcon: LucideIcon; items: LucideIcon[] }) => (
  <div
    className="relative flex items-center justify-center h-full overflow-hidden"
    style={{ perspective: "2000px", maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent), linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskComposite: "intersect" }}
  >
    <style>{ORBIT_KEYFRAMES}</style>
    <div className="flex items-center justify-center w-full h-full" style={{ transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)" }}>
      <div className="absolute size-60 opacity-85 border border-accent shadow rounded-full" />
      <div className="absolute size-80 opacity-75 border border-accent shadow rounded-full" />
      <div className="absolute size-100 opacity-65 border border-accent shadow rounded-full" />
      <div className="absolute flex items-center justify-center size-40 border border-accent shadow rounded-full">
        <div className="flex items-center justify-center size-20 bg-primary text-primary-foreground rounded-full">
          <CenterIcon className="size-10 text-primary-foreground" strokeWidth={1.25} />
        </div>
        {items.map((Icon, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center size-10 rounded shadow card -ml-5 -mt-5"
            style={{ top: "50%", left: "50%", animation: "orbit 12s linear infinite", "--initial-position": `${(360 / items.length) * i}deg`, "--translate-position": "160px" } as React.CSSProperties}
          >
            <Icon className="size-4" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OrbitingIcons;
