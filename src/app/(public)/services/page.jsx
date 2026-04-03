import ServicesHero from "../../components/services/ServicesHero";
import ServiceDetailedList from "../../components/services/ServiceDetailedList";
import ServicesProcess from "../../components/services/ServicesProcess";
import ServicesCTA from "../../components/services/ServicesCTA";

export const metadata = {
  title: "Services | Fimco Real Estate",
  description: "Comprehensive luxury real estate services in Dubai.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetailedList />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
}
