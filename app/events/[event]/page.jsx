import { fetchDataFromStarpi, getImageUrl } from "@/utilis/starpi.utlis";
import HighlightEvents from "@/app/_components/Events/HighlightEvents";
import EventComponent from "@/app/_components/Events/EventComponents";

export default async function Page({ params }) {
  const { event: slug } = params;

  // Fetch only one event with its images
  const res = await fetchDataFromStarpi(
    `events-pages?filters[slug][$eq]=${slug}&populate=featuredImage,events_content.featuredImage`
  );

  if (!res || !res[0]) {
    return <p>Event not found</p>;
  }

  // ✅ Clean up the data like in fetchEventsPage
  const raw = res[0];
  const event = {
    ...raw.attributes,
    id: raw.id,
    featuredImage: getImageUrl(raw.attributes.featuredImage),
    events_content:
      raw.attributes.events_content?.map((component) => ({
        ...component,
        featuredImage: getImageUrl(component.featuredImage),
      })) || [],
  };

  return (
    <main>
      <HighlightEvents event={event} />
      <div className="imagestext">
        {event.events_content.map((component) => (
          <EventComponent key={component.id} component={component} />
        ))}
      </div>
    </main>
  );
}

// ✅ Static params
export async function generateStaticParams() {
  const events = await fetchDataFromStarpi("events-pages");

  return events.map((event) => ({
    event: event.attributes.slug,
  }));
}

export const revalidate = 300;
