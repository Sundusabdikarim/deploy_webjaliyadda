import { fetchEventsPage } from "@/utilis/starpi.utlis";
import Events from "../_components/Events/events";
import FeaturedItem from "../_components/Events/FeaturedItems";


export default async function Page() {
 
  const Data = await fetchEventsPage();
  console.log(Data)
  const EventsHero = Data.find(
    (Events) => Events.IsheroSectionEvents
  )
   
const EventsItems = Data.filter (
  (blog) => !blog.IsheroSectionEvents
);

 
  return (
    <main>
      <Events   items={EventsHero} />
      <FeaturedItem items={EventsItems} />
    </main>
  );
}