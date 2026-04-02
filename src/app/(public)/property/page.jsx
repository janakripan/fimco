import PropertyHero from "../../components/property/PropertyHero";
import GlobalReach from "../../components/property/GlobalReach";
import PropertySearchSort from "../../components/property/PropertySearchSort";
import PropertyListView from "../../components/property/PropertyListView";
import ListPropertyCTA from "../../components/contact/ListPropertyCTA";


export const metadata = {
  title: "Properties | Fimco Real Estate",
  description: "Explore our exclusive portfolio of luxury real estate directly curated by Fimco advisors.",
};

export default function PropertyPage() {
  return (
    <>
      <PropertyHero />
      <PropertySearchSort />
      <PropertyListView />
      <ListPropertyCTA />
      <GlobalReach />
    </>
  );
}
