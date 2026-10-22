"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into place when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export type Segment = string | { accent: string };

/**
 * Heading that reveals word by word, sliding up from behind a mask.
 * Pass `{ accent: "word" }` for the italic gold accent words.
 */
export function SplitHeading({
  segments,
  as: Tag = "h2",
  className,
  delay = 0,
  immediate = false,
}: {
  segments: Segment[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const words = segments.flatMap((s) =>
    typeof s === "string"
      ? s.split(" ").filter(Boolean).map((w) => ({ w, accent: false }))
      : s.accent.split(" ").map((w) => ({ w, accent: true })),
  );
  const MotionTag = motion[Tag];
  const trigger = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
      aria-label={words.map((x) => x.w).join(" ")}
    >
      {words.map(({ w, accent }, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${accent ? "accent" : ""}`}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </MotionTag>
  );
}

/** Text whose letters roll up one by one on hover (used in nav + buttons). */
export function RollText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`relative inline-flex overflow-hidden ${className ?? ""}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      aria-label={text}
    >
      {text.split("").map((ch, i) => (
        <span key={i} aria-hidden className="relative inline-block">
          <motion.span
            className="inline-block"
            variants={{ rest: { y: "0%" }, hover: { y: "-100%" } }}
            transition={{ duration: 0.35, delay: i * 0.02, ease }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
          <motion.span
            className="absolute left-0 top-full inline-block"
            variants={{ rest: { y: "0%" }, hover: { y: "-100%" } }}
            transition={{ duration: 0.35, delay: i * 0.02, ease }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Number that counts up when it scrolls into view. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: reduce ? 0 : 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-CA") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, value, reduce]);

  return <span ref={ref}>0{suffix}</span>;
}

/** Image that drifts slower than the page as you scroll, inside a clipped frame. */
export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  strength = 60,
  preload = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  strength?: number;
  preload?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }} className="absolute inset-[-80px]">
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      </motion.div>
    </div>
  );
}

/** Paragraph where each word brightens as you scroll through it. */
export function ScrollHighlight({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}
