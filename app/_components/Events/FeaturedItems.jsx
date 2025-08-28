"use client";
import { useState } from "react";
import FeaturedArticle from "./FeaturedEvents";


const FeaturedItem = ({ items }) => {
  const [itemNumber, setItemNumber] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const toggleShow = () => {
    if (expanded) {
      setItemNumber(3); // Collapse back to first 3 items
    } else {
      setItemNumber(items.length); // Show all items
    }
    setExpanded(!expanded);
  };

  return (
    <section className="featuredItemsEvents">
      <div className="featuredItemsEvents__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle key={item.slug} event={item} />
        ))}
      </div>
      <div className="btnn">
        {items.length > 3 && (
          <button className="btnn--small" onClick={toggleShow}>
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedItem;
