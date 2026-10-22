import Image from "next/image";
import {
  bestSellers,
  collections,
  features,
  images,
  newArrivals,
  philosophy,
  posts,
  shop,
  stats,
  testimonials,
  tickerItems,
} from "@/lib/data";
import { FaqList } from "./Faq";
import { CountUp, ParallaxImage, Reveal, RollText, ScrollHighlight, SplitHeading, type Segment } from "./motion";
import { ProductCard } from "./ProductCard";

function SectionHead({
  title,
  intro,
  link,
}: {
  title: Segment[];
  intro?: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <SplitHeading segments={title} className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl" />
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-ink-soft">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
      {link && (
        <Reveal delay={0.3}>
          <a href={link.href} className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
            <span className="border-b border-ink pb-1">
              <RollText text={link.label} />
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      )}
    </div>
  );
}

export function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="mt-20 overflow-hidden border-y border-ink/10 bg-ink py-5 text-cream md:mt-28">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap" style={{ ["--marquee-duration" as string]: "35s" }}>
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-xl italic md:text-2xl">
            {t}
            <span className="text-gold not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="border-t border-ink/15 pt-6">
              <span className="font-serif text-sm text-bronze">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BestSellers() {
  return (
    <section id="best-sellers" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <SectionHead
        title={["Our most", { accent: "collected" }, "pieces"]}
        intro="The paintings, prints, and handmade pieces Ottawa keeps coming back for."
        link={{ href: "#best-sellers", label: "View all" }}
      />
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {bestSellers.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 bg-sand/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          title={["Shop by", { accent: "collection" }]}
          intro="Browse by place, season, and mood — the Ottawa you know, seen by the people who live here."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.12}>
              <a href={`#${c.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-t-[200px]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 pr-20 text-cream">
                  <p className="text-xs uppercase tracking-[0.2em] text-sand/80">{c.count} works</p>
                  <h3 className="mt-2 font-serif text-3xl">{c.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-sand/90 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 [@media(hover:none)]:max-h-20 [@media(hover:none)]:opacity-100">
                    {c.blurb}
                  </p>
                </div>
                <span className="absolute bottom-7 right-7 grid h-11 w-11 place-items-center rounded-full bg-cream text-ink transition-transform duration-500 group-hover:-rotate-45">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-28 text-center md:px-8 md:py-40">
      <Reveal>
        <span className="font-serif text-4xl text-gold">“</span>
      </Reveal>
      <ScrollHighlight text={philosophy} className="font-serif text-3xl leading-snug tracking-tight md:text-5xl" />
      <Reveal delay={0.2}>
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-bronze">— The {shop.name} team</p>
      </Reveal>
    </section>
  );
}

export function Artists() {
  return (
    <section className="bg-ink py-20 text-cream md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <div className="relative">
          <ParallaxImage
            src={images.artist}
            alt="Well-used paint brushes in a local artist's studio"
            className="aspect-[4/5] rounded-b-[200px]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <Reveal className="absolute -right-4 -top-8 hidden w-40 md:block lg:w-48" delay={0.3}>
            <div className="border-[8px] border-cream shadow-2xl">
              <div className="relative aspect-square">
                <Image src={images.artistDetail} alt="Paint and brushes on a palette" fill sizes="200px" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <SplitHeading
            segments={["The artists", { accent: "behind" }, "the work"]}
            className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl [&_.accent]:text-gold"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-sand/80">
              Every piece in our shop was made within an hour of Parliament Hill — by painters in
              Vanier, photographers in Chelsea, potters in Wakefield, and weavers in the Glebe. We know
              their studios and their stories, and half of every sale goes straight back to them.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Are you a local artist or maker? We review new portfolios every season.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/15 pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <p className="font-serif text-4xl text-gold md:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-sand/70">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <a
              href={`mailto:${shop.email}?subject=Artist%20portfolio`}
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold"
            >
              <RollText text="Submit your portfolio" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <SectionHead
        title={["Fresh from the", { accent: "workbench" }]}
        intro="New work from our artists and makers, added this month."
        link={{ href: "#new-arrivals", label: "View all" }}
      />
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {newArrivals.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

const steps = [
  { title: "Send a photo", body: "A poster, a painting, a jersey, a family photo — anything worth keeping." },
  { title: "Choose together", body: "We'll email you mouldings and mats from 200+ options. No rush, no pressure." },
  { title: "Ship it, get it back", body: "Send us the piece and we'll return it framed. Hanging hardware is always included." },
];

export function CustomFraming() {
  return (
    <section id="framing" className="scroll-mt-24 border-y border-ink/10 bg-sand/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          title={["Send us anything", { accent: "worth keeping" }]}
          intro="Custom framing for the art you already love, done by hand and arranged online."
          link={{ href: "#contact", label: "Get a quote" }}
        />
        <ol className="grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="relative">
                <span className="font-serif text-7xl text-gold/60 md:text-8xl">{i + 1}</span>
                <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Journal() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHead
        title={["Stories from the", { accent: "studio" }]}
        intro="Hanging tips, framing guides, and visits with the people who make the work."
        link={{ href: "#journal", label: "Read the journal" }}
      />
      <div className="grid gap-10 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.12}>
            <a href={`#${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">
                {p.date} · {p.minutes} min read
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug">
                <span className="bg-gradient-to-r from-ink to-ink bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                  {p.title}
                </span>
              </h3>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const rows = [testimonials.slice(0, half), testimonials.slice(half)];
  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead title={["What", { accent: "collectors" }, "say"]} />
      </div>
      <div className="marquee-pause flex flex-col gap-6">
        {rows.map((row, r) => (
          <div
            key={r}
            className={`${r === 0 ? "animate-marquee" : "animate-marquee-reverse"} flex w-max gap-6`}
            style={{ ["--marquee-duration" as string]: "60s" }}
          >
            {[...row, ...row, ...row, ...row].map((t, i) => (
              <figure key={i} className="w-[340px] shrink-0 rounded-2xl border border-ink/10 bg-white/60 p-8 md:w-[420px]">
                <p className="text-gold">★★★★★</p>
                <blockquote className="mt-4 font-serif text-xl leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
                  {t.name} · {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
      <div className="md:col-span-5">
        <SplitHeading
          segments={["Questions,", { accent: "answered simply" }]}
          className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-ink-soft">
            Still wondering? Email us at {shop.email} — a real person usually replies within a day.
          </p>
        </Reveal>
      </div>
      <div className="md:col-span-7">
        <FaqList />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-ink text-cream md:grid-cols-2">
        <ParallaxImage
          src={images.shop}
          alt="Framed works on white walls"
          className="min-h-[320px]"
          sizes="(min-width: 768px) 50vw, 100vw"
          strength={40}
        />
        <div className="p-8 md:p-14">
          <SplitHeading
            segments={["Come say", { accent: "bonjour" }]}
            className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl [&_.accent]:text-gold"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-sand/80">
              We&apos;re an online-only shop, so there&apos;s no storefront to visit — but there&apos;s
              always a person on the other end. Ask about a piece, a commission, or a framing quote.
            </p>
            <ul className="mt-8 space-y-2">
              <li>
                <a href={`mailto:${shop.email}`} className="font-serif text-2xl underline decoration-gold underline-offset-4">
                  {shop.email}
                </a>
              </li>
              <li>
                <a href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`} className="text-sand/80 hover:text-cream">
                  {shop.phone}
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${shop.email}?subject=Hello`}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-cream"
            >
              <RollText text="Send us a note" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <h3 className="font-serif text-3xl">
            First look at <span className="accent">new work</span>
          </h3>
          <p className="mt-3 text-ink-soft">One email a month. New pieces, maker stories, and early access to drops.</p>
          <form className="mt-6 flex max-w-md overflow-hidden rounded-full border border-ink/25 focus-within:border-ink">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input id="email" type="email" required placeholder="you@example.com" className="flex-1 bg-transparent px-6 py-4 outline-none" />
            <button className="bg-ink px-6 text-xs uppercase tracking-[0.2em] text-cream hover:bg-bronze">Subscribe</button>
          </form>
        </div>
        <nav className="grid grid-cols-2 gap-8 text-sm md:col-span-7 md:grid-cols-3">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Shop</p>
            <ul className="space-y-2">
              <li><a href="#best-sellers" className="hover:text-bronze">Catalogue</a></li>
              <li><a href="#new-arrivals" className="hover:text-bronze">New arrivals</a></li>
              <li><a href="#framing" className="hover:text-bronze">Custom framing</a></li>
              <li><a href="#gift-cards" className="hover:text-bronze">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Collections</p>
            <ul className="space-y-2">
              {collections.map((c) => (
                <li key={c.slug}><a href={`#${c.slug}`} className="hover:text-bronze">{c.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
            <ul className="space-y-2">
              <li><a href={`mailto:${shop.email}`} className="hover:text-bronze">{shop.email}</a></li>
              <li><a href={`tel:${shop.phone.replace(/[^+\d]/g, "")}`} className="hover:text-bronze">{shop.phone}</a></li>
              <li><a href="#instagram" className="hover:text-bronze">Instagram</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <p className="mx-auto mt-16 max-w-7xl px-5 text-sm leading-relaxed text-muted md:px-8">
        {shop.name} is based on the unceded, unsurrendered territory of the Anishinaabe Algonquin Nation.
      </p>

      <Reveal y={80}>
        <p className="select-none overflow-hidden whitespace-nowrap px-5 pt-10 text-center font-serif text-[17vw] leading-[0.8] tracking-tighter text-ink md:px-8">
          {shop.shortName}<span className="accent">.</span>
        </p>
      </Reveal>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:justify-between md:px-8">
        <p>© 2026 {shop.name}. Made in Ottawa.</p>
        <p className="flex gap-6">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#returns">Returns</a>
        </p>
      </div>
    </footer>
  );
}
