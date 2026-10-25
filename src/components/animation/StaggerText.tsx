// The ButtonStagger label on its own: drop it inside any link or button and, on hover of that link or
// button, each letter slides up in turn to reveal a copy of itself from below.
const StaggerText = ({ text }: { text: string }) => (
  <span className="truncate overflow-hidden">
    {[...text].map((char, index) => (
      <span
        key={index}
        className="inline-block transition-transform duration-400 ease-out md:in-[:is(a,button):hover]:-translate-y-[1.25em]"
        style={{ textShadow: "0 1.25em currentColor", transitionDelay: `${index * 0.01}s`, whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char}
      </span>
    ))}
  </span>
);

export default StaggerText;
