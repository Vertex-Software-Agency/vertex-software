import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/projectData.js";

function tagClass(index: number) {
    if (index === 0) return "bg-brand/10 text-brand";

    if (index === 1) return "bg-accent/10 text-accent";

    return "bg-white/5 text-fog";
}

export function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20"
        >
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                        Projects
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist md:text-4xl">
                        Selected work.
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                    <Link
                        href="/projects"
                        className="font-mono text-sm text-fog transition-colors hover:text-mist"
                    >
                        View all projects →
                    </Link>

                    <a
                        href="#contact"
                        className="font-mono text-sm text-fog transition-colors hover:text-mist"
                    >
                        Start yours →
                    </a>
                </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
                {projects.slice(0,3).map((project) => (
                    <article
                        key={project.name}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl transition-colors hover:border-brand/40"
                    >
                        <Image
                            src={project.image}
                            alt={project.alt}
                            loading="lazy"
                            width={1024}
                            height={640}
                            className="aspect-[16/10] w-full object-cover"
                        />

                        <div className="p-5">
                            <h3 className="font-semibold text-mist">
                                {project.name}
                            </h3>

                            <p className="mt-1.5 text-sm text-fog">
                                {project.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {project.stack.map((tech, i) => (
                                    <span
                                        key={tech}
                                        className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${tagClass(i)}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.href ? (
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-mist transition-all group-hover:gap-2"
                                >
                                    View Project →
                                </a>
                            ) : (
                                <span className="mt-4 inline-flex text-sm font-medium text-fog">
                                    In development
                                </span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}