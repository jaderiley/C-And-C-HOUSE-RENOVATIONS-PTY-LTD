/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "C & C HOUSE RENOVATIONS (PTY) LTD",
    phone:     "+27 61 714 5812",
    whatsapp:  "+27 61 714 5812",
    address:   "27 2nd Ave, Johannesburg, South Africa",
    hours:     "Mon–Fri 7am–5pm · Sat 8am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg CBD",
      "Parktown",
      "Melville",
      "Westdene",
      "Brixton",
      "Newlands",
      "Sophiatown",
      "Auckland Park"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "C & C HOUSE RENOVATIONS (PTY) LTD — House renovations in Johannesburg",
    description: "C & C HOUSE RENOVATIONS (PTY) LTD provides professional home renovations in Johannesburg — kitchens, bathrooms, extensions and full home makeovers. 7 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "ember",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "House renovations · Johannesburg & surrounds",
    heroTitle:  "Tired space? <em>We will turn it into the home you actually want.</em>",
    heroLead:   "C & C HOUSE RENOVATIONS (PTY) LTD transforms kitchens, bathrooms and full homes across Johannesburg — clean project management, quality finishes and a clear quote before we start.",

    googleRating: "4.9",
    reviewsCount: "7",
    featuredQuote: "They gutted and rebuilt our kitchen and bathroom in three weeks flat. Tidy site every day and the finish is better than we hoped for.",
    featuredQuoteAuthor: "— Thabo M., Google review",

    trustSignals: ["Kitchen renovations", "Bathroom renovations", "Full home makeovers", "Clear fixed quotes"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Renovations that actually change how a home feels.",
    servicesLead:  "From a single room refresh to a full home renovation — planned properly and finished to a high standard.",
    services: [
      {
        icon:  "hardhat",
        title: "Kitchen renovations",
        desc:  "Full kitchen strip-outs and rebuilds — cabinetry, countertops, plumbing and electrical coordinated so the new kitchen works as well as it looks."
      },
      {
        icon:  "droplet",
        title: "Bathroom renovations",
        desc:  "Bathroom and en-suite remodels — tiling, waterproofing, fittings and layout changes done properly so there are no leaks down the line."
      },
      {
        icon:  "wrench",
        title: "Full home renovations",
        desc:  "Whole-house makeovers managed room by room or all at once — one team, one schedule, one point of contact throughout."
      },
      {
        icon:  "bolt",
        title: "Extensions & room additions",
        desc:  "Adding a room, opening up a floor plan or extending outward — structural work done to specification and matched to the existing build."
      },
      {
        icon:  "shield",
        title: "Flooring & ceilings",
        desc:  "Tiling, laminate, ceiling repairs and replacement, bulkheads and cornicing — the details that finish a renovation off properly."
      },
      {
        icon:  "broom",
        title: "Painting & finishing",
        desc:  "Interior and exterior painting, plastering and finishing touches that make a renovated space feel genuinely new."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of renovations we take on.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Kitchen renovations",
        title:   "Gutted and rebuilt",
        caption: "Old kitchens stripped out and rebuilt — cabinetry, countertops and services coordinated so the new layout actually works."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Bathroom renovations",
        title:   "Waterproofed and finished",
        caption: "Bathrooms remodelled with proper waterproofing first, then tiling and fittings — so the finish lasts, not just looks good on day one."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Full home renovations",
        title:   "One team, whole house",
        caption: "Multi-room renovations managed as a single project so trades are coordinated and the schedule actually holds."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Extensions",
        title:   "Built to match",
        caption: "Room additions and extensions built to engineering spec and finished to match the existing house, not stand out from it."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Finishes",
        title:   "Finished properly",
        caption: "Flooring, painting and final detailing completed to a high standard — the work that makes a renovation feel complete."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "C & C HOUSE RENOVATIONS team working on a home renovation in Johannesburg",
      text:  "Kitchens, bathrooms and full home renovations — done properly, finished beautifully."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Renovating across the wider area.",
    areasLead:  "We take on renovation projects in Johannesburg CBD, Parktown, Melville and the surrounding suburbs. Site visits and quotes available throughout the area.",
    areasNote:  "Not on this list? Call us — we work across most of the greater Johannesburg area.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why homeowners renovate with us.",
    why: [
      {
        title: "Clear, fixed quotes",
        desc:  "A detailed quote up front so you know exactly what the renovation costs before any work begins. No surprise extras."
      },
      {
        title: "Properly project-managed",
        desc:  "One point of contact, a real schedule and trades coordinated for you — so the renovation moves and you stay informed."
      },
      {
        title: "Finished to last",
        desc:  "Waterproofing, structural work and finishes all done to specification, so the result holds up for years, not months."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 7 verified Google reviews.",
    reviews: [
      {
        body:   "They gutted and rebuilt our kitchen and bathroom in three weeks flat. Tidy site every day and the finish is better than we hoped for.",
        name:   "Thabo M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Full home renovation start to finish. Clear quote, kept us updated the whole way and the quality is excellent.",
        name:   "Sandra K.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Renovated our bathroom — no leaks, beautiful tiling and finished exactly when they said they would.",
        name:   "Pieter V.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Common renovation questions.",
    faqLead:  "What most homeowners ask before starting a renovation.",
    faq: [
      {
        q: "Do you give a fixed quote before starting?",
        a: "Yes — we visit the home, talk through what you want and give a detailed written quote so you know the cost before any work begins."
      },
      {
        q: "Can we still live in the house during the renovation?",
        a: "In most cases yes. We section off work areas and sequence the job to minimise disruption, especially for single-room renovations."
      },
      {
        q: "How long does a typical renovation take?",
        a: "A kitchen or bathroom usually takes 2–4 weeks; a full home renovation depends on scope. We give a realistic schedule up front."
      },
      {
        q: "Do you handle plumbing and electrical as part of the renovation?",
        a: "Yes — we coordinate plumbing, electrical and any structural work needed so everything is done as one managed project."
      },
      {
        q: "Will my bathroom be properly waterproofed?",
        a: "Always. Waterproofing is done before any tiling, with the right membrane and detailing so it does not leak down the line."
      },
      {
        q: "Can you match new work to our existing home?",
        a: "Yes — extensions and additions are finished to match existing brickwork, roofing and finishes wherever possible."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us about your renovation.",
    contactLead:  "Send through what you are planning and we will reply on WhatsApp to arrange a site visit and quote.",
    contactPlaceholder: "e.g. kitchen renovation, bathroom remodel, full home makeover"
  }
};
