import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Item = { imageSrc?: string; videoSrc?: string };

const Media = ({ item }: { item: Item }) =>
  item.videoSrc ? (
    <video src={item.videoSrc} className="w-full h-full object-cover rounded" autoPlay loop muted playsInline />
  ) : (
    <img src={item.imageSrc} alt="" className="w-full h-full object-cover rounded" />
  );

const MediaStack = ({ items }: { items: [Item, Item, Item] }) => (
  <div className="group/stack relative flex items-center justify-center h-full w-full rounded select-none card">
    <div className={cn(
      "absolute z-1 overflow-hidden p-1 w-3/5 aspect-4/3 rounded bg-primary",
      "translate-x-[12%] -translate-y-[8%] rotate-8 transition-all duration-500",
      "group-hover/stack:translate-x-[22%] group-hover/stack:-translate-y-[14%] group-hover/stack:rotate-12"
    )}>
      <Media item={items[2]} />
    </div>
    <div className={cn(
      "absolute z-2 overflow-hidden p-1 w-3/5 aspect-4/3 rounded bg-primary",
      "-translate-x-[12%] -translate-y-[8%] -rotate-8 transition-all duration-500",
      "group-hover/stack:-translate-x-[22%] group-hover/stack:-translate-y-[14%] group-hover/stack:-rotate-12"
    )}>
      <Media item={items[1]} />
    </div>
    <div className={cn(
      "absolute z-30 overflow-hidden p-1 w-3/5 aspect-4/3 rounded bg-primary",
      "translate-y-[10%] transition-all duration-500",
      "group-hover/stack:translate-y-[20%]"
    )}>
      <Media item={items[0]} />
    </div>
  </div>
);

export default MediaStack;
