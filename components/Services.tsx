
const services = [
    {
        glyph: "//",
        tone: "brand" as const,
        title: "Full-Stack Web Development",
        description: "End-to-end product builds from database to interface, ready for real users.",
    },
    {
        glyph: "</>",
        tone: "accent" as const,
        title: "Frontend Development",
        description: "Fast, accessible interfaces with modern frameworks and pixel-level polish.",
    },
    {
        glyph: "{}",
        tone: "brand" as const,
        title: "Backend & API Development",
        description: "Robust services, typed APIs, and integrations built for reliability.",
    },
    {
        glyph: "DB",
        tone: "accent" as const,
        title: "Database & System Architecture",
        description: "Schemas, data models, and infra designed to scale as you grow.",
    },
    {
        glyph: "∞",
        tone: "brand" as const,
        title: "SaaS Development",
        description: "Multi-tenant platforms with billing, auth, and dashboards baked in.",
    },
    {
        glyph: "◊",
        tone: "accent" as const,
        title: "Website Development",
        description: "High-performance marketing and product sites that convert and rank.",
    },
]

export function Services() {
    return (
        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
            <div className="max-w-2xl">
                <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Services</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist md:text-4xl">
                    Everything you need to ship.
                </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand/40 hover:bg-white/[0.05]"
                    >
                        <div
                            className={`grid size-10 place-items-center rounded-lg font-mono ${service.tone === "brand"
                                    ? "bg-brand/15 text-brand"
                                    : "bg-accent/15 text-accent"
                                }`}
                        >
                            {service.glyph}
                        </div>
                        <h3 className="mt-5 font-semibold text-mist">{service.title}</h3>
                        <p className="mt-2 text-sm text-fog">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
