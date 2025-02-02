import Hero from "./hero";
import Testimonials from "./testimonials";
import AboutUs from "./about-us";
import OurStats from "./our-stats";
// import EventContent from "./event-content";
import Faq from "./faq";
import Hizmetlerimiz from "./hizmetlerimiz";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Hizmetlerimiz />
      <Testimonials />
      <OurStats />
      {/* <EventContent /> */}
      <Faq />
    </>
  );
}
