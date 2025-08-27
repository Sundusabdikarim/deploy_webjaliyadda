const Events = ({items}) => {
return (
    <section className="Events">
    <div className="Events__background">
        <Image src={items.featuredImage} width={500} height={500} />
        </div>
         <div className="Events__text">
        <p>{items.text}
         </p>
         </div>
    </section>
)
}

export default Events ;