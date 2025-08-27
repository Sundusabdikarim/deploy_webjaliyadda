import HeroSection from "./HeroSection";
import SecondSection from "./secondsection";
import ThirdSection from "./ThirdSection";
import Contact from "./Contact";
import { fetchEventsPage } from "@/utilis/starpi.utlis";

import { fetchDataFromStarpi, fetchHomepage } from "@/utilis/starpi.utlis";
import FeaturedItem from "../Events/FeaturedItems";
import Page from "@/app/events/page";
export default async function HomePage  () {
const data = await fetchHomepage();



   const HeroSectionData = data.find(
  (hero) => hero.isHeroSection
);
console.log("HERO:", HeroSectionData);

 const AboutSection = data.find(
  (about) => about.IsAbout
);
console.log("About:", AboutSection);

const EventSection = data.filter(
  (event) => !event.isHeroSection && !event.IsAbout
);
console.log("Event:", EventSection);
const eventsData = await fetchEventsPage();

  const EventsItems = eventsData.filter(
    (event) => !event.IsheroSectionEvents
  );

return (
        <main>
           <HeroSection data={HeroSectionData}/>
      <SecondSection data = {AboutSection}/>
            <FeaturedItem items={EventsItems.slice(0, 3)} />

      {/* <ThirdSection items = {EventSection}/> */}
      <Contact/> 
        </main>
    )

}

