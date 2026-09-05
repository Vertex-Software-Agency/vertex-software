/* eslint-disable react/no-unescaped-entities */
const stats = [
  { value: "5+", label: "products shipped" },
  { value: "2", label: "years building" },
  { value: "99.9%", label: "uptime" },
];


export function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 pt-20 pb-24 md:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-fog">
            <span className="size-1.5 rounded-full bg-accent" />
            Custom software, engineered
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-mist md:text-5xl">
            We build the software your product runs on.
          </h1>
          <p className="mt-5 max-w-md text-lg text-fog">
            Vertex Software designs and ships full-stack products for startups and growing
            companies — clean code, scalable architecture, reliable delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand/90"
            >
              Start a Project <span aria-hidden="true">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-mist transition-colors hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
          <dl className="mt-10 flex gap-8 font-mono text-sm">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-semibold text-mist">{stat.value}</dd>
                <dd className="mt-1 text-xs text-faint">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="size-3 rounded-full bg-rose-400/70" />
            <span className="size-3 rounded-full bg-amber-300/70" />
            <span className="size-3 rounded-full bg-emerald-400/70" />
            <span className="ml-2 font-mono text-xs text-faint">api/vertex.ts</span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="text-faint">{"// deploy pipeline"}</span>
              {"\n"}
              <span className="text-brand">const</span> <span className="text-accent">project</span> ={" "}
              <span className="text-brand">await</span> vertex.<span className="text-mist">build</span>
              {"({\n  scope: "}
              <span className="text-amber-300">"full-stack"</span>
              {",\n  stack: ["}
              <span className="text-amber-300">"node"</span>
              {", "}
              <span className="text-amber-300">"postgres"</span>
              {"],\n  quality: "}
              <span className="text-amber-300">"production"</span>
              {"\n});\n\n"}
              <span className="text-brand">return</span> project.
              <span className="text-mist">ship</span>
              {"(); "} <span className="text-emerald-400">{"// ✓ live"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

