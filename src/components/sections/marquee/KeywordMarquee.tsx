interface KeywordMarqueeProps {
  words: string[];
}

/**
 * Two rows of oversized keywords drifting in opposite directions.
 * Filled and outlined words alternate for a bold, sober agency look.
 */
const KeywordMarquee = ({ words }: KeywordMarqueeProps) => {
  const row = [...words, ...words];

  const Word = ({ word, i }: { word: string; i: number }) => (
    <span className="flex items-center shrink-0">
      <span
        className={
          i % 2 === 0
            ? "font-display text-6xl md:text-8xl 2xl:text-9xl font-semibold text-foreground/90"
            : "font-display text-6xl md:text-8xl 2xl:text-9xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--color-accent)]"
        }
      >
        {word}
      </span>
      <span className="mx-8 md:mx-12 size-3 md:size-4 rounded-full bg-primary shrink-0" />
    </span>
  );

  return (
    <section
      aria-label="Keywords section"
      className="py-16 md:py-24 overflow-hidden flex flex-col gap-6 md:gap-8"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div className="flex w-max gap-8 md:gap-12 animate-marquee-horizontal">
        {row.map((word, i) => (
          <Word key={`a-${i}`} word={word} i={i} />
        ))}
      </div>
      <div className="flex w-max gap-8 md:gap-12 animate-marquee-horizontal-reverse">
        {row.map((word, i) => (
          <Word key={`b-${i}`} word={word} i={i + 1} />
        ))}
      </div>
    </section>
  );
};

export default KeywordMarquee;
