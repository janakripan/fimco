import About from "../components/home/About";
import Blogs from "../components/home/Blogs";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Properties from "../components/home/Properties";
import Services from "../components/home/Services";

export default function PublicHomePage() {
  return(
    <main>
       <Hero />
      <About />
      <Services />
      <Properties />
      <Blogs />
      <Contact />
      
       
    </main>
  );
}

