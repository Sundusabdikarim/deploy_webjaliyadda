import Image from "next/image";


const Blog = ({blog}) => {
    const { headline,featuredImage,pragraph}=blog;
    return (
        <article className="BlogHero">
         
          <Image src={featuredImage} width={500} height={500}   />
        
          <div className="BlogHero__Text">
            <h3>{headline}</h3>
            <p> {pragraph}</p>
            </div>
        </article>
    )

}
export default Blog;