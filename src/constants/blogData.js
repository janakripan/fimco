// ─────────────────────────────────────────────────────────────────────────────
// data/blogData.js
//
// Single source of truth for ALL blog data across:
//   • BlogFeatured   — uses: id, slug, title, date, image, category, desc
//   • BlogGrid       — uses: id, slug, title, date, image, category, readTime, aspect
//   • BlogDetailPage — uses: all fields including content, author, tags, relatedIds
//
// Usage:
//   import { BLOGS_DATA, getBlogBySlug, getRelatedBlogs, FEATURED_POSTS } from "@/data/blogData";
// ─────────────────────────────────────────────────────────────────────────────

export const BLOGS_DATA = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "discovery-station-life-science",
    featured: true, // BlogFeatured main hero

    // Shared across all components
    title: "Discovery Station | Where groundbreaking Life Science intersects with Everyday Life",
    date: "Jan 21, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    category: "Architecture",

    // BlogFeatured
    desc: "A deep dive into the fusion of biotechnology and urban design within Dubai's newest innovation districts.",

    // BlogGrid
    readTime: "5 min read",
    aspect: "aspect-4/3",

    // BlogDetailPage
    excerpt: "A deep dive into the fusion of biotechnology and urban design within Dubai's newest innovation districts.",
    author: "Fimco Editorial",
    authorRole: "Chief Insights Editor",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    tags: ["Innovation", "Biophilic Design", "Dubai Creek Harbour", "Life Sciences"],
    relatedIds: [2, 3, 5],
    content: [
      {
        type: "lead",
        text: "At the intersection of scientific ambition and architectural vision, Dubai's Discovery Station stands as a monument to a new era of purposeful design — where laboratory corridors breathe with natural light and communal plazas pulse with interdisciplinary energy.",
      },
      { type: "heading", text: "A Blueprint for the Biophilic Future" },
      {
        type: "paragraph",
        text: "The architects behind Discovery Station — the Zurich-based atelier Morph & Partners — were tasked not just with designing a building, but with physically manifesting the act of discovery itself. The result is a 380,000 sq ft campus of interlocking pavilions linked by sky bridges cantilevered over a central biodiversity garden. Every corridor, every threshold, every view-shaft has been choreographed to create moments of unexpected collision: the cardiologist bumping into the venture capitalist over espresso; the materials scientist debating climate policy with a city planner.",
      },
      {
        type: "pullquote",
        text: "We didn't design a building. We designed a series of inevitable encounters.",
        attribution: "— Lars Morph, Lead Architect",
      },
      { type: "heading", text: "Light as Infrastructure" },
      {
        type: "paragraph",
        text: "One of the project's most radical departures from conventional lab design is its treatment of daylight as a core structural element. A bespoke electrochromic glass system — developed in partnership with an Eindhoven-based glazing lab — allows floor-to-ceiling transparency while dynamically filtering UV radiation based on real-time solar data. The net effect is a campus that shifts tonally throughout the day: amber-warm at dawn, crystalline white at noon, and deep blue-hour bronze as evening falls across the Creek.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
        caption: "The central biodiversity garden as seen from the North Tower sky bridge",
      },
      { type: "heading", text: "The Social Science of Space" },
      {
        type: "paragraph",
        text: "The campus was deliberately programmed to resist siloing. Rather than the traditional model — private labs flanked by shared corridors — each floor houses what the design team calls 'porous zones': spaces that are simultaneously workspace, lounge, gallery, and informal meeting room. A running track wraps the perimeter of Level 7, its glazed outer wall framing panoramic views of Dubai Creek Harbour.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "380K", label: "Sq Ft of Innovation Space" },
          { value: "43", label: "Disciplines Under One Roof" },
          { value: "2031", label: "Phase III Completion" },
          { value: "LEED", label: "Platinum Certified" },
        ],
      },
      {
        type: "paragraph",
        text: "What makes Discovery Station genuinely unprecedented in the Middle East context is not its scale — Dubai has long been comfortable with the superlative — but its philosophical ambition. This is a building designed to make serendipity structural.",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "casitas-innovative-work-campus",
    featured: true, // BlogFeatured secondary highlight #1

    title: "Neighborhood Approach: Casitas is an innovative work campus",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600",
    category: "Commercial",

    desc: "Refining the corporate landscape with a human-first neighbourhood model.",

    readTime: "7 min read",
    aspect: "aspect-square",

    excerpt: "Refining the corporate landscape with a human-first neighbourhood model.",
    author: "Fimco Editorial",
    authorRole: "Commercial Correspondent",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    tags: ["Commercial", "Workplace Design", "Campus", "Dubai"],
    relatedIds: [1, 3, 6],
    content: [
      {
        type: "lead",
        text: "Casitas reimagines the corporate campus as something altogether more intimate — a collection of low-rise 'casitas' arranged around shared courtyards, each one distinct in character but united by a shared philosophy of radical hospitality.",
      },
      { type: "heading", text: "The Anti-Campus Campus" },
      {
        type: "paragraph",
        text: "Most corporate campuses signal power through scale. Casitas signals confidence through restraint. The project occupies a 12-hectare site in Dubai Science Park and consists of 22 individual structures — none taller than four storeys — arranged in clusters around shared courtyards, each landscaped to a distinct ecological theme.",
      },
      {
        type: "pullquote",
        text: "We were asked to make a campus that felt like a neighbourhood. We built one that feels like a village.",
        attribution: "— Studio Verdana, Project Lead",
      },
      { type: "heading", text: "Amenity as Architecture" },
      {
        type: "paragraph",
        text: "The ground-floor programme reads less like a corporate facility than a boutique high street: a specialty coffee roastery, a chef's table with rotating residencies, a bookshop curated around business and design, a meditation pavilion, and a members-only health club with a 25-metre pool. These are not perks. They are the architecture.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "22", label: "Individual Buildings" },
          { value: "12 ha", label: "Total Site Area" },
          { value: "4,200", label: "Daily Occupants" },
          { value: "2026", label: "Phase I Opening" },
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1400",
        caption: "Courtyard C — the botanical garden cluster, shaded by a canopy of mature ghaf trees",
      },
      {
        type: "paragraph",
        text: "In an era when the return-to-office narrative is contested, Casitas makes its case through pleasure rather than mandate. You come because you want to — because the coffee is better, the light is more beautiful, and the conversations you stumble into are worth having.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: "downtown-dubai-development-boom",
    featured: true, // BlogFeatured secondary highlight #2

    title: "The Heart of the City: Downtown Dubai's development boom",
    date: "Sep 05, 2025",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600",
    category: "Urbanism",

    desc: "Vertical evolution of the world's most iconic skyline.",

    readTime: "7 min read",
    aspect: "aspect-video",

    excerpt: "Vertical evolution of the world's most iconic skyline.",
    author: "Fimco Editorial",
    authorRole: "Urban Affairs Editor",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    tags: ["Urbanism", "Skyline", "Development", "Downtown Dubai"],
    relatedIds: [1, 5, 9],
    content: [
      {
        type: "lead",
        text: "Downtown Dubai is not finished. It never was. The district that gave the world its most photographed skyline is in the midst of its most ambitious second act yet.",
      },
      { type: "heading", text: "The Second Skyline" },
      {
        type: "paragraph",
        text: "When the Burj Khalifa was completed in 2010, it was easy to assume Downtown Dubai had reached its apex. Fifteen years later, that assumption looks quaint. The district is in the midst of a second wave of densification that will add 11 new supertall towers, 3.2 million sq ft of retail, and a new cultural quarter anchored by a dedicated design museum and a 2,000-seat performing arts centre.",
      },
      {
        type: "pullquote",
        text: "The first skyline was about height. The second skyline is about life.",
        attribution: "— Mohammed Al Gergawi, Dubai Future Foundation",
      },
      { type: "heading", text: "Ground-Level Urbanism" },
      {
        type: "paragraph",
        text: "What is most significant about this new phase is not what is happening above the podium but below it. The pedestrian realm — long a weakness of the original masterplan — is being completely reimagined. A continuous shaded promenade will link the Burj Khalifa plaza to the new cultural quarter, lined with independent retailers, galleries, and a series of micro-parks designed by five international landscape studios.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "11", label: "New Supertall Towers" },
          { value: "3.2M", label: "Sq Ft New Retail" },
          { value: "2,000", label: "Seat Arts Centre" },
          { value: "2030", label: "Masterplan Horizon" },
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1400",
        caption: "Aerial rendering of the new Downtown cultural quarter, looking north from Business Bay",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "sustainable-living-urban-real-estate",
    featured: false,

    title: "Sustainable Living: The future of urban real estate development",
    date: "Mar 05, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    category: "Sustainability",
    desc: "How net-zero thinking is reshaping the economics and aesthetics of premium property.",
    readTime: "6 min read",
    aspect: "aspect-2/3",
    excerpt: "How net-zero thinking is reshaping the economics and aesthetics of premium property.",
    author: "Fimco Editorial",
    authorRole: "Sustainability Correspondent",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    tags: ["Sustainability", "Net Zero", "Real Estate", "Green Design"],
    relatedIds: [1, 6, 10],
    content: [
      {
        type: "lead",
        text: "The luxury real estate market has discovered that sustainability and desirability are not in tension — they are, increasingly, the same thing.",
      },
      { type: "heading", text: "The Green Premium" },
      {
        type: "paragraph",
        text: "Research across 12 major global markets now shows that LEED Platinum or equivalent-certified assets command a consistent premium of between 8–14% over comparable non-certified stock, and achieve occupancy rates 11 percentage points higher.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "14%", label: "Average Price Premium" },
          { value: "11pt", label: "Higher Occupancy Rate" },
          { value: "2040", label: "UAE Net Zero Target" },
          { value: "62%", label: "Buyers Prioritise ESG" },
        ],
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "luxury-amenities-office-spaces",
    featured: false,

    title: "Luxury Amenities: Elevating modern office spaces",
    date: "Apr 12, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    category: "Lifestyle",
    desc: "How concierge-grade amenities are reshaping the expectation of the modern office.",
    readTime: "8 min read",
    aspect: "aspect-square",
    excerpt: "How concierge-grade amenities are reshaping the expectation of the office.",
    author: "Fimco Editorial",
    authorRole: "Lifestyle & Design Editor",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    tags: ["Lifestyle", "Workplace", "Luxury", "Amenities"],
    relatedIds: [2, 3, 8],
    content: [
      {
        type: "lead",
        text: "The office is no longer a place you go to because you must. The new generation of premium workplaces competes with the best hotels in the world — and wins.",
      },
      { type: "heading", text: "The Hotel Lobby Office" },
      {
        type: "paragraph",
        text: "The comparison point for Class A office amenities used to be other offices. Now it is the Four Seasons. Developers competing for institutional tenants in Dubai, Singapore, and London are commissioning the same interior architects, the same hospitality consultants, and the same art advisors as five-star hotels.",
      },
      {
        type: "pullquote",
        text: "We're not designing offices. We're designing reasons to leave the house.",
        attribution: "— Anya Petrov, Head of Workplace Strategy, JLL MENA",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: "future-of-dubai-real-estate-2026",
    featured: false,

    title: "Future of Dubai Real Estate: Trends for 2026",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1600",
    category: "Market",
    desc: "Five macro forces that will define Dubai's property landscape over the next 12 months.",
    readTime: "10 min read",
    aspect: "aspect-4/3",
    excerpt: "Five macro forces that will define Dubai's property landscape over the next 12 months.",
    author: "Fimco Editorial",
    authorRole: "Market Intelligence Lead",
    authorImage: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80&w=200",
    tags: ["Market", "Investment", "2026", "Forecast"],
    relatedIds: [9, 4, 10],
    content: [
      {
        type: "lead",
        text: "Dubai's real estate market enters 2026 with momentum, complexity, and a set of structural tailwinds that distinguish it sharply from every other major global property market.",
      },
      { type: "heading", text: "Five Trends Defining 2026" },
      {
        type: "paragraph",
        text: "First: the off-plan segment will continue to dominate transaction volumes, but with a meaningful shift in buyer profile. Speculative flipping is giving way to genuine end-user demand from HNW individuals relocating primary residences to Dubai. Second: ultra-prime (above AED 30M) is the fastest-growing segment by transaction value, driven by European and Asian family offices seeking hard-asset diversification.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "AED 30M+", label: "Ultra-Prime Threshold" },
          { value: "47%", label: "Off-Plan Share of Volume" },
          { value: "19%", label: "YoY Price Growth (Prime)" },
          { value: "3.1%", label: "Average Gross Yield" },
        ],
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: "interior-design-minimalist-elegance",
    featured: false,

    title: "Interior Design: The rise of minimalist elegance",
    date: "Jun 15, 2025",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
    category: "Interiors",
    desc: "How restraint became the ultimate luxury statement in Dubai's premium residential market.",
    readTime: "4 min read",
    aspect: "aspect-[2/3]",
    excerpt: "How restraint became the ultimate luxury statement in Dubai's premium residential market.",
    author: "Fimco Editorial",
    authorRole: "Interiors & Design Editor",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    tags: ["Interiors", "Minimalism", "Design", "Luxury Living"],
    relatedIds: [5, 2, 12],
    content: [
      {
        type: "lead",
        text: "In a market long associated with maximalist excess, a counter-movement is taking hold. Dubai's most sought-after interiors now speak in whispers.",
      },
      { type: "heading", text: "The Quiet Luxury Pivot" },
      {
        type: "paragraph",
        text: "The shift is visible in material choices: Venetian plaster over marble cladding; linen over silk; raw oak over lacquered walnut. Colour palettes have contracted to a refined range of warm neutrals — bone, taupe, warm white — punctuated by single accent elements in aged brass or hand-thrown ceramics.",
      },
      {
        type: "pullquote",
        text: "The client used to ask for more. Now they ask for less — but better.",
        attribution: "— Hana Sulaiman, Principal, Studio Hana",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: "proptech-property-management",
    featured: false,

    title: "PropTech: How technology is shaping property management",
    date: "Jul 20, 2025",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1600",
    category: "Technology",
    desc: "From AI-driven valuations to blockchain title deeds — the digital transformation of real estate.",
    readTime: "6 min read",
    aspect: "aspect-square",
    excerpt: "From AI-driven valuations to blockchain title deeds — the digital transformation of real estate.",
    author: "Fimco Editorial",
    authorRole: "Technology Correspondent",
    authorImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200",
    tags: ["PropTech", "AI", "Blockchain", "Digital Real Estate"],
    relatedIds: [6, 13, 5],
    content: [
      {
        type: "lead",
        text: "The real estate transaction — one of the most complex, paper-heavy, relationship-dependent processes in commerce — is being quietly but irreversibly digitised.",
      },
      { type: "heading", text: "The Intelligent Asset" },
      {
        type: "paragraph",
        text: "Dubai Land Department's blockchain-based title deed system has reduced transfer times from days to hours and eliminated an entire category of fraud. Smart building management systems in Grade A stock now optimise HVAC, lighting, and security in real time, reducing operational costs by an average of 23%.",
      },
      {
        type: "stat-row",
        stats: [
          { value: "23%", label: "OpEx Reduction via Smart BMS" },
          { value: "4hrs", label: "Average Title Transfer Time" },
          { value: "AED 2B", label: "PropTech Investment 2024" },
          { value: "89%", label: "Landlords Using Digital Platforms" },
        ],
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    id: 9,
    slug: "off-plan-investment-dubai",
    featured: false,

    title: "Investment Insights: Why off-plan is the future of Dubai",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    category: "Investment",
    desc: "The structural case for off-plan acquisition in one of the world's most liquid property markets.",
    readTime: "9 min read",
    aspect: "aspect-4/3",
    excerpt: "The structural case for off-plan acquisition in one of the world's most liquid property markets.",
    author: "Fimco Editorial",
    authorRole: "Investment Strategy Editor",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    tags: ["Investment", "Off-Plan", "Dubai", "ROI"],
    relatedIds: [6, 4, 14],
    content: [
      {
        type: "lead",
        text: "Off-plan property in Dubai is not speculation. It is, when approached with rigour, one of the most structurally sound investment theses available to a global high-net-worth individual.",
      },
      { type: "heading", text: "The Economic Architecture of Off-Plan" },
      {
        type: "paragraph",
        text: "The mechanics are well understood: a developer offers a unit at a price below anticipated market value at completion, in exchange for capital commitment during the construction phase. In Dubai, the margins on both sides remain exceptional — for reasons structural rather than speculative.",
      },
      {
        type: "pullquote",
        text: "Dubai is the only major global city where a buyer can still acquire prime real estate at a genuine discount to replacement cost.",
        attribution: "— Richard Bradbury, Head of MENA, Knight Frank",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    id: 10,
    slug: "downtown-dubai-heart-of-city",
    featured: false,

    title: "The Heart of the City: Downtown Dubai's development boom",
    date: "Sep 05, 2025",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600",
    category: "Urbanism",
    desc: "The second act of the world's most ambitious urban district.",
    readTime: "7 min read",
    aspect: "aspect-video",
    excerpt: "The second act of the world's most ambitious urban district.",
    author: "Fimco Editorial",
    authorRole: "Urban Affairs Editor",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    tags: ["Urbanism", "Downtown", "Masterplan", "Dubai"],
    relatedIds: [3, 6, 4],
    content: [
      {
        type: "lead",
        text: "A second generation of urban ambition is reshaping the district that already gave the world its most iconic skyline.",
      },
      {
        type: "paragraph",
        text: "The latest masterplan revisions focus on ground-level activation, pedestrian connectivity, and cultural programming — the infrastructure of a city rather than the infrastructure of a destination.",
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────────────────────
  {
    id: 11,
    slug: "elite-concierge-white-glove-service",
    featured: false,

    title: "The Elite Concierge: Re-defining white glove service",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
    category: "Service",
    desc: "How Dubai's premium residential buildings are rewriting the rules of resident services.",
    readTime: "5 min read",
    aspect: "aspect-square",
    excerpt: "How Dubai's premium residential buildings are rewriting the rules of resident services.",
    author: "Fimco Editorial",
    authorRole: "Lifestyle & Design Editor",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    tags: ["Service", "Concierge", "Luxury", "Hospitality"],
    relatedIds: [5, 7, 2],
    content: [
      {
        type: "lead",
        text: "The concierge desk used to be a transactional checkpoint. In Dubai's most rarefied residential towers, it has become the building's central nervous system.",
      },
      { type: "heading", text: "Beyond the Desk" },
      {
        type: "paragraph",
        text: "The shift began with the branded residence model — developments affiliated with five-star hotel groups that imported hospitality operating standards into the residential context. It has now propagated far beyond that category.",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────────────────────
  {
    id: 12,
    slug: "architectural-heritage-dubai",
    featured: false,

    title: "Architectural Heritage: Preserving Dubai's historical soul",
    date: "Nov 02, 2025",
    image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80&w=1600",
    category: "Heritage",
    desc: "Conservation, adaptive reuse, and the delicate art of memory in a city defined by reinvention.",
    readTime: "8 min read",
    aspect: "aspect-4/3",
    excerpt: "Conservation, adaptive reuse, and the delicate art of memory in a city defined by reinvention.",
    author: "Fimco Editorial",
    authorRole: "Cultural Correspondent",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    tags: ["Heritage", "Conservation", "Al Fahidi", "Adaptive Reuse"],
    relatedIds: [7, 3, 16],
    content: [
      {
        type: "lead",
        text: "In a city that has made its reputation on the new, the preservation of what came before is an act of cultural confidence.",
      },
      { type: "heading", text: "The Weight of Wind Towers" },
      {
        type: "paragraph",
        text: "Al Fahidi Historical Neighbourhood — the warren of coral-block courtyard houses and wind towers that predates the oil era — is the most discussed example, but the conversation about heritage in Dubai has grown considerably more sophisticated.",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────────────────────
  {
    id: 13,
    slug: "smart-homes-luxury-living",
    featured: false,

    title: "Smart Homes: The next frontier in luxury living",
    date: "Dec 05, 2025",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1600",
    category: "Tech",
    desc: "AI-powered environments that learn, anticipate, and adapt to their inhabitants.",
    readTime: "6 min read",
    aspect: "aspect-square",
    excerpt: "AI-powered environments that learn, anticipate, and adapt to their inhabitants.",
    author: "Fimco Editorial",
    authorRole: "Technology Correspondent",
    authorImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200",
    tags: ["Smart Home", "AI", "Technology", "Luxury Living"],
    relatedIds: [8, 5, 6],
    content: [
      {
        type: "lead",
        text: "The smart home has evolved from a novelty to an expectation in the ultra-prime segment — and from an expectation to an ambient intelligence in its most advanced iterations.",
      },
      { type: "heading", text: "From Automation to Anticipation" },
      {
        type: "paragraph",
        text: "Machine learning models trained on occupant behaviour predict preferences before they are expressed. The apartment knows you prefer cooler temperatures when you return from the gym. It adjusts accordingly, invisibly.",
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────────────────
  {
    id: 14,
    slug: "private-islands-world-islands",
    featured: false,

    title: "The Rise of Private Islands: World Islands project status",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=1600",
    category: "Luxury",
    desc: "An update on the World Islands — one of the most audacious real estate projects in human history.",
    readTime: "12 min read",
    aspect: "aspect-2/3",
    excerpt: "An update on the World Islands — one of the most audacious real estate projects in human history.",
    author: "Fimco Editorial",
    authorRole: "Luxury Developments Editor",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    tags: ["Luxury", "World Islands", "Ultra-Prime", "Private Island"],
    relatedIds: [9, 6, 11],
    content: [
      {
        type: "lead",
        text: "The World Islands — 300 artificial landmasses arranged in the shape of a world map, 4km off the coast of Jumeirah — remain the most polarising real estate project ever conceived.",
      },
      { type: "heading", text: "The Long Game" },
      {
        type: "paragraph",
        text: "After years of stalled development following the 2008 financial crisis, the World Islands are experiencing a genuine second act. A new wave of buyers — predominantly family offices from Europe, South Asia, and East Asia — are acquiring remaining plots with a long-term horizon.",
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────────────────────
  {
    id: 15,
    slug: "commercial-excellence-dubai-business-hubs",
    featured: false,

    title: "Commercial Excellence: Dubai's thriving business hubs",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    category: "Commercial",
    desc: "DIFC, Dubai Internet City, and the new contenders competing to be the region's premier commercial address.",
    readTime: "7 min read",
    aspect: "aspect-4/3",
    excerpt: "DIFC, Dubai Internet City, and the new contenders competing to be the region's premier commercial address.",
    author: "Fimco Editorial",
    authorRole: "Commercial Correspondent",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    tags: ["Commercial", "DIFC", "Business Hub", "Grade A Office"],
    relatedIds: [2, 6, 8],
    content: [
      {
        type: "lead",
        text: "Dubai's commercial property market is fragmenting in the most productive sense of the word — from a single dominant CBD to a constellation of specialised business districts, each with a distinct identity and tenant base.",
      },
      { type: "heading", text: "The Post-CBD City" },
      {
        type: "paragraph",
        text: "DIFC remains the premier address for financial services and international law firms, but its vacancy rate — below 3% — means it is effectively full. The overflow is creating opportunities in neighbouring districts that would not, five years ago, have been considered credible alternatives.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────────────────────
  {
    id: 16,
    slug: "infinity-loop-bridge-design",
    featured: false,

    title: "The Infinity Loop: Innovation in bridge and skyline design",
    date: "Mar 20, 2026",
    image: "https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80&w=1600",
    category: "Design",
    desc: "The structural and philosophical ambition behind Dubai's most talked-about proposed infrastructure.",
    readTime: "5 min read",
    aspect: "aspect-video",
    excerpt: "The structural and philosophical ambition behind Dubai's most talked-about proposed infrastructure.",
    author: "Fimco Editorial",
    authorRole: "Architecture & Design Correspondent",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    tags: ["Design", "Infrastructure", "Architecture", "Innovation"],
    relatedIds: [1, 3, 12],
    content: [
      {
        type: "lead",
        text: "The Infinity Loop is either the most beautiful piece of infrastructure ever proposed for a major city, or the most extravagant. Possibly both.",
      },
      { type: "heading", text: "Form as Argument" },
      {
        type: "paragraph",
        text: "The proposal — a figure-eight bridge connecting two points on the Dubai Creek, with habitable programme occupying the loop structure itself — challenges every assumption about what infrastructure is allowed to be.",
      },
    ],
  },
];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

/** BlogDetailPage: find a post by its URL slug, fallback to first post */
export function getBlogBySlug(slug) {
  return BLOGS_DATA.find((b) => b.slug === slug) || BLOGS_DATA[0];
}

/** BlogDetailPage: resolve relatedIds array into full blog objects */
export function getRelatedBlogs(ids = []) {
  return BLOGS_DATA.filter((b) => ids.includes(b.id));
}

/**
 * BlogFeatured: returns exactly 3 posts marked featured: true
 *   index 0 → main hero
 *   index 1 → secondary highlight #1
 *   index 2 → secondary highlight #2
 */
export const FEATURED_POSTS = BLOGS_DATA.filter((b) => b.featured).slice(0, 3);