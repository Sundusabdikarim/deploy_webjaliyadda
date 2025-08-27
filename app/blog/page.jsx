import Blog from "@/app/_components/Blog/blog";
import FeaturedItems from "../_components/Blog/featuredItems";
import FeaturedArticle from "../_components/Blog/FeaturedArticle";
import { fetchBlogArticle } from "@/utilis/starpi.utlis";

export default async function Page() {
  const Data = await fetchBlogArticle();
  // console.log(Data)
  const BlogHero = Data.find(
    (blog) => blog. IsArticleHero
  )
  
const FeaturedArticleData = Data.filter (
  (blog) => !blog.IsArticleHero
);

  return (
    <main>
        <Blog blog ={BlogHero} />
        <FeaturedItems
         items={FeaturedArticleData}
         />
      
    </main>
  );
}
export const revalidate = 300;