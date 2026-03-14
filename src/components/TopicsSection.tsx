import { Code, BarChart3, Cpu } from "lucide-react";

const topics = [
    {
        icon: Code,
        title: "Machine Learning",
        desc: "Deep Learning, neuronale Netze und moderne ML-Algorithmen für reale Anwendungen.",
    },
    {
        icon: BarChart3,
        title: "Data Science",
        desc: "Big-Data-Analysen, statistische Modellierung und datengetriebene Entscheidungen.",
    },
    {
        icon: Cpu,
        title: "AI Systems",
        desc: "Design intelligenter Systeme, Automatisierung und skalierbare KI-Infrastruktur.",
    },
];

export function TopicsSection() {
    return (
        <section className="py-24 bg-background" id="research">
            <div className="container">
                <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                    Research Areas
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-2xl mb-16 leading-snug">
                    Unsere Schwerpunkte in Forschung & Praxis
                </h2>

                <div className="grid sm:grid-cols-3 gap-8">
                    {topics.map((t, i) => (
                        <div
                            key={t.title}
                            className={`group rounded-xl border p-8 hover:shadow-lg transition-all duration-300 ${i === 0
                                    ? "border-primary/50 bg-primary/[0.03]"
                                    : "border-border bg-card hover:border-primary/40"
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors ${i === 0
                                    ? "bg-primary/10"
                                    : "bg-secondary group-hover:bg-primary/10"
                                }`}>
                                <t.icon className={`w-5 h-5 transition-colors ${i === 0
                                        ? "text-primary"
                                        : "text-secondary-foreground group-hover:text-primary"
                                    }`} />
                            </div>
                            <h3 className="font-semibold text-foreground text-lg mb-2">{t.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
