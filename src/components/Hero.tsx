"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { images, shop } from "@/lib/data";
import { RollText, SplitHeading } from "./motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const smallY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="flex flex-col justify-center md:col-span-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 text-xs uppercase tracking-[0.25em] text-bronze"
          >
            {shop.tagline}
          </motion.p>

          <SplitHeading
            as="h1"
            immediate
            delay={0.3}
            className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            segments={["Art made in the", { accent: "capital," }, "for the walls you", { accent: "come home to." }]}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            Paintings, prints, ceramics, and other handmade work by artists and makers from across
            Ottawa–Gatineau, delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#best-sellers"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-bronze"
            >
              <RollText text="Explore the catalogue" />
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#new-arrivals"
              className="inline-flex items-center rounded-full border border-ink/25 px-7 py-4 text-sm uppercase tracking-[0.15em] transition-colors hover:border-ink"
            >
              <RollText text="See what's new" />
            </a>
          </motion.div>
        </div>

        <div className="relative md:col-span-6">
          {/* Main image wipes in from the bottom, then drifts on scroll */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, delay: 0.4, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] md:ml-10"
          >
            <motion.div
              style={{ y: imgY }}
              initial={{ scale: 1.25 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 2, delay: 0.4, ease }}
              className="absolute inset-0"
            >
              <Image
                src={images.hero}
                alt="A framed print hanging above a mustard armchair in a bright living room"
                fill
                preload
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Small floating frame */}
          <motion.div
            style={{ y: smallY }}
            initial={{ opacity: 0, x: -30, rotate: -6 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 1.2, delay: 1.2, ease }}
            className="absolute -bottom-6 left-0 hidden w-44 border-[10px] border-white bg-white shadow-2xl shadow-ink/20 md:block lg:w-52"
          >
            <div className="relative aspect-[3/4]">
              <Image src={images.heroSecondary} alt="A gallery wall of framed prints" fill sizes="200px" className="object-cover" />
            </div>
          </motion.div>

          {/* Rotating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease }}
            className="absolute -top-4 right-2 grid h-28 w-28 place-items-center md:right-0"
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-ink text-[9.5px] uppercase tracking-[0.2em]">
                <textPath href="#circle">Made in Ottawa · Fait à Ottawa ·</textPath>
              </text>
            </motion.svg>
            <span className="font-serif text-2xl text-bronze">✦</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
