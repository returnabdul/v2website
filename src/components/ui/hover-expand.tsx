"use client";

import * as React from "react";
import { motion } from "motion/react";

import { cn } from "@src/lib/utils";

export interface HoverExpandItem {
  label: string;
  /** e.g. country, year, category */
  sublabel?: string;
  image: string;
  imageAlt?: string;
  /** short descriptor shown when expanded */
  description?: string;
}

export interface HoverExpandProps {
  items: HoverExpandItem[];
  /**
   * Row height when collapsed, in pixels.
   * @default 68
   */
  collapsedHeight?: number;
  /**
   * Row height when expanded, in pixels.
   * @default 320
   */
  expandedHeight?: number;
  className?: string;
}

export function HoverExpand({
  items,
  collapsedHeight = 68,
  expandedHeight = 320,
  className,
}: HoverExpandProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("flex flex-col w-full", className)}>
      <div className="w-full border-t border-current opacity-15" />

      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && !isHovered;

        return (
          <React.Fragment key={i}>
            <motion.div
              className="relative w-full overflow-hidden cursor-default"
              animate={{
                height: isHovered ? expandedHeight : collapsedHeight,
                opacity: isOtherHovered ? 0.38 : 1,
              }}
              transition={{
                height: {
                  type: "spring",
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                },
                opacity: { duration: 0.22, ease: "easeOut" },
              }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 1.06,
                }}
                transition={{
                  opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                  scale: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
                }}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              </motion.div>

              <div className="absolute inset-0 flex items-end px-5 pb-4">
                <div className="flex w-full items-end justify-between gap-4">
                  <div className="flex items-baseline gap-3 min-w-0">
                    <motion.span
                      className="text-xs tabular-nums shrink-0 opacity-40"
                      animate={{
                        color: isHovered ? "#ffffff" : "currentColor",
                        opacity: isHovered ? 0.5 : 0.4,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.span
                      className="font-semibold tracking-tight truncate"
                      style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
                      animate={{
                        color: isHovered ? "#ffffff" : "currentColor",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {item.description && (
                      <motion.span
                        className="text-sm text-white/70 truncate hidden sm:block"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -8,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isHovered ? 0.12 : 0,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        — {item.description}
                      </motion.span>
                    )}
                  </div>

                  {item.sublabel && (
                    <motion.span
                      className="text-xs tracking-widest uppercase shrink-0"
                      animate={{
                        color: isHovered
                          ? "rgba(255,255,255,0.55)"
                          : "currentColor",
                        opacity: isHovered ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.sublabel}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="w-full border-t border-current opacity-15" />
          </React.Fragment>
        );
      })}
    </div>
  );
}










































// update with
// "use client";

// import * as React from "react";
// import { motion } from "motion/react";

// import { cn } from "@src/lib/utils";

// export interface HoverExpandItem {
//   label: string;
//   /** e.g. country, year, category */
//   sublabel?: string;
//   /** short descriptor shown when expanded */
//   description?: string;
//   /** longer body text revealed on hover */
//   body?: string;
// }

// export interface HoverExpandProps {
//   items: HoverExpandItem[];
//   /**
//    * Row height when collapsed, in pixels.
//    * @default 68
//    */
//   collapsedHeight?: number;
//   /**
//    * Row height when expanded, in pixels.
//    * @default 320
//    */
//   expandedHeight?: number;
//   className?: string;
// }

// export function HoverExpand({
//   items,
//   collapsedHeight = 68,
//   expandedHeight = 320,
//   className,
// }: HoverExpandProps) {
//   const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

//   return (
//     <div className={cn("flex flex-col w-full", className)}>
//       <div className="w-full border-t border-current opacity-15" />

//       {items.map((item, i) => {
//         const isHovered = hoveredIndex === i;
//         const isOtherHovered = hoveredIndex !== null && !isHovered;

//         return (
//           <React.Fragment key={i}>
//             <motion.div
//               className="relative w-full overflow-hidden cursor-default"
//               animate={{
//                 height: isHovered ? expandedHeight : collapsedHeight,
//                 opacity: isOtherHovered ? 0.38 : 1,
//               }}
//               transition={{
//                 height: {
//                   type: "spring",
//                   stiffness: 280,
//                   damping: 32,
//                   mass: 0.9,
//                 },
//                 opacity: { duration: 0.22, ease: "easeOut" },
//               }}
//               onHoverStart={() => setHoveredIndex(i)}
//               onHoverEnd={() => setHoveredIndex(null)}
//             >
//               {/* Expanded text background panel */}
//               <motion.div
//                 className="absolute inset-0 w-full h-full bg-current"
//                 initial={false}
//                 animate={{ opacity: isHovered ? 0.06 : 0 }}
//                 transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
//               />

//               {/* Accent bar on the left */}
//               <motion.div
//                 className="absolute left-0 top-0 bottom-0 w-[3px] bg-current"
//                 initial={false}
//                 animate={{
//                   scaleY: isHovered ? 1 : 0,
//                   opacity: isHovered ? 0.6 : 0,
//                 }}
//                 style={{ originY: 1 }}
//                 transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//               />

//               {/* Expanded body text */}
//               {(item.body || item.description) && (
//                 <motion.div
//                   className="absolute left-12 right-5 top-5"
//                   initial={false}
//                   animate={{
//                     opacity: isHovered ? 1 : 0,
//                     y: isHovered ? 0 : 10,
//                   }}
//                   transition={{
//                     duration: 0.35,
//                     delay: isHovered ? 0.1 : 0,
//                     ease: [0.23, 1, 0.32, 1],
//                   }}
//                 >
//                   {item.description && (
//                     <p className="text-sm font-medium opacity-50 uppercase tracking-widest mb-2">
//                       {item.description}
//                     </p>
//                   )}
//                   {item.body && (
//                     <p className="text-base leading-relaxed opacity-75 max-w-prose">
//                       {item.body}
//                     </p>
//                   )}
//                 </motion.div>
//               )}

//               {/* Bottom row: index + label + sublabel */}
//               <div className="absolute inset-0 flex items-end px-5 pb-4">
//                 <div className="flex w-full items-end justify-between gap-4">
//                   <div className="flex items-baseline gap-3 min-w-0">
//                     <motion.span
//                       className="text-xs tabular-nums shrink-0"
//                       animate={{ opacity: isHovered ? 0.5 : 0.4 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {String(i + 1).padStart(2, "0")}
//                     </motion.span>

//                     <motion.span
//                       className="font-semibold tracking-tight truncate"
//                       style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
//                       animate={{ opacity: isHovered ? 1 : 0.85 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {item.label}
//                     </motion.span>
//                   </div>

//                   {item.sublabel && (
//                     <motion.span
//                       className="text-xs tracking-widest uppercase shrink-0"
//                       animate={{ opacity: isHovered ? 0.6 : 0.45 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {item.sublabel}
//                     </motion.span>
//                   )}
//                 </div>
//               </div>
//             </motion.div>

//             <div className="w-full border-t border-current opacity-15" />
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// }
