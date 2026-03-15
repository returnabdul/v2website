"use client";

import { TextAnimate } from "@src/components/ui/text-animate";

export function Hero1() {
  return (
  <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4">

        {/* headline */}
        <TextAnimate
          animation="blurInUp"
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-snug"
        >
          {`Regensburg's first student AI initiative`}
        </TextAnimate>

        {/* subtitle */}
        <TextAnimate
          animation="blurInUp"
          as="p"
          className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          delay={0.5}
        >
          {`Connecting motivated students with real research and industry projects`}
        </TextAnimate>

      </div>
    </section>
  );
}
