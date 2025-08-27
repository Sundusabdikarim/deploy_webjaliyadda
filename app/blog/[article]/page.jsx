import { fetchBlogArticle } from "@/utilis/starpi.utlis";

export default async function Page ({ params }) {

    const {article: slug} = params;

    const articles = await fetchBlogArticle();
    const article = articles.find((article) => article.slug == slug);
  return (
    <main className="SlugArticle">
      <h5>{article.headline}</h5>
      <p>{article.pragraph}</p>
      <img src={article.featuredImage} className="SlugArticle__image"/>

    </main>
  );
}

export async function generatStaticParams (){
    const articles = await fetchDataFromStarpi("blogpages");

    return articles.map((article) => ({
        article: article.attribute
    }))
}