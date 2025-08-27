import { fetchEventsPage ,fetchDataFromStarpi } from "@/utilis/starpi.utlis";
import Hightlight from "@/app/_components/Events/HiglightEvents";
import EventComponent from "@/app/_components/Events/EventComponents";


export default async function Page ({ params }) {

    const {event: slug} = params;

    const events = await fetchEventsPage();
    const event = events.find((event) => event.slug === slug);

  return (

    <main className="">
      <Hightlight event={event}/>
      <div className="imagestext">
      {event.events_content.map ((component) => (
        <EventComponent key ={component.id} component={ component }/>
      ))}
      </div>
    </main>
  );
}
export async function generatStaticParams(){
    const events = await fetchDataFromStarpi("events-pages")

    return events.map((event) => ({
        event: event.attributes.slug,
    }))
    
}
export const revalidate = 300;