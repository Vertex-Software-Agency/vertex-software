"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Logo() {
    return (
        <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-gradient-to-br from-brand to-accent font-mono font-bold text-ink">
                V
            </span>
            <span className="font-semibold tracking-tight text-mist">Vertex Software</span>
        </a>
    );
}

export function Navbar() {
    const [open, setOpen] = useState(false)


    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Logo />
                <nav className="hidden items-center gap-8 text-sm text-fog md:flex" aria-label="Primary">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="transition-colors hover:text-mist">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    className="hidden items-center rounded-lg bg-mist px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-mist/85 md:inline-flex"
                >
                    Let&apos;s Build Something
                </a>
                <button
                    type="button"
                    className="grid size-10 place-items-center rounded-lg border border-white/10 text-mist md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>
            {open && (
                <nav
                    className="border-t border-white/5 bg-ink/95 px-6 py-4 backdrop-blur-xl md:hidden"
                    aria-label="Mobile"
                >
                    <ul className="space-y-1">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-fog transition-colors hover:bg-white/5 hover:text-mist"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="block rounded-lg bg-mist px-3 py-2.5 text-center text-sm font-semibold text-ink"
                            >
                                Let&apos;s Build Something
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
