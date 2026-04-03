import AboutHero from "../../components/about/AboutHero";
import AboutTeam from "../../components/about/AboutTeam";
import AboutPhilosophy from "../../components/about/AboutPhilosophy";
import AboutMission from "../../components/about/AboutMission";
import AboutStats from "../../components/about/AboutStats";

export const metadata = {
  title: "About Fimco | Our Mission & Vision for Dubai Real Estate",
  description: "Learn about Fimco Real Estate's elite mission, vision, and leadership. We provide architectural-level precision in property management and investment advisory across Dubai.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPhilosophy />
      <AboutStats />
      <AboutMission />
      <AboutTeam />
    </>
  );
}
