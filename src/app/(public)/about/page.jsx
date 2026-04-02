import AboutHero from "../../components/about/AboutHero";
import AboutTeam from "../../components/about/AboutTeam";
import HomeAbout from "../../components/home/About";

export const metadata = {
  title: "About Us | Fimco Real Estate",
  description: "Learn about Fimco Real Estate's mission, vision, and leadership in the Dubai property market.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HomeAbout />
      <AboutTeam />
    </>
  );
}
