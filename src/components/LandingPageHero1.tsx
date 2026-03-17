"use client";

import { TextAnimate } from "@src/components/ui/text-animate";
import { VantaFog } from "@src/components/ui/fog";

export function Hero1() {
  return (
    <VantaFog>
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1>All the content of the first page goes here!</h1>
      </div>
    </VantaFog>
  );
}
