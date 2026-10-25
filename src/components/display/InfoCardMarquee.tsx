import type { LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; label: string; value: string };

const MASK_FADE_Y = "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)";

const InfoCardMarquee = ({ items }: { items: Item[] }) => {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="h-full overflow-hidden" style={{ maskImage: MASK_FADE_Y }}>
      <div className="flex flex-col animate-marquee-vertical">
        {duplicated.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center justify-between gap-4 p-3 mb-4 card rounded">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 bg-secondary text-secondary-foreground rounded">
                  <Icon className="size-4 text-secondary-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-base truncate">{item.label}</p>
              </div>
              <p className="text-base">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCardMarquee;
