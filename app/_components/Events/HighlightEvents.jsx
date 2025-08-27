const Hightlight = ({ event }) => {
    const headlines = event.events_content.filter(
        (component) => component.__component === "events-page.text"
    )
    console.log(headlines)
   return (
   <section className="eventpagetext">
    <div>
            {headlines.map((headline,) =>(
                <div key={headline.id} className="" > <h5>{headline.headline}</h5>
                <p> {headline.subtitile}</p>
                </div>
              
            ))}
         {/* <h5>{headlines[0].headline}</h5>
         <p>{headlines[0].subtitile}</p> */}
    </div>
    <div>
    </div>
   </section>
    )
}
export default Hightlight