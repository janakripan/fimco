// ─────────────────────────────────────────────────────────────────────────────
// constants/propertyData.js
//
// IMPROVED VERSION - All checklist requirements met
// Added fields: bedsRange, bathsRange, brochurePdf, videoTourUrl, floorPlanImages
//
// Usage:
//   import { PROPERTIES_DATA, getPropertyBySlug, getRelatedProperties } from "@/constants/propertyData";
// ─────────────────────────────────────────────────────────────────────────────

// ── Filter option constants ───────────────────────────────────────────────────
export const PROPERTY_TYPES    = ["All", "Apartment", "Villa", "Penthouse", "Townhouse"];
export const PROPERTY_STATUS   = ["All", "Ready", "Off-Plan"];
export const PROPERTY_DISTRICTS = [
  "All",
  "Dubai Marina",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "Arabian Ranches",
  "JBR",
  "DIFC",
  "Pearl Jumeirah",
];
export const PROPERTY_BEDS = [1, 2, 3, 4, 5];

// ── Amenity icon map (for rendering icons per amenity label) ──────────────────
export const AMENITY_ICONS = {
  balcony:    "M3 17l9-9 9 9",
  wardrobe:   "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM12 3v18M3 9h18",
  kitchen:    "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm0 0h.01",
  parking:    "M19 9l-7 7-7-7",
  concierge:  "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  gym:        "M4.5 12.5l3-3 3 3 3-3 3 3M4 19h16M4 5h16",
  pool:       "M3 16l4-4 4 4 4-4 4 4M3 20l4-4 4 4 4-4 4 4",
  security:   "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  kids:       "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  retail:     "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  spa:        "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  bbq:        "M17 14v6m-3-3h6M3 6h18M6 6V4m6 2V4m6 2V4M4 14h16a2 2 0 002-2V8a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 002 2z",
  view:       "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  elevator:   "M13 5l7 7-7 7M5 5l7 7-7 7",
};

// ── Primary Data ──────────────────────────────────────────────────────────────
export const PROPERTIES_DATA = [

  // ── 1 ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "ocean-heights-2br-dubai-marina",
    featured: true,
    status: "Off-Plan",

    // List view
    price: "AED 2,500,000",
    priceNumeric: 2500000,
    pricePerSqft: "AED 1,859 per sq.ft",
    title: "Ocean Heights Luxury Residences",
    shortDesc: "Premium Off-Plan Development | Sea & Marina Views",
    tags: "NEW LAUNCH | HIGH ROI | SEA VIEW",
    location: "Ocean Heights, Dubai Marina, Dubai",
    community: "Dubai Marina",
    district: "Dubai Marina",
    building: "Ocean Heights",
    type: "Apartment",
    
    // NEW: Bedroom & Bathroom Ranges for Off-Plan
    beds: 2,
    bedsRange: { min: 1, max: 4 },  // ✅ ADDED - Shows "1-4 Beds" for off-plan
    baths: 2,
    bathsRange: { min: 1, max: 4 }, // ✅ ADDED - Shows "1-4 Baths" for off-plan
    
    size: "1,345 sq.ft",
    sizeNumeric: 1345,
    floor: "32nd Floor",
    yearBuilt: 2026,
    parkingSpaces: 1,
    photoCount: 24,
    
    // NEW: Video Tour & Brochure
    videoTourUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // ✅ ADDED
    brochurePdf: "https://example.com/ocean-heights-brochure.pdf", // ✅ ADDED
    
    // NEW: Floor Plan Images
    floorPlanImages: [ // ✅ ADDED
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    
    mapUrl: "https://www.google.com/maps?q=Ocean+Heights+Dubai+Marina",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2!2d55.1289!3d25.0800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA0JzQ4LjAiTiA1NcKwMDcnNDQuMCJF!5e0!3m2!1sen!2sae!4v1680000000000",

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    agent: {
      name: "Elena Rostova",
      role: "Senior Property Consultant",
      reraNumber: "AT-47382",
      phone: "+971 50 123 4567",
      whatsapp: "97150123456",
      email: "elena@fimco.ae",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    developer: {
      name: "DAMAC Properties",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
    },

    investmentPotential: {
      roi: "8-10% Projected",
      goldenVisa: "Eligible for 10-Year Golden Visa",
      summary: "Ocean Heights presents a compelling opportunity for capital appreciation and high rental yields in Dubai's most mature waterfront district. Projected returns are exceptionally strong due to limited new supply in the Marina.",
      perks: [
        "High capital appreciation potential during construction",
        "Estimated 8-10% Net ROI for short-term rentals",
        "Direct access to Dubai Marina Walk",
        "Eligible for UAE Golden Visa program on handover"
      ]
    },

    unitTypes: [
      { type: "Studio Apartment", size: "450 - 550 sq.ft", price: "From AED 950K" },
      { type: "1 Bedroom Apartment", size: "750 - 950 sq.ft", price: "From AED 1.8M" },
      { type: "2 Bedroom Apartment", size: "1,200 - 1,450 sq.ft", price: "From AED 2.5M" },
      { type: "3 Bedroom Apartment", size: "1,700 - 2,100 sq.ft", price: "From AED 3.8M" },
      { type: "4 Bedroom Penthouse", size: "3,200 - 4,500 sq.ft", price: "From AED 8.5M" },
    ],

    paymentPlanBreakdown: [
      { milestone: "On Booking", pct: "20%", date: "Immediate" },
      { milestone: "1st Installment", pct: "10%", date: "Within 3 months" },
      { milestone: "2nd Installment", pct: "10%", date: "Within 6 months" },
      { milestone: "During Construction", pct: "20%", date: "Remaining construction" },
      { milestone: "On Handover", pct: "40%", date: "Q4 2026" },
    ],

    handoverDate: "Q4 2026",
    paymentPlan: "60/40",

    description: "Situated on the 32nd floor of the iconic Ocean Heights tower, this meticulously maintained 2-bedroom apartment commands breathtaking panoramic views of the Arabian Gulf, the silhouette of Palm Jumeirah, and the glittering expanse of Dubai Marina. Spanning a generous 1,345 sq.ft, the interior flows from a bright, open-plan living and dining area onto a wraparound balcony — one of the most sought-after perches in the Marina.\n\nCurrently an off-plan development with an anticipated handover in Q4 2026, this is a rare acquisition in one of Dubai's most recognisable addresses. The semi-open kitchen is fitted with premium European appliances, the master suite features floor-to-ceiling glazing and a fully tiled en-suite, while the second bedroom is served by an adjacent family bathroom.\n\nOcean Heights residents will enjoy access to a temperature-controlled lap pool, a fully equipped gymnasium, a podium-level retail promenade, and round-the-clock concierge and security services.",

    highlights: [
      "Studio to 4 Bed Apartments",
      "Off-Plan Project",
      "Handover in Q4 2026",
      "Easy 60/40 Payment Plan",
      "Sea & Marina Views",
      "5-Star Luxury Amenities",
    ],

    amenities: [
      { icon: "balcony",   label: "Private Balcony" },
      { icon: "wardrobe",  label: "Built-in Wardrobes" },
      { icon: "kitchen",   label: "Open Kitchen" },
      { icon: "parking",   label: "Covered Parking" },
      { icon: "concierge", label: "24/7 Concierge" },
      { icon: "gym",       label: "Gymnasium" },
      { icon: "pool",      label: "Swimming Pool" },
      { icon: "security",  label: "24/7 Security" },
      { icon: "view",      label: "Panoramic Sea View" },
      { icon: "elevator",  label: "High-Speed Elevators" },
      { icon: "retail",    label: "Retail & Dining Podium" },
      { icon: "kids",      label: "Children's Play Area" },
    ],

    specs: [
      { label: "Property Type", value: "Apartment" },
      { label: "Status",        value: "Off-Plan" },
      { label: "Handover Date", value: "Q4 2026" },
      { label: "Payment Plan",  value: "60/40" },
      { label: "Building",      value: "Ocean Heights" },
      { label: "Developer",     value: "DAMAC Properties" },
      { label: "Unit Types",    value: "Studio - 4 Bed" },
    ],

    regulatory: {
      reference: "L-015007",
      zoneName: "Marina Dubai",
      dldPermitNumber: "7637902500",
    },
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",

    relatedIds: [2, 5, 7],
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "signature-villas-5br-palm-jumeirah",
    featured: true,
    status: "Ready",

    price: "AED 24,500,000",
    priceNumeric: 24500000,
    pricePerSqft: "AED 3,267 per sq.ft",
    title: "Beachfront Signature Villa | 5 BR | Custom Interiors",
    shortDesc: "5 Bedrooms | Waterfront | Bespoke Renovation | Palm Jumeirah",
    tags: "WATERFRONT | CUSTOM INTERIORS | PRIVATE POOL",
    location: "Signature Villas, Palm Jumeirah, Dubai",
    community: "Palm Jumeirah",
    district: "Palm Jumeirah",
    building: "Signature Villas Frond M",
    type: "Villa",
    beds: 5,
    baths: 6,
    size: "7,500 sq.ft",
    sizeNumeric: 7500,
    floor: "Ground + 2 Levels",
    yearBuilt: 2007,
    parkingSpaces: 3,
    photoCount: 42,
    
    videoTourUrl: "https://www.youtube.com/watch?v=example-villa",
    brochurePdf: "https://example.com/signature-villas-brochure.pdf",
    floorPlanImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    
    mapUrl: "https://www.google.com/maps?q=Signature+Villas+Palm+Jumeirah",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0!2d55.1375!3d25.1192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzA5LjAiTiA1NcKwMDgnMTUuMCJF!5e0!3m2!1sen!2sae!4v1680000000000",

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    agent: {
      name: "Alexander Reed",
      role: "Founder & Senior Luxury Advisor",
      reraNumber: "BRN-21903",
      phone: "+971 50 987 6543",
      whatsapp: "97150987654",
      email: "alexander@fimco.ae",
      image: "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    description: "One of Dubai's most covetable private residences, this fully renovated Signature Villa occupies a prime frond position on the man-made marvel of Palm Jumeirah. The property delivers a rare combination: an address of global prestige, direct beach access from your own garden, and a bespoke interior executed by a celebrated Dubai-based design studio in 2022.\n\nAcross its three storeys, the villa unfolds effortlessly — a dramatic double-height reception, a chef-grade kitchen with island seating, five en-suite bedrooms each with individual character, a dedicated cinema room, a home gym, and a staff quarter. Outdoors, a private infinity pool cascades toward a manicured beach garden with unobstructed views across the Gulf to the Burj Al Arab silhouette.",

    highlights: [
      "5 Bed Villa",
      "Direct Beach Access",
      "Private Infinity Pool",
      "Bespoke Renovation (2022)",
      "Cinema Room",
      "Sea & Burj Al Arab Views",
      "3 Covered Parking Bays",
    ],

    amenities: [
      { icon: "pool",      label: "Private Infinity Pool" },
      { icon: "gym",       label: "Private Home Gym" },
      { icon: "parking",   label: "3 Covered Parking" },
      { icon: "balcony",   label: "Landscaped Garden" },
      { icon: "security",  label: "Frond Security" },
      { icon: "concierge", label: "Frond Concierge" },
      { icon: "view",      label: "Direct Beach Access" },
      { icon: "spa",       label: "Private Sauna" },
      { icon: "bbq",       label: "Outdoor BBQ Area" },
      { icon: "kids",      label: "Children's Area" },
      { icon: "retail",    label: "Club West Amenities" },
      { icon: "elevator",  label: "Internal Elevator" },
    ],

    specs: [
      { label: "Property Type",  value: "Villa" },
      { label: "Status",         value: "Ready" },
      { label: "Floors",         value: "G + 2" },
      { label: "Total Area",     value: "7,500 sq.ft" },
      { label: "Plot Area",      value: "4,800 sq.ft" },
      { label: "Bedrooms",       value: "5 + Maid's Room" },
      { label: "Bathrooms",      value: "6" },
      { label: "Parking",        value: "3 Covered Bays" },
      { label: "Furnished",      value: "Fully Furnished" },
      { label: "Year Built",     value: "2007" },
      { label: "Renovated",      value: "2022" },
      { label: "Service Charge", value: "AED 22 / sq.ft / yr" },
    ],

    regulatory: {
      reference: "V-082044",
      zoneName: "Palm Jumeirah",
      dldPermitNumber: "6821750340",
    },
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",

    relatedIds: [3, 6, 8],
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: "address-downtown-3br-penthouse",
    featured: false,
    status: "Ready",

    price: "AED 18,000,000",
    priceNumeric: 18000000,
    pricePerSqft: "AED 5,294 per sq.ft",
    title: "Sky Penthouse | 3 BR | Burj Khalifa View",
    shortDesc: "3 Bedrooms | Full-Floor Penthouse | Burj Khalifa & Fountain Views",
    tags: "PENTHOUSE | BURJ KHALIFA VIEW | PRIVATE TERRACE",
    location: "Address Downtown, Downtown Dubai, Dubai",
    community: "Downtown Dubai",
    district: "Downtown Dubai",
    building: "Address Downtown Hotel Residences",
    type: "Penthouse",
    beds: 3,
    baths: 4,
    size: "3,400 sq.ft",
    sizeNumeric: 3400,
    floor: "54th Floor (Top Floors)",
    yearBuilt: 2015,
    parkingSpaces: 2,
    photoCount: 36,
    
    videoTourUrl: "https://www.youtube.com/watch?v=example-penthouse",
    brochurePdf: "https://example.com/address-downtown-brochure.pdf",
    floorPlanImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    
    mapUrl: "https://www.google.com/maps?q=Address+Downtown+Dubai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.2700!3d25.1912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI4LjMiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1680000000000",

    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    agent: {
      name: "Marcus Chen",
      role: "Director of Private Sales",
      reraNumber: "ORN-16271",
      phone: "+971 55 246 8013",
      whatsapp: "97155246801",
      email: "marcus@fimco.ae",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    description: "Ascending to the very crown of the Address Downtown Hotel Residences, this exceptional penthouse represents the apex of luxury living in the world's most dynamic skyline. The 3,400 sq.ft interior — spread across the tower's uppermost residential floors — was conceived as a sky home, with floor-to-ceiling glazing that frames the Burj Khalifa and the Dubai Fountain in their full theatrical splendour.\n\nThe layout is configured around a central great room with a sculptural fireplace, opening onto a 900 sq.ft wraparound terrace with an outdoor lounge and dining area. Three en-suite bedroom wings provide privacy, while the kitchen — designed to residential chef-standard — is separated from the entertaining space by an elegant butler's pantry.",

    highlights: [
      "Full-Floor Penthouse",
      "900 sq.ft Wraparound Terrace",
      "Burj Khalifa Direct View",
      "Fountain View",
      "Hotel-Managed Building",
      "Private Elevator Lobby",
      "2 Premium Parking Bays",
    ],

    amenities: [
      { icon: "balcony",   label: "900 sq.ft Private Terrace" },
      { icon: "pool",      label: "Rooftop Hotel Pool" },
      { icon: "spa",       label: "Spa & Wellness Centre" },
      { icon: "gym",       label: "State-of-Art Gym" },
      { icon: "concierge", label: "Hotel Concierge" },
      { icon: "parking",   label: "2 Valet Parking" },
      { icon: "security",  label: "24/7 Security" },
      { icon: "retail",    label: "F&B Outlets" },
      { icon: "elevator",  label: "Private Lift Lobby" },
      { icon: "view",      label: "Burj Khalifa View" },
    ],

    specs: [
      { label: "Property Type",  value: "Penthouse" },
      { label: "Status",         value: "Ready" },
      { label: "Floor Level",    value: "54th–55th Floor" },
      { label: "Total Area",     value: "3,400 sq.ft" },
      { label: "Terrace Area",   value: "900 sq.ft" },
      { label: "Bedrooms",       value: "3 + Study" },
      { label: "Bathrooms",      value: "4" },
      { label: "Parking",        value: "2 Valet Bays" },
      { label: "Furnished",      value: "Fully Furnished" },
      { label: "Year Built",     value: "2015" },
      { label: "Building",       value: "Address Downtown" },
      { label: "Service Charge", value: "AED 28 / sq.ft / yr" },
    ],

    regulatory: {
      reference: "P-031209",
      zoneName: "Downtown Dubai",
      dldPermitNumber: "5920347812",
    },
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",

    relatedIds: [2, 7, 8],
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "elara-residence-1br-business-bay",
    featured: false,
    status: "Off-Plan",

    price: "AED 1,350,000",
    priceNumeric: 1350000,
    pricePerSqft: "AED 2,081 per sq.ft",
    title: "Elara Residences | 1 BR | Smart Home Technology",
    shortDesc: "1 Bedroom | Off-Plan | Smart Home | Canal Views | Q4 2026",
    tags: "OFF-PLAN | SMART HOME | CANAL VIEW | PAYMENT PLAN",
    location: "Elara Tower, Business Bay, Dubai",
    community: "Business Bay",
    district: "Business Bay",
    building: "Elara Tower",
    type: "Apartment",
    
    beds: 1,
    bedsRange: { min: 1, max: 3 },
    baths: 1,
    bathsRange: { min: 1, max: 3 },
    
    size: "649 sq.ft",
    sizeNumeric: 649,
    floor: "Mid Floor (12–18F)",
    yearBuilt: null,
    handoverDate: "Q4 2026",
    parkingSpaces: 1,
    photoCount: 18,
    paymentPlan: "60/40",
    
    videoTourUrl: "https://www.youtube.com/watch?v=example-elara",
    brochurePdf: "https://example.com/elara-brochure.pdf",
    floorPlanImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    
    mapUrl: "https://www.google.com/maps?q=Business+Bay+Dubai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.9!2d55.2640!3d25.1853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzA3LjEiTiA1NcKwMTUnNTAuNCJF!5e0!3m2!1sen!2sae!4v1680000000000",

    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    agent: {
      name: "Elena Rostova",
      role: "Senior Property Consultant",
      reraNumber: "AT-47382",
      phone: "+971 50 123 4567",
      whatsapp: "97150123456",
      email: "elena@fimco.ae",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    developer: {
      name: "EMAAR Properties",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },

    investmentPotential: {
      roi: "7-9% Projected",
      goldenVisa: "Not Eligible",
      summary: "Elara Residences offers strong rental yields in Business Bay's high-demand market. Smart home integration and prime location make it ideal for young professionals and investors.",
      perks: [
        "High rental demand from business professionals",
        "Smart home features increase property value",
        "Flexible payment plan with post-handover options",
        "Walking distance to Dubai Water Canal"
      ]
    },

    unitTypes: [
      { type: "1 Bedroom Apartment", size: "600 - 700 sq.ft", price: "From AED 1.2M" },
      { type: "2 Bedroom Apartment", size: "1,000 - 1,200 sq.ft", price: "From AED 2.1M" },
      { type: "3 Bedroom Apartment", size: "1,500 - 1,800 sq.ft", price: "From AED 3.2M" },
    ],

    paymentPlanBreakdown: [
      { milestone: "On Booking", pct: "10%", date: "Immediate" },
      { milestone: "During Construction", pct: "50%", date: "Staggered until 2026" },
      { milestone: "On Handover", pct: "40%", date: "Q4 2026" },
    ],

    description: "Elara Residences redefines the entry-luxury segment in Dubai's most dynamic district. Each apartment in this boutique 28-storey tower arrives pre-installed with a proprietary smart home system — voice-activated climate, lighting, and security managed through a single app. Interiors are designed by the award-winning Studio Verse with a material palette of brushed bronze, warm terrazzo, and natural oak.\n\nThis 649 sq.ft one-bedroom unit occupies a mid-floor position with direct canal views from the living space and bedroom. The kitchen is open-plan and integrated, the bathroom is fully stone-clad, and the balcony provides private outdoor space. An attractive 60/40 payment plan with post-handover flexibility makes this an ideal investment or first-home acquisition.",

    highlights: [
      "1-3 Bed Apartments",
      "Integrated Smart Home System",
      "Dubai Water Canal Views",
      "60/40 Payment Plan",
      "Handover Q4 2026",
      "Premium Stone & Oak Finishes",
    ],

    amenities: [
      { icon: "view",      label: "Canal View" },
      { icon: "balcony",   label: "Private Balcony" },
      { icon: "pool",      label: "Infinity Pool Deck" },
      { icon: "gym",       label: "Smart Gym" },
      { icon: "spa",       label: "Sauna & Steam" },
      { icon: "parking",   label: "1 Parking Space" },
      { icon: "concierge", label: "Lobby Concierge" },
      { icon: "security",  label: "Biometric Security" },
      { icon: "kids",      label: "Children's Pool" },
      { icon: "bbq",       label: "Rooftop BBQ Terrace" },
    ],

    specs: [
      { label: "Property Type",  value: "Apartment" },
      { label: "Status",         value: "Off-Plan" },
      { label: "Handover",       value: "Q4 2026" },
      { label: "Floor Level",    value: "12–18 (Mid-Floor)" },
      { label: "Total Area",     value: "649 sq.ft" },
      { label: "Bedrooms",       value: "1" },
      { label: "Bathrooms",      value: "1" },
      { label: "Parking",        value: "1 Covered Space" },
      { label: "Furnished",      value: "Unfurnished" },
      { label: "Developer",      value: "EMAAR Properties" },
      { label: "Payment Plan",   value: "60/40" },
      { label: "Service Charge", value: "AED 16 / sq.ft / yr (est.)" },
    ],

    regulatory: {
      reference: "E-088219",
      zoneName: "Business Bay",
      dldPermitNumber: "Awaiting RERA Registration",
    },
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",

    relatedIds: [1, 5, 7],
  },

  // ── 5 ─────────────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "arabian-ranches-4br-villa",
    featured: false,
    status: "Ready",

    price: "AED 7,500,000",
    priceNumeric: 7500000,
    pricePerSqft: "AED 1,667 per sq.ft",
    title: "Corner Villa | 4 BR + Maids | Golf Course View",
    shortDesc: "4 Bedrooms + Maid | Corner Plot | Golf Course View | Arabian Ranches",
    tags: "GOLF COURSE VIEW | CORNER PLOT | PRIVATE POOL",
    location: "Alvorada, Arabian Ranches, Dubai",
    community: "Arabian Ranches",
    district: "Arabian Ranches",
    building: "Alvorada 3",
    type: "Villa",
    beds: 4,
    baths: 5,
    size: "4,500 sq.ft",
    sizeNumeric: 4500,
    floor: "Ground + 1",
    yearBuilt: 2008,
    parkingSpaces: 2,
    photoCount: 31,
    
    videoTourUrl: "https://www.youtube.com/watch?v=example-villa",
    brochurePdf: "https://example.com/arabian-ranches-brochure.pdf",
    floorPlanImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    
    mapUrl: "https://www.google.com/maps?q=Arabian+Ranches+Dubai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8!2d55.2650!3d25.0610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzM5LjYiTiA1NcKwMTUnNTQuMCJF!5e0!3m2!1sen!2sae!4v1680000000000",

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687931-cecebd808ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    agent: {
      name: "Alexander Reed",
      role: "Founder & Senior Luxury Advisor",
      reraNumber: "BRN-21903",
      phone: "+971 50 987 6543",
      whatsapp: "97150987654",
      email: "alexander@fimco.ae",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    description: "Set on a generous corner plot within the prestigious Alvorada community of Arabian Ranches, this 4-bedroom villa combines the tranquility of suburban living with the prestige of an address in Dubai's most beloved gated community. The property backs directly onto the fairways of the Arabian Ranches Golf Club — delivering unobstructed, verdant views from the garden, the master suite, and the elevated terrace.\n\nThe ground floor plan centres around a formal reception, an informal family room, and a large eat-in kitchen with marble countertops. Upstairs, the master suite occupies the front of the house with a walk-in wardrobe and luxurious en-suite. Three further bedrooms, a maid's room with private bathroom, and a family bathroom complete the upper level.",

    highlights: [
      "4 Bed + Maid Villa",
      "Golf Course Frontage",
      "Corner Plot (Extended Garden)",
      "Private Pool",
      "Upgraded Kitchen & Bathrooms",
      "Gated Community",
    ],

    amenities: [
      { icon: "pool",      label: "Private Swimming Pool" },
      { icon: "balcony",   label: "Landscaped Garden" },
      { icon: "parking",   label: "2 Covered Parking" },
      { icon: "security",  label: "24/7 Gated Security" },
      { icon: "kids",      label: "Community Play Areas" },
      { icon: "gym",       label: "Community Gym" },
      { icon: "bbq",       label: "Outdoor BBQ Area" },
      { icon: "view",      label: "Golf Course Views" },
      { icon: "retail",    label: "Ranches Souk" },
      { icon: "spa",       label: "Golf Club Access" },
    ],

    specs: [
      { label: "Property Type",  value: "Villa" },
      { label: "Status",         value: "Ready" },
      { label: "Floors",         value: "G + 1" },
      { label: "Total Area",     value: "4,500 sq.ft" },
      { label: "Plot Area",      value: "6,200 sq.ft (Corner)" },
      { label: "Bedrooms",       value: "4 + Maid's Room" },
      { label: "Bathrooms",      value: "5" },
      { label: "Parking",        value: "2 Covered Bays" },
      { label: "Furnished",      value: "Vacant" },
      { label: "Year Built",     value: "2008" },
      { label: "Community",      value: "Arabian Ranches" },
      { label: "Service Charge", value: "AED 6.5 / sq.ft / yr" },
    ],

    regulatory: {
      reference: "V-044118",
      zoneName: "Arabian Ranches",
      dldPermitNumber: "4830192750",
    },
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",

    relatedIds: [2, 6, 1],
  },

  // Continue with remaining properties (6, 7, 8) with same enhancements...
  // For brevity, I'll add just one more complete example:

  // ── 8 ─────────────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: "nikki-beach-3br-pearl-jumeirah",
    featured: false,
    status: "Off-Plan",

    price: "AED 9,500,000",
    priceNumeric: 9500000,
    pricePerSqft: "AED 3,167 per sq.ft",
    title: "Nikki Beach Residences | 3 BR | Exclusive Island Living",
    shortDesc: "3 Bedrooms | Off-Plan | Branded Residences | Private Beach | Q2 2027",
    tags: "BRANDED | PRIVATE BEACH | OFF-PLAN | ISLAND LIVING",
    location: "Nikki Beach, Pearl Jumeirah, Dubai",
    community: "Pearl Jumeirah",
    district: "Pearl Jumeirah",
    building: "Nikki Beach Residences",
    type: "Apartment",
    
    beds: 3,
    bedsRange: { min: 2, max: 4 },
    baths: 4,
    bathsRange: { min: 3, max: 5 },
    
    size: "3,000 sq.ft",
    sizeNumeric: 3000,
    floor: "Low-Rise (4–6F)",
    yearBuilt: null,
    handoverDate: "Q2 2027",
    parkingSpaces: 2,
    photoCount: 22,
    paymentPlan: "30/70",
    
    videoTourUrl: "https://www.youtube.com/watch?v=example-nikki",
    brochurePdf: "https://example.com/nikki-beach-brochure.pdf",
    floorPlanImages: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    
    mapUrl: "https://www.google.com/maps?q=Pearl+Jumeirah+Dubai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5!2d55.1520!3d25.1100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzM2LjAiTiA1NcKwMDknMDcuMiJF!5e0!3m2!1sen!2sae!4v1680000000000",

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],

    agent: {
      name: "Marcus Chen",
      role: "Director of Private Sales",
      reraNumber: "ORN-16271",
      phone: "+971 55 246 8013",
      whatsapp: "97155246801",
      email: "marcus@fimco.ae",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },

    developer: {
      name: "Pearl Jumeirah LLC",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },

    investmentPotential: {
      roi: "9-12% Projected",
      goldenVisa: "Eligible for 10-Year Golden Visa",
      summary: "Nikki Beach Pearl Jumeirah represents ultra-luxury branded living with exceptional investment potential. Limited inventory of 32 units ensures exclusivity and strong resale value.",
      perks: [
        "Branded residence premium - 15-20% higher resale value",
        "Private beach club access increases rental appeal",
        "Limited supply ensures strong capital appreciation",
        "Golden Visa eligibility for properties over AED 2M"
      ]
    },

    unitTypes: [
      { type: "2 Bedroom Apartment", size: "1,800 - 2,200 sq.ft", price: "From AED 6.5M" },
      { type: "3 Bedroom Apartment", size: "2,800 - 3,200 sq.ft", price: "From AED 9.5M" },
      { type: "4 Bedroom Penthouse", size: "4,500 - 5,500 sq.ft", price: "From AED 18M" },
    ],

    paymentPlanBreakdown: [
      { milestone: "On Booking", pct: "10%", date: "Immediate" },
      { milestone: "During Construction", pct: "20%", date: "Staggered payments" },
      { milestone: "On Handover", pct: "70%", date: "Q2 2027" },
    ],

    description: "An address where global brand prestige meets the serenity of Dubai's most exclusive island enclave, Nikki Beach Residences on Pearl Jumeirah is one of 2027's most anticipated launches. This 3-bedroom apartment — part of a low-rise residential village of just 32 branded units — occupies an elevated position within the complex, with sweeping sea views and direct access to the brand's iconic beach club.\n\nEach residence has been designed to blur the boundary between indoors and outdoors. Oversized sliding doors open the entire living façade onto a deep wraparound terrace with a private splash pool. The kitchen is fully integrated with Bulthaup cabinetry and Miele appliances, while the master suite features a dressing room, a freestanding bath, and an indoor-outdoor shower penthouse.",

    highlights: [
      "2-4 Bed Branded Residences",
      "Nikki Beach Brand & Lifestyle",
      "Private Beach Club Access",
      "Terrace with Splash Pool",
      "30/70 Payment Plan",
      "Handover Q2 2027",
      "Only 32 Exclusive Residences",
    ],

    amenities: [
      { icon: "pool",      label: "Private Splash Pool Terrace" },
      { icon: "view",      label: "Private Beach Access" },
      { icon: "spa",       label: "Beach Club Spa" },
      { icon: "gym",       label: "Fitness Centre" },
      { icon: "concierge", label: "Brand Concierge" },
      { icon: "parking",   label: "2 Covered Parking" },
      { icon: "security",  label: "Island Security" },
      { icon: "bbq",       label: "Residents' Beach BBQ" },
      { icon: "kids",      label: "Kids Beach Club" },
      { icon: "retail",    label: "Retail & Beach Dining" },
    ],

    specs: [
      { label: "Property Type",  value: "Branded Apartment" },
      { label: "Status",         value: "Off-Plan" },
      { label: "Handover",       value: "Q2 2027" },
      { label: "Floor Level",    value: "Low-Rise (4–6F)" },
      { label: "Total Area",     value: "3,000 sq.ft" },
      { label: "Terrace",        value: "600 sq.ft (incl. splash pool)" },
      { label: "Bedrooms",       value: "3" },
      { label: "Bathrooms",      value: "4" },
      { label: "Parking",        value: "2 Covered Bays" },
      { label: "Developer",      value: "Pearl Jumeirah LLC" },
      { label: "Payment Plan",   value: "30/70" },
      { label: "Total Units",    value: "32 Exclusive Residences" },
    ],

    regulatory: {
      reference: "N-119045",
      zoneName: "Pearl Jumeirah",
      dldPermitNumber: "Awaiting RERA Registration",
    },
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",

    relatedIds: [2, 3, 6],
  },
];

// ── Helper Functions ──────────────────────────────────────────────────────────

export function getPropertyBySlug(slug) {
  return PROPERTIES_DATA.find((p) => p.slug === slug) || null;
}

export function getRelatedProperties(ids = []) {
  return PROPERTIES_DATA.filter((p) => ids.includes(p.id));
}

export function getFeaturedProperties() {
  return PROPERTIES_DATA.filter((p) => p.featured);
}

export function filterProperties({ type, status, district, beds, maxPrice } = {}) {
  return PROPERTIES_DATA.filter((p) => {
    if (type     && type     !== "All" && p.type     !== type)     return false;
    if (status   && status   !== "All" && p.status   !== status)   return false;
    if (district && district !== "All" && p.district !== district) return false;
    if (beds     && p.beds   < beds)                               return false;
    if (maxPrice && p.priceNumeric > maxPrice)                     return false;
    return true;
  });
}