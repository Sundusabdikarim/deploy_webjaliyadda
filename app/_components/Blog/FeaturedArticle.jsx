import Link from "next/link";
import {formatDate} from  "@/utilis/starpi.utlis"
import Image from "next/image";

const FeaturedArticle = ({article}) =>{
    return (
      <Link href={`/blog/${article.slug}`} className="featuredItems__article">
    
      <div className="featuredItems__image">
    <Image src={article.featuredImage}
     alt={article.headline} width={300} height={300}/>
    </div>  
    <div className="featuredItems__Text">
      <h5>{article.headline}</h5>
        <p>{formatDate(article.publishedAt)}</p>
        </div> 
     
        </Link>  
    )
}
export default FeaturedArticle