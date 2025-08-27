"use client"
import { useState } from "react";
import Image from "next/image";

const ThirdSection = ( {headline, items =[ {title},{date}, {featuredImage}, {location}]}) => {

 const [itemNumber,setItemNumber] = useState (3);

    const onShowmore = () => {
        if (itemNumber +3 > items.length){;
            return setItemNumber(items.length)
        }else {
            return setItemNumber(itemNumber+3);
        }
    }
    return (
       <section className="ThirdSec">
        <h5 className="ThirdSec__headline">
            Events
        </h5>
        <div className="ThirdSec__container">
            {items.slice(0,itemNumber).map((item,index) => (
                <div key = {index} className="ThirdSec__Card"> 
                <Image src ={item.featuredImage} className="ThirdSec__imageTh" width={500}/>
                <div className="ThirdSec__hedalo">
                <h5>{item.title}</h5>
                <p>{item.date}</p>
                <p>{item.location}</p>

                 </div>
                </div>

            ))}
        </div>
        <div className="ThirdSec__button">
        {itemNumber <items.length && (
            <button className="btn btn--medium " onClick={onShowmore}>
                See More
            </button>
        )}
        </div>
       </section>
    )
}

export default ThirdSection;


