// components
import { Navbar, Footer } from "../components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import Hizmetlerimiz from "./hizmetlerimiz";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <Hizmetlerimiz />
      <SponsoredBy />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </>
  );
}
