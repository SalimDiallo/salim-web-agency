import AppearOnScroll from "@/components/animation/AppearOnScroll";

interface ClientLogosProps {
  label: string;
  clients: string[];
}

const ClientLogos = ({ label, clients }: ClientLogosProps) => {
  const row = [...clients, ...clients];

  return (
    <section aria-label="Clients section" className="flex flex-col items-center gap-8 py-16">
      <AppearOnScroll variant="fade">
        <p className="text-sm md:text-base text-muted-foreground text-center uppercase tracking-widest">
          {label}
        </p>
      </AppearOnScroll>

      <div
        className="relative w-full overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        <div className="flex w-max gap-4 animate-marquee-horizontal">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center shrink-0 px-8 py-4 card rounded-xl"
            >
              <span className="text-xl md:text-2xl font-semibold text-foreground/70 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
