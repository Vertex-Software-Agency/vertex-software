
const principles = [
  {
    title: "Direct communication",
    description:
      "You work directly with the developer building your product.",
  },
  {
    title: "Practical technology",
    description:
      "I choose tools based on your product’s actual requirements.",
  },
  {
    title: "Clean implementation",
    description:
      "I focus on reliable functionality and maintainable code.",
  },
  {
    title: "Honest progress",
    description:
      "You receive clear updates about progress, challenges, and timelines.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left side */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              About Vertex
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Software built with purpose, not unnecessary complexity.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/60">
              Vertex Software is a solo software development agency focused
              on building custom websites, web applications, APIs, and
              full-stack software products.
            </p>

          </div>

          {/* Right side */}
          <div>
            <div className="space-y-5 text-base leading-8 text-white/65">
              <p>
                I started learning software development in January 2024 and
                began building real projects in August 2025. Since then, I
                have focused on creating practical applications and improving
                my development skills through real project work.
              </p>

              <p>
                Vertex Software is where I bring that experience into client
                work. My goal is to understand your requirements, build the
                right solution, and keep the process clear from start to
                finish.
              </p>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-sm font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}