const Events = ({items}) => {
return (
    <section className="Events">
    <div className="Events__background">
        <Image src={items.featuredImage}/>
         </div>
         <div className="Events__text">
        <p>{items.text}
         </p>
         </div>
    </section>
)
}

export default Events ;