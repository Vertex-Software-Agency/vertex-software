/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const projectTypes = ["Full-stack product", "SaaS platform", "Website", "API / backend"];

const inputClass = "mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-mist placeholder:text-faint focus:border-brand focus:outline-none";


export function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
            <div className="grid gap-10 rounded-2xl border border-white/10 bg-surface/50 p-8 backdrop-blur-xl md:p-12 lg:grid-cols-2">
                <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Contact</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist md:text-4xl">
                        Start a project.
                    </h2>
                    <p className="mt-4 max-w-sm text-fog">
                        Tell us what you're building. We reply within one business day with next steps and a
                        first estimate.
                    </p>
                    <address className="mt-8 space-y-3 font-mono text-sm text-fog not-italic">
                        <p>
                            <span className="text-faint">→</span>{" "}
                            <a href="mailto:vertexsoftwareagency@gmail.com" className="transition-colors hover:text-mist">
                                vertexsoftwareagency@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="text-faint">→</span>{" "}
                            <a href="tel:+917710917335" className="transition-colors hover:text-mist">
                                +91 7710917335
                            </a>
                        </p>
                        <p>
                            <span className="text-faint">→</span> Remote · India, Maharashtra, Mumbai 
                        </p>
                    </address>
                </div>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/5 p-10 text-center">
                        <CheckCircle2 className="size-10 text-accent" />
                        <h3 className="mt-4 text-lg font-semibold text-mist">Project submitted</h3>
                        <p className="mt-2 max-w-xs text-sm text-fog">
                            Thanks for reaching out — we'll get back to you within one business day.
                        </p>
                        <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                            className="mt-6 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/10"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="font-mono text-xs text-fog">Name</span>
                                <input type="text" required placeholder="Jordan Lee" className={inputClass} />
                            </label>
                            <label className="block">
                                <span className="font-mono text-xs text-fog">Email</span>
                                <input type="email" required placeholder="you@company.com" className={inputClass} />
                            </label>
                        </div>
                        <label className="block">
                            <span className="font-mono text-xs text-fog">Project type</span>
                            <select className={inputClass} defaultValue={projectTypes[0]}>
                                {projectTypes.map((type) => (
                                    <option key={type} className="bg-surface">
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="block">
                            <span className="font-mono text-xs text-fog">Project details</span>
                            <textarea
                                rows={4}
                                required
                                placeholder="What are you building?"
                                className={`${inputClass} resize-none`}
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand/90"
                        >
                            Submit Project
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

