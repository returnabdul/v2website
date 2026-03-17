"use client";

import { TextAnimate } from "@src/components/ui/text-animate";
import { VantaFog } from "@src/components/ui/fog";
import landingPageConfig from "@src/config/landingPage";
import { cn } from "@src/lib/utils";

export function Hero1() {
  return (
  <div className={cn("bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
                      "dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950")}>

      <VantaFog>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

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

        </section>
      </VantaFog>
    </div>
  );
}
