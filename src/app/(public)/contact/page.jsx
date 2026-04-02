import ContactHero from "../../components/contact/ContactHero";
import ContactCategories from "../../components/contact/ContactCategories";
import ContactForm from "../../components/contact/ContactForm";
import OfficeMap from "../../components/contact/OfficeMap";

export const metadata = {
  title: "Contact Us | Fimco Real Estate",
  description: "Get in touch with our luxury real estate advisors in Dubai. Request a private callback, list your property, or find our headquarters.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCategories />
      <ContactForm />
      <OfficeMap />
    </>
  );
}