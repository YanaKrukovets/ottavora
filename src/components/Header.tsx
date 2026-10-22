"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { shop } from "@/lib/data";
import { useCart } from "./cart";
import { RollText } from "./motion";

const links = [
  { href: "#best-sellers", label: "Catalogue" },
  { href: "#collections", label: "Collections" },
  { href: "#framing", label: "Custom framing" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  // Hide on scroll down, show on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
    setScrolled(y > 20);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          {links.slice(0, 2).map((l) => (
            <a key={l.href} href={l.href} className="text-ink-soft hover:text-ink">
              <RollText text={l.label} />
            </a>
          ))}
        </nav>

        <a href="#top" className="font-serif text-xl tracking-tight md:absolute md:left-1/2 md:-translate-x-1/2 md:text-2xl">
          {shop.name}
          <span className="accent">.</span>
        </a>

        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
          <nav className="hidden gap-8 md:flex">
            {links.slice(2).map((l) => (
              <a key={l.href} href={l.href} className="text-ink-soft hover:text-ink">
                <RollText text={l.label} />
              </a>
            ))}
          </nav>
          <button className="flex items-center gap-2" aria-label={`Bag, ${count} items`}>
            Bag
            <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-ink text-[10px] text-cream">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={count}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <ul className="flex flex-col gap-4 px-5 pb-8 pt-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="font-serif text-3xl">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
