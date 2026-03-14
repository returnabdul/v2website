"use client";

import { Brain, Users, Lightbulb } from "lucide-react";

const pillars = [
    {
        icon: Brain,
        title: "Research",
        desc: "Yes we do research.",
    },
    {
        icon: Users,
        title: "Community",
        desc: "bring everyone together.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "new ideas.",
    },
];

export function MissionSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                    Our mission
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-3xl mb-6 leading-snug">
                    okay okay
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-16 text-base">
                    work in progress
                </p>

                <div className="grid sm:grid-cols-3 gap-8">
                    {pillars.map((p) => (
                        <div
                            key={p.title}
                            className="group rounded-xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                                <p.icon className="w-5 h-5 text-secondary-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="font-semibold text-foreground text-lg mb-2">{p.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
