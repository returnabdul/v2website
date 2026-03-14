import { Button } from "@src/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="py-20 gradient-primary relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-primary-foreground/10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute right-20 bottom-0 w-40 h-40 rounded-full bg-primary-foreground/10 translate-y-1/3" />

            <div className="container relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                    Join our community
                </h2>
                <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-sm sm:text-base">
                    Be part of Regensburg's pioneering AI research group. Connect with like-minded
                    students, participate in workshops, and contribute to innovative projects.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        variant="secondary"
                        size="lg"
                        className="gap-2"
                    >
                        Become a Member <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
}
