"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min";

export function VantaFog({ children }: { children?: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          highlightColor: 0x7b2ff7,
          midtoneColor:   0xc084fc,
          lowlightColor:  0xf5f3ff,
          baseColor:      0xffffff,
          blurFactor:     0.6,
          zoom:           1,
          speed:          1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect?.destroy();
    };
  }, [vantaEffect?.current]);

  return (
    <div ref={vantaRef} className="">
      {children}
    </div>
  );
}
