import AboutHero from "../../components/about/AboutHero";
import AboutTeam from "../../components/about/AboutTeam";
import AboutPhilosophy from "../../components/about/AboutPhilosophy";
import AboutMission from "../../components/about/AboutMission";
import AboutStats from "../../components/about/AboutStats";

export const metadata = {
  title: "About Us | Fimco Real Estate",
  description: "Learn about Fimco Real Estate's mission, vision, and leadership in the Dubai property market.",
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
