import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_STARPI_URL;

// Fetch data helper
export async function fetchDataFromStarpi(route) {
  const url = `${BASE_URL}/api/${route}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw new Error(`Could not fetch data from ${url}`);
  }
}
export function getImageUrl(image) {
  if (!image) return null;
  const url = image?.data?.attributes?.url || image?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : `${BASE_URL}${url}`;
}


// ---- Pages ----
export async function fetchHomepage() {
  const data = await fetchDataFromStarpi("homepages?populate=*");
  return data.map((home) => ({
    ...home.attributes,
    id: home.id,
    featuredImage: getImageUrl(home.attributes.featuredImage),
  }));
}

export async function fetchAboutPage() {
  const data = await fetchDataFromStarpi("about-uses?populate=*");
  return data.map((about) => ({
    ...about.attributes,
    id: about.id,
    featuredImage: getImageUrl(about.attributes.featuredImage),
  }));
}

export async function fetchBlogArticle() {
  const data = await fetchDataFromStarpi("blogpages?populate=*");
  const articles = data.map((article) => ({
    ...article.attributes,
    id: article.id,
    featuredImage: getImageUrl(article.attributes.featuredImage),
  }));

  return articles.sort(
    (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
  );
}
export async function fetchEventsPage() {
  const data = await fetchDataFromStarpi(
    "events-pages?populate=featuredImage,events_content.featuredImage"
  );

  const events = data.map((event) => ({
    ...event.attributes,
    id: event.id,
    featuredImage: getImageUrl(event.attributes.featuredImage),
    events_content: event.attributes.events_content?.map((component) => ({
      ...component,
      featuredImage: getImageUrl(component.featuredImage),
    })) || [],
  }));

  return events.sort(
    (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
  );
}



// Utility
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
