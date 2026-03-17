"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min";
import { useTheme } from "next-themes";

export function VantaFog({ children }: { children?: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }

    const isDark = theme === "dark";

    const effect = FOG({
      el: vantaRef.current,
      THREE: THREE,

      // dark mode colors
      ...(isDark
        ? {
            // TODO: determine colors
            highlightColor: 0xffc300,
            midtoneColor: 0x341e1b,
            lowlightColor: 0x172c93,
            baseColor: 0x163669,
          }
        : {
            // light mode colors
            highlightColor: 0x7b2ff7,
            midtoneColor: 0xc084fc,
            lowlightColor: 0xf5f3ff,
            baseColor: 0xffffff,
          }),

      blurFactor: 0.8,
      zoom: 0.5,
      speed: 0.3,
    });

    setVantaEffect(effect);

    return () => {
      effect.destroy();
    };
  }, [theme]);

  return (
    <div ref={vantaRef} className="w-full h-full">
      {children}
    </div>
  );
}
