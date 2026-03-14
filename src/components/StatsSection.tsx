const stats = [
    { value: "50+", label: "Members" },
    { value: "20+", label: "Projects" },
    { value: "10+", label: "Workshops" },
];

export function StatsSection() {
    return (
        <section className="relative py-20 overflow-hidden" id="community">
            <div className="absolute inset-0 gradient-primary opacity-80" />
            <div className="relative z-10 container text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                    What is URAI?
                </h2>
                <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10 text-sm sm:text-base">
                    A diverse community of students, researchers, and AI enthusiasts working
                    together to shape the future of artificial intelligence.
                </p>
                <div className="flex flex-wrap justify-center gap-12">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-4xl sm:text-5xl font-bold text-primary-foreground">{s.value}</p>
                            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
