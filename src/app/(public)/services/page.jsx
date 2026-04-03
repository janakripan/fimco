import ServicesHero from "../../components/services/ServicesHero";
import ServiceDetailedList from "../../components/services/ServiceDetailedList";
import ServicesProcess from "../../components/services/ServicesProcess";
import ServicesCTA from "../../components/services/ServicesCTA";

export const metadata = {
  title: "Expert Services | Property Management & Investment Advisory",
  description: "Explore Fimco's bespoke real estate services, from white-glove property management to strategic off-plan investment advisory in Dubai's premier developments.",
  alternates: {
    canonical: "/services",
  },
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
