const steps = [
    { number: "01", title: "Discovery", description: "Goals, scope, constraints." },
    { number: "02", title: "Planning", description: "Architecture & timeline." },
    { number: "03", title: "Development", description: "Iterative, reviewed builds." },
    { number: "04", title: "Testing", description: "QA, edge cases, load." },
    { number: "05", title: "Launch", description: "Deploy, monitor, support." },
];

export function Process() {
    return (
        <section id="process" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
            <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist">How we work.</h2>
            <ol className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
                {steps.map((step) => (
                    <li key={step.number} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <span
                            className={`font-mono text-sm font-semibold ${step.number === "05" ? "text-accent" : "text-brand"
                                }`}
                        >
                            {step.number}
                        </span>
                        <h3 className="mt-2 font-medium text-mist">{step.title}</h3>
                        <p className="mt-1 text-xs text-fog">{step.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
