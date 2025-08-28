"use client";
import Images from "./imagecomponent";

const EventComponent = ({ component }) => {
  if (!component) return null;

  const type = component.__component?.split("events-page.")?.[1];
  if (!type) return null;

  switch (type) {
    case "imagestex":
      return <Images component={component} />;
    default:
      return null;
  }
};

export default EventComponent;
