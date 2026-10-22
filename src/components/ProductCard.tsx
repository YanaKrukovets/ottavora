"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { useCart } from "./cart";

const cad = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add();
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Artwork shown inside a "frame" with a white mat */}
      <div className="relative bg-sand/60 p-6 transition-colors duration-500 group-hover:bg-sand sm:p-8">
        <div className="relative aspect-[4/5] border-[6px] border-ink bg-white p-3 shadow-xl shadow-ink/15 transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.title} by ${product.artist}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
        </div>
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
            {product.badge}
          </span>
        )}
        <button
          onClick={onAdd}
          className="absolute inset-x-6 bottom-4 translate-y-3 rounded-full bg-ink py-3 text-xs uppercase tracking-[0.2em] text-cream opacity-0 transition-all duration-500 hover:bg-bronze focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-8 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100"
        >
          {added ? "Added ✓" : "Add to bag"}
        </button>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl leading-tight">{product.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {product.artist} · {product.medium}
          </p>
        </div>
        <p className="whitespace-nowrap font-serif text-lg">{cad.format(product.price)}</p>
      </div>
    </motion.article>
  );
}
