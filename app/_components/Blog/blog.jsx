const Blog = ({blog}) => {
    const { headline,featuredImage,pragraph}=blog;
    return (
        <article className="BlogHero">
         
          <img src={featuredImage}   />
        
          <div className="BlogHero__Text">
            <h3>{headline}</h3>
            <p> {pragraph}</p>
            </div>
        </article>
    )

}
export default Blog;