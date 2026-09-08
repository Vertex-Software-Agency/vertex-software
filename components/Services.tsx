
const services = [
    {
        glyph: "✦",
        tone: "brand" as const,
        title: "MVP Development",
        description:
            "Turn your idea into a functional, user-ready product with the essential features to launch, test, and grow.",
    },
    {
        glyph: "⌘",
        tone: "accent" as const,
        title: "Custom Software Development",
        description:
            "Custom web applications and software solutions built around your business requirements and workflows.",
    },
    {
        glyph: "//",
        tone: "brand" as const,
        title: "Full-Stack Web Development",
        description:
            "End-to-end web applications built from database to interface, with the functionality your product needs.",
    },
    {
        glyph: "{}",
        tone: "accent" as const,
        title: "Backend & API Development",
        description:
            "Reliable backend services, APIs, and integrations that power your applications and connect your systems.",
    },
    {
        glyph: "◊",
        tone: "brand" as const,
        title: "Website Development",
        description:
            "Fast, responsive websites built to represent your business, deliver a great user experience, and support your goals.",
    },
    {
        glyph: "↻",
        tone: "accent" as const,
        title: "Maintenance & Support",
        description:
            "Ongoing maintenance, bug fixes, technical support, and improvements to keep your software reliable.",
    },
];

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
