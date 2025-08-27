import Link from "next/link"

const HerSection =( { data } ) => {
    const {headline ,text ,featuredImage } = data;
    return (
       <section className="hero">
        <div className="hero__background">
            <Image className ="" src = {featuredImage} />
        </div>
        <div className="hero__headline">
            <h5>{headline}</h5>
            <p className="hero__coppyhero"> {text} </p>


        </div>
        <button className="btn btn--medium">
            <Link href="/"> Learn More</Link>
        </button>
       </section>
    )
}
export default HerSection