"use client";

import { Button } from "@src/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Tailwind radial gradient background */}
            <div className="absolute inset-0 bg-gradient-radial from-white via-purple-100 via-purple-300 to-purple-700" />

            <div className="relative z-10 text-center px-4 animate-fade-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                    Regensburg's
                    <br />
                    first student <span className="text-primary">AI</span> initiative
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                    Shaping the future of artificial intelligence — together.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    <Button variant="outline" size="lg">
                        Become a Partner
                    </Button>
                    <Button size="lg">
                        Become a Member
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
        </section>
    );
}
