# Ottavora

A one-page site for an online-only Ottawa shop selling paintings, prints, ceramics, and other handmade work by local artists and makers. Built with Next.js 16, Tailwind CSS 4, and Motion. The design uses cream, ink, and gold colours, a Fraunces serif with italic accent words, and slow, soft animations.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| What | File |
| --- | --- |
| All text, prices, artists, FAQ, image links | `src/lib/data.ts` |
| Colours and fonts | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |
| Reusable animations | `src/components/motion.tsx` |
| Page sections, in order | `src/app/page.tsx` → `src/components/sections.tsx` |

## Replace before launch

- **Testimonials** in `data.ts` are samples. Replace them with real customer reviews (with permission). Don't publish made-up reviews.
- **Phone, email, and the stats** (40+ artists, 1,200 pieces, 50%) are placeholders.
- **Artist names and artwork titles** are invented. Use your real roster.
- **All images** are Unsplash stand-ins. Several show mountains or seascapes, which Ottawa doesn't have.
- The brand name "Ottavora" is a suggestion. Check that it's free to use in Ontario before committing to it.

## Photo shot list

Shoot in soft daylight on a cream or warm-white wall to match the palette. Save the files to `public/images/` and update `data.ts`.

| Section | Suggested photo | Ratio |
| --- | --- | --- |
| Hero (main) | A piece from your shop in a real Ottawa living room, ideally with a window and warm light | 4:5 |
| Hero (small frame) | Close-up of a frame corner: wood grain, mat bevel, and signature | 3:4 |
| Product cards | Flat, colour-correct scans of each artwork. The site draws the frame and mat around them. | 4:5 |
| Rideau & River | Rideau Canal at golden hour, Dow's Lake, or the Ottawa River from Westboro Beach | 3:4 |
| Gatineau Hills | Pink Lake lookout, Champlain Lookout in fall, or a misty Wolf Trail | 3:4 |
| Capital Winters | Skaters on the canal, Parliament in snow, or Winterlude ice sculptures | 3:4 |
| Artists | A local artist or maker at work (hands, brushes, clay, loom) | 4:5 |
| Artists (detail) | Palette or print drying rack, shot from above | 1:1 |
| Custom framing (optional extra) | Staff cutting a mat or joining a corner at the workbench | 16:9 |
| Journal | Gallery wall in a Centretown apartment; frame samples on a counter; tulips at Commissioners Park | 4:3 |
| Contact | A styled flat-lay of a few pieces being wrapped for shipping | 4:3 |

## Animations

- **Hero**: heading words slide up one at a time; the photo wipes in from the bottom inside an arch; a small framed photo floats in at an angle; a "Made in Ottawa · Fait à Ottawa" badge spins slowly. Scrolling moves the layers at different speeds.
- **Header**: hides when you scroll down and comes back when you scroll up; nav letters roll on hover; the bag count flips when an item is added.
- **Ticker**: a slow, endless strip of the shop's promises.
- **Section headings**: word-by-word reveal with italic gold accent words.
- **Product cards**: artwork shown framed on a mat; the frame lifts and the art zooms slightly on hover; "Add to bag" slides up (always visible on touch screens).
- **Collections**: arched cards that zoom on hover, with a short description that fades in.
- **Philosophy quote**: each word lights up as you scroll past it.
- **Artists**: parallax photo, and the numbers count up when they come into view.
- **Testimonials**: two rows scrolling in opposite directions; they pause on hover.
- **FAQ**: smooth open and close, with the + turning into ×.
- **Footer**: a large "Ottavora." wordmark rises into place.

All animations respect the system "reduce motion" setting where it matters (marquees stop, counters jump to the final number).

## Next steps

- Connect a real cart and checkout (Shopify Storefront API, Square, or Stripe) in place of the demo counter in `src/components/cart.tsx`.
- Add pages for the catalogue, collections, and journal posts (`src/app/catalogue/page.tsx` and so on).
- Add a French version (`/fr`), which matters to Ottawa–Gatineau customers.
