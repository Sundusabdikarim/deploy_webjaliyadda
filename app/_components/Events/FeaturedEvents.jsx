import Link from "next/link";
import {formatDate} from "@/utilis/starpi.utlis"
const FeaturedArticle = ({event}) =>{
    return (
      <Link href={`/events/${event.slug}`} className="featuredItemsEvents__article">
    <div className="featuredItemsEvents__image">
    <Image src={event.featuredImage}
     alt=""/> width={500} height={500} </div>  
    <div className="featuredItemsEvents__Text">
        <h5>{event.text}</h5>
        <p className="">{event.location}</p>
        <p>{formatDate(event.publishedAt)}</p>
        </div> 
     
        </Link>  
    )
}
export default FeaturedArticle