"use client";

import { TextAnimate } from "@src/components/ui/text-animate";
import landingPageConfig from "@src/config/landingPage";

export function Hero2() {
  return (
    <section className="relative min-h-screen flex flex-cols items-center justify-center overflow-hidden pt-16">

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">

        <TextAnimate
          as="h1"
          animation="blurInUp"
          by="character"
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight
                      text-foreground leading-tight"
        >
          {landingPageConfig.title}
        </TextAnimate>

        <TextAnimate
          animation="blurInUp"
          by="character"
          delay={0.5}
          className="mt-6 text-lg text-muted-foreground"
        >
          {landingPageConfig.subtitle}
        </TextAnimate>

      </div>

      <div className="absolute inset-0 gradient-primary opacity-80" />
            <div className="relative z-10 container text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                    What is URAI?
                </h2>
                <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10 text-sm sm:text-base">
                    A diverse community of students, researchers, and AI enthusiasts working
                    together to shape the future of artificial intelligence.
                </p>
            </div>


    </section>


  );
}
