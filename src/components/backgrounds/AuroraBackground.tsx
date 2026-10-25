import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type AuroraBackgroundProps = {
  className?: string;
};

const AuroraBackground = ({ className = "" }: AuroraBackgroundProps) => {
  return (
    <div className={cn("@container-size inset-0 -z-10 w-full h-full overflow-hidden bg-background pointer-events-none", className)}>
      <div className="absolute top-0 left-1/2 -translate-y-1/2 translate-x-[-120%] w-[9cqw] h-[110cqh] bg-primary/15 rotate-[-52.5deg] rounded-[100%]" />
      <div className="absolute top-[-20cqh] right-[2.5cqw] w-[12.5cqw] h-[100cqh] bg-primary/15 -rotate-60 rounded-[100%]" />
      <div className="absolute top-[-20cqh] left-[2cqw] w-[15cqw] h-[150cqh] bg-primary/20 -rotate-45 rounded-[100%]" />
      <div className="absolute top-[-30cqh] left-0 w-[10cqw] h-[70cqh] bg-primary/15 -rotate-45 rounded-[100%]" />
      <div className="absolute bottom-[-40cqh] left-0 w-[120cqw] h-[50cqh] bg-primary/10 -rotate-20 rounded-[100%]" />
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
    </div>
  );
};

export default AuroraBackground;
