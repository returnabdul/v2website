"use client";

import { useState } from "react";
import { Menu, X }  from "lucide-react";
import { Button }   from "@src/components/ui/button";
import Link         from "next/link";
import Image        from "next/image";

const navItems = [
    { label: "Community", href: "#community" },
    { label: "Research", href: "#research" },
    { label: "Blog Article", href: "#blog" },
    { label: "Partners", href: "/partners" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-border">
            <div className="container flex items-center justify-between h-16">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="URAI Logo" height={10} width={10} className="h-8 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) =>
                        item.href.startsWith("/") ? (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        )
                    )}
                    <Button size="sm">Become a Member</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden bg-background border-b border-border pb-4">
                    <div className="container flex flex-col gap-3">
                        {navItems.map((item) =>
                            item.href.startsWith("/") ? (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                        <Button size="sm" className="w-fit">
                            Become a Member
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
