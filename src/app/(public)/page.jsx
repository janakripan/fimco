import HomeClient from "./HomeClient";

export const metadata = {
  title: "Fimco Real Estate | Luxury Property & Investment Advisory in Dubai",
  description: "Fimco Real Estate is Dubai's leading minimalist architectural and investment advisory, specializing in premium residential and commercial elite assets.",
  alternates: {
    canonical: "/",
  },
};

export default function PublicHomePage() {
  return <HomeClient />;
}
