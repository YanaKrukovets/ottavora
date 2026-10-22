// All shop content lives here so it's easy to edit in one place.
// Images are Unsplash placeholders — replace them with photos of your real artwork
// (see README.md for a shot list).

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const shop = {
  name: "Ottavora",
  shortName: "Ottavora",
  tagline: "Handmade art from Ottawa · Shop online",
  // Placeholder contact details — replace before launch.
  email: "hello@ottavora.ca",
  phone: "+1 (613) 555-0142",
};

export type Product = {
  slug: string;
  title: string;
  artist: string;
  medium: string;
  price: number;
  image: string;
  badge?: string;
};

export const bestSellers: Product[] = [
  {
    slug: "rideau-golden-hour",
    title: "Rideau at Golden Hour",
    artist: "Jonah Leblanc",
    medium: "Archival photo print",
    price: 185,
    image: u("1501785888041-af3ef285b470"),
    badge: "Best seller",
  },
  {
    slug: "gatineau-morning-mist",
    title: "Gatineau Morning Mist",
    artist: "Priya Nair",
    medium: "Archival photo print",
    price: 165,
    image: u("1470071459604-3b5ec3a7fe05"),
  },
  {
    slug: "first-snow-mooneys-bay",
    title: "First Snow, Mooney's Bay",
    artist: "Hannah Kowalski",
    medium: "Archival photo print",
    price: 210,
    image: u("1483664852095-d6cc6870702d"),
    badge: "Few left",
  },
  {
    slug: "still-life-with-tulips",
    title: "Still Life with Tulips",
    artist: "Théo Gagnon",
    medium: "Giclée of oil on linen",
    price: 240,
    image: u("1579783902614-a3fb3927b6a5"),
  },
  {
    slug: "pink-lake-trail",
    title: "Pink Lake Trail",
    artist: "Priya Nair",
    medium: "Archival photo print",
    price: 165,
    image: u("1441974231531-c6227db76b6e"),
  },
  {
    slug: "byward-market-colours",
    title: "ByWard Market Colours",
    artist: "Amara Osei",
    medium: "Original acrylic on canvas",
    price: 680,
    image: u("1541961017774-22349e4a1262"),
    badge: "Original",
  },
];

export const newArrivals: Product[] = [
  {
    slug: "britannia-shoreline",
    title: "Britannia Shoreline",
    artist: "Jonah Leblanc",
    medium: "Archival photo print",
    price: 175,
    image: u("1503803548695-c2a7b4a5b875"),
    badge: "New",
  },
  {
    slug: "ottawa-valley-pastoral",
    title: "Ottawa Valley Pastoral",
    artist: "Théo Gagnon",
    medium: "Giclée of watercolour",
    price: 195,
    image: u("1578301978693-85fa9c0320b9"),
    badge: "New",
  },
  {
    slug: "autumn-bridge-hogs-back",
    title: "Autumn Bridge, Hog's Back",
    artist: "Hannah Kowalski",
    medium: "Archival photo print",
    price: 185,
    image: u("1447752875215-b2761acb3c5d"),
    badge: "New",
  },
];

export const collections = [
  {
    slug: "rideau-and-river",
    title: "Rideau & River",
    blurb: "Canal light, open water, and slow summer evenings.",
    count: 24,
    image: u("1501785888041-af3ef285b470", 1000),
  },
  {
    slug: "gatineau-hills",
    title: "Gatineau Hills",
    blurb: "Forest trails, fog, and the quiet just across the bridge.",
    count: 31,
    image: u("1441974231531-c6227db76b6e", 1000),
  },
  {
    slug: "capital-winters",
    title: "Capital Winters",
    blurb: "Snow, skate trails, and the long blue hour of January.",
    count: 18,
    image: u("1483664852095-d6cc6870702d", 1000),
  },
];

export const features = [
  {
    title: "Made in Ottawa",
    body: "Every piece comes from an artist or maker living in the National Capital Region.",
  },
  {
    title: "Made by hand",
    body: "Paintings, prints, ceramics, textiles, woodwork, and more — each one made by a person, not a factory.",
  },
  {
    title: "Online only",
    body: "No storefront, no markup for one. Browse from your couch and we'll bring it to your door.",
  },
  {
    title: "Free local delivery",
    body: "Free inside the Greenbelt, shipping across Canada, and 30-day returns on prints.",
  },
];

export const tickerItems = [
  "Local artists & makers",
  "Handmade in Ottawa",
  "Free delivery inside the Greenbelt",
  "Bonjour · Hello",
  "Paintings, prints, ceramics & more",
  "Shop online, delivered to your door",
];

export const philosophy =
  "We think the best art isn't the loudest thing in the room. It's the piece that catches the light on a February afternoon and reminds you why you stayed.";

// Placeholder numbers — replace with your real figures.
export const stats = [
  { value: 40, suffix: "+", label: "Local artists" },
  { value: 1200, suffix: "", label: "Handmade pieces sold" },
  { value: 50, suffix: "%", label: "Of every sale goes to the artist" },
];

export const posts = [
  {
    slug: "hang-art-like-a-gallerist",
    title: "How to hang art like a gallerist (even in a Centretown one-bedroom)",
    minutes: 4,
    date: "October 14, 2026",
    image: u("1513519245088-0e12902e5a38", 900),
  },
  {
    slug: "choosing-a-frame",
    title: "Oak, walnut, or black? Choosing a frame that fits your space",
    minutes: 3,
    date: "October 2, 2026",
    image: u("1586023492125-27b2c045efd7", 900),
  },
  {
    slug: "studio-visit-tulips",
    title: "Studio visit: painting the Tulip Festival without the crowds",
    minutes: 5,
    date: "September 19, 2026",
    image: u("1490750967868-88aa4486c946", 900),
  },
];

// SAMPLE testimonials for layout only. Replace with real customer reviews
// (with permission) before the site goes live.
export const testimonials = [
  { quote: "Ordered on Sunday, on my wall by Thursday. It looks like it belongs in the National Gallery.", name: "Sample Customer", place: "The Glebe" },
  { quote: "I found a print of the exact spot on the canal where we got engaged.", name: "Sample Customer", place: "Old Ottawa South" },
  { quote: "I bought a hand-thrown mug for my mom and she uses it every single morning.", name: "Sample Customer", place: "Westboro" },
  { quote: "Delivered the same week, hung the same night. Our living room finally feels finished.", name: "Sample Customer", place: "Orléans" },
  { quote: "Knowing the artist lives twenty minutes away makes it mean so much more.", name: "Sample Customer", place: "Kanata" },
  { quote: "Friendly, unpretentious, and genuinely good art. Ottawa needed this.", name: "Sample Customer", place: "Centretown" },
];

export const faqs = [
  {
    q: "What kinds of art do you sell?",
    a: "Original paintings and archival prints, plus ceramics, textiles, jewellery, woodwork, and other handmade pieces. If a local artist or maker made it by hand, it belongs here.",
  },
  {
    q: "Will my print fade over time?",
    a: "No. We print with archival pigment inks on acid-free cotton rag paper, rated for more than 100 years indoors. Keep it out of direct afternoon sun and it will outlast all of us.",
  },
  {
    q: "Can I see a piece before I buy?",
    a: "We're an online-only shop, so there's no storefront — but just ask and we'll send extra photos, close-ups, or a short video of any piece.",
  },
  {
    q: "Do you frame art I already own?",
    a: "Yes. Email us a photo of your print, painting, poster, jersey, or family photo and we'll suggest mouldings and mats. Then ship it to us and we'll send it back framed and ready to hang.",
  },
  {
    q: "Do you ship outside Ottawa?",
    a: "We ship across Canada in reinforced crates. Delivery is free inside the Greenbelt, and we do flat-rate delivery to Gatineau, Kanata, Orléans, and Barrhaven.",
  },
  {
    q: "What if it doesn't work in my space?",
    a: "Prints can be returned within 30 days for a full refund. Originals and custom framing are final sale, but we're happy to help you find the right fit first.",
  },
  {
    q: "Can I order a custom size?",
    a: "Most prints are available in custom sizes up to 40\" × 60\". Send us a note with your wall measurements and we'll suggest what works.",
  },
];

export const images = {
  hero: u("1586023492125-27b2c045efd7", 1600),
  heroSecondary: u("1513519245088-0e12902e5a38", 900),
  artist: u("1460661419201-fd4cecdf8a8b", 1200),
  artistDetail: u("1513364776144-60967b0f800f", 800),
  shop: u("1518998053901-5348d3961a04", 1600),
};
