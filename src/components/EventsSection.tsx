const events = [
    { title: "AI Workshop: LLMs", date: "März 2026" },
    { title: "Hackathon: Smart Campus", date: "April 2026" },
    { title: "Guest Talk: Ethics in AI", date: "Mai 2026" },
];

export function EventsSection() {
    return (
        <section className="py-20 bg-muted/50">
            <div className="container">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">
                    Last Events
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    {events.map((e) => (
                        <div
                            key={e.title}
                            className="aspect-[4/3] rounded-lg bg-muted flex flex-col items-center justify-center p-6 hover:bg-secondary transition-colors"
                        >
                            <p className="text-sm text-muted-foreground mb-2">{e.date}</p>
                            <h3 className="font-semibold text-foreground text-center">{e.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
