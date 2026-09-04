
export function AuroraBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
            <div className="aurora-b absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-brand/25 blur-[120px]" />

            <div className="aurora-b absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[130px]" />

            <div className="absolute -bottom-[200px] left-1/3 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[130px]" />

            <div className="grid-overlay absolute inset-0"/>
        </div>
    )
}
