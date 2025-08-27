import axios from "axios";

const BASE_URL = process.env.STARPI_URL;

export async function fetchDataFromStarpi (route){
    const url = `${BASE_URL}/api/${route}`;

    try {
        const response = await axios.get(url);
        return response.data.data;

    }catch(err){
        console.log(err)
        throw new Error (`Could not fetch data from ${url}`);
    }

}

export async function fetchHomepage(){
    const homeData = await fetchDataFromStarpi("homepages?populate=*")
       
    const processedHomePage = homeData.map(ProcessHomePage);

   return processedHomePage;
}

function ProcessHomePage(home){
    return {
        ...home.attributes,
        id:home.id,
        featuredImage: 
        BASE_URL + home.attributes?.featuredImage?.data?.attributes?.url,
    }
}

export async function fetchAboutPage (){
const aboutData = await fetchDataFromStarpi("about-uses?populate=*");
const processedAboutPage = aboutData.map(ProcessAboutUsPage);

return processedAboutPage
}
function ProcessAboutUsPage(about){
    return {
        ...about.attributes,
        id:about.id,
        featuredImage: 
        BASE_URL + about.attributes?.featuredImage?.data?.attributes?.url,
    }
}
export async function fetchBlogArticle(){
    const blogData = await fetchDataFromStarpi("blogpages?populate=*");
    const ProcessedBlogArticle =blogData.map(processBlogArticle);

     ProcessedBlogArticle.sort(
        (a,z) => new Date(z.publishedAt) - new Date(a.publishedAt)
    );
    return ProcessedBlogArticle;
}
function processBlogArticle(article){
    return {
          ...article.attributes,
        id:article.id,
        featuredImage: 
        BASE_URL + article.attributes?.featuredImage?.data?.attributes?.url,
    
    }
}
export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
}


export async function fetchEventsPage() {
    const eventData = await fetchDataFromStarpi("events-pages?populate=*")
        // populate[events_content][populate][featuredImage]=*");
    const ProcessedEvents = eventData.map(processEvents);
      
         ProcessedEvents.sort(
        (a,z) => new Date(z.publishedAt) - new Date(a.publishedAt)
    );

    return ProcessedEvents;
}
function processEvents(event){
     return {
          ...event.attributes,
        id:event.id,
        featuredImage: 
        BASE_URL + event.attributes?.featuredImage?.data?.attributes?.url,
    
    }
}
export function extractImageUrl(imageData){
    return BASE_URL + imageData.data?.attributes?.url
                      
}
