import Hightlight from "./higlightEvents";
import Images  from "./image"

const  EventComponent = ( { component }  ) => {
    console.log(component)
    const componentType = component.__component.split("events-page.")[1];
    switch (componentType){
        // case "text":
        //     return <Hightlight headlines={component}/>;
    
        case "imagestex":
        return <div className="imagestext">
        <Images component = {component} />
        </div>
      
        
    }
}

export default EventComponent