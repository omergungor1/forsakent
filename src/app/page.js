import { Navbar, Footer } from "../components";

import Hero from "./hero";
import Testimonials from "./testimonials";
import AboutUs from "./about-us";
import OurStats from "./our-stats";
import Contact from "../components/contact";
// import EventContent from "./event-content";
import Faq from "./faq";
import Hizmetlerimiz from "./hizmetlerimiz";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Hizmetlerimiz />
      <Testimonials />
      <OurStats />
      {/* <EventContent /> */}
      <Faq />
      <Contact />
      {/*<FloatingContact /> */}
      <Footer />
    </>
  );
}
