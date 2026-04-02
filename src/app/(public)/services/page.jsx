import ServicesHero from "../../components/services/ServicesHero";
import HomeServices from "../../components/home/Services";
import ServicesProcess from "../../components/services/ServicesProcess";

export const metadata = {
  title: "Services | Fimco Real Estate",
  description: "Comprehensive luxury real estate services in Dubai.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <HomeServices />
      <ServicesProcess />
    </>
  );
}
