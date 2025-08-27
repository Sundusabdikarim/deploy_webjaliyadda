"use client";
import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";

const FeaturedItem = ({ headline, items }) => {
  const [itemNumber, setItemNumber] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const toggleShow = () => {
    if (expanded) {
      setItemNumber(3); // Collapse back
    } else {
      setItemNumber(items.length); // Show all
    }
    setExpanded(!expanded);
  };

  return (
    <section className="featuredItems">
      {headline && <h3 className="featuredItems__Headline">{headline}</h3>}

      <div className="featuredItems__container">
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
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
