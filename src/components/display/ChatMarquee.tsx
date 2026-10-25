import type { LucideIcon } from "lucide-react";
import { Send } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const MASK_FADE_Y = "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)";

type Exchange = { userMessage: string; aiResponse: string };

const ChatMarquee = ({ aiIcon: AiIcon, userIcon: UserIcon, exchanges, placeholder }: { aiIcon: LucideIcon; userIcon: LucideIcon; exchanges: Exchange[]; placeholder: string }) => {
  const messages = exchanges.flatMap((e) => [{ content: e.userMessage, isUser: true }, { content: e.aiResponse, isUser: false }]);
  const duplicated = [...messages, ...messages];

  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <div className="flex-1 overflow-hidden" style={{ maskImage: MASK_FADE_Y }}>
        <div className="flex flex-col px-4 animate-marquee-vertical">
          {duplicated.map((msg, i) => (
            <div key={i} className={cn("flex items-end gap-2 mb-4 shrink-0", msg.isUser ? "flex-row-reverse" : "flex-row")}>
              {msg.isUser ? (
                <div className="flex items-center justify-center size-8 bg-primary text-primary-foreground rounded shrink-0">
                  <UserIcon className="size-3 text-primary-foreground" />
                </div>
              ) : (
                <div className="flex items-center justify-center size-8 card rounded shrink-0">
                  <AiIcon className="size-3" />
                </div>
              )}
              <div className={cn("max-w-3/4 px-4 py-3 text-sm leading-snug", msg.isUser ? "bg-primary text-primary-foreground rounded-2xl rounded-br-none" : "card rounded-2xl rounded-bl-none")}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 pl-4 card rounded">
        <p className="flex-1 text-sm text-foreground/75 truncate">{placeholder}</p>
        <div className="flex items-center justify-center size-7 bg-primary text-primary-foreground rounded">
          <Send className="size-3 text-primary-foreground" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};

export default ChatMarquee;
