import Image from "next/image";

const projects = [
    {
        name: "Movie & TV Streaming",
        description:
            "A movie and TV streaming platform where users can explore titles, browse series, and manage their personal watchlist through a modern viewing experience.",
        image: "/project-img/01-project-movie.jpg",
        alt: "Movie and TV streaming website showing a dark-themed collection of films and series",
        // href: "https://your-movie-project-url.com",
        stack: [
            "TypeScript",
            "Next.js",
            "Redux Toolkit & RTK Query",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Redis",
            "Better Auth",
            "Third-Party APIs",
        ],
    },
    {
        name: "Grocery Shop",
        description:
            "An e-commerce website for grocery shopping, allowing customers to browse products, manage their cart, and place orders through a simple online shopping experience.",
        image: "/project-img/02-project-grocery-shop.jpg",
        alt: "Grocery e-commerce website displaying grocery products and shopping categories",
        href: "https://grocery-store-rho-nine.vercel.app/",
        stack: [
            "TypeScript",
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "JWT",
            "MongoDB",
        ],
    },
    {
        name: "Chat Application",
        description:
            "A real-time chat application with a friend-request system that allows users to connect and message each other only after requests are accepted.",
        image: "/project-img/03-project-chat.jpg",
        alt: "Real-time chat application interface showing conversations and friend connections",
        href: "https://chat-application-ruby-iota.vercel.app",
        stack: [
            "TypeScript",
            "React",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "JWT",
            "Socket.IO",
            "MongoDB",
        ],
    },
];

function tagClass(index: number) {
    if (index === 0) return "bg-brand/10 text-brand";
    if (index === 1) return "bg-accent/10 text-accent";
    return "bg-white/5 text-fog";
}

export function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Projects</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist md:text-4xl">
                        Selected work.
                    </h2>
                </div>
                <a href="#contact" className="font-mono text-sm text-fog transition-colors hover:text-mist">
                    Start yours →
                </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
                {projects.map((project) => (
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
                            <h3 className="font-semibold text-mist">{project.name}</h3>
                            <p className="mt-1.5 text-sm text-fog">{project.description}</p>
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
