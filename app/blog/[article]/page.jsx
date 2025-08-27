import { fetchBlogArticle } from "@/utilis/starpi.utlis";
import Image from "next/image";

export default async function Page ({ params }) {

    const {article: slug} = params;

    const articles = await fetchBlogArticle();
    const article = articles.find((article) => article.slug == slug);
  return (
    <main className="SlugArticle">
      <h5>{article.headline}</h5>
      <p>{article.pragraph}</p>
      <Image src={article.featuredImage} className="SlugArticle__image" width={300} height={300}/>

    </main>
  );
}

export async function generatStaticParams (){
    const articles = await fetchDataFromStarpi("blogpages");

    return articles.map((article) => ({
        article: article.attribute
    }))
}