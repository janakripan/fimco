import { Montserrat } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/contexts/CursorContext";
import ThemeScroll from "../utils/ThemeScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://fimco.ae"), // Placeholder domain
  title: {
    default: "Fimco Real Estate | Luxury Property & Investment in Dubai",
    template: "%s | Fimco Real Estate",
  },
  description: "Fimco Real Estate is a premium, minimalist architectural and investment advisory in Dubai, specializing in luxury off-plan developments and asset management.",
  keywords: ["Dubai Real Estate", "Luxury Property Dubai", "Investment Advisory", "Fimco", "Off-plan Dubai"],
  authors: [{ name: "Fimco Real Estate" }],
  creator: "Fimco Real Estate",
  publisher: "Fimco Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fimco.ae",
    siteName: "Fimco Real Estate",
    title: "Fimco Real Estate | Luxury Property & Investment",
    description: "Discover a new standard of luxury property and architectural investment advisory in Dubai with Fimco.",
    images: [
      {
        url: "/og-image.jpg", // Needs to be placed in public/
        width: 1200,
        height: 630,
        alt: "Fimco Real Estate - Luxury Architectural Property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fimco Real Estate",
    description: "Premium real estate and investment advisory in Dubai.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Fimco Real Estate",
    "description": "Premium luxury real estate and investment advisory firm in Dubai.",
    "url": "https://fimco.ae",
    "logo": "https://fimco.ae/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/fimco-realestate",
      "https://www.instagram.com/fimco_realestate"
    ],
    "priceRange": "$$$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} font-montserrat antialiased`}
      >
        <CursorProvider>
          <ThemeScroll /> 
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
