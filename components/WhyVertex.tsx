const reasons = [
    {
        title: "Clean, maintainable code",
        description: "Code that's easy to understand, maintain, and build on.",
    },
    {
        title: "Modern technology",
        description: "The right tools for your project, chosen for reliability and long-term value.",
    },
    {
        title: "Responsive experiences",
        description: "Interfaces that work well across devices and screen sizes.",
    },
    {
        title: "Scalable architecture",
        description: "A solid foundation that can grow with your product.",
    },
    {
        title: "Direct communication",
        description: "Work directly with the person building your software.",
    },
    {
        title: "Reliable delivery",
        description: "Clear communication, milestones, and progress throughout the project.",
    },
];

export function WhyVertex() {
    return (
        <section id="why" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand/10 via-surface/40 to-accent/10 p-8 backdrop-blur-xl md:p-12">
                <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
                    <div>
                        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Why Vertex</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist">
                            Built like it&apos;s going to scale. Because it will.
                        </h2>
                    </div>
                    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                        {reasons.map((reason) => (
                            <div key={reason.title}>
                                <h3 className="font-medium text-mist">{reason.title}</h3>
                                <p className="mt-1 text-sm text-fog">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
