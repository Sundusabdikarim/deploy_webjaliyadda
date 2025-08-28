"use client";
import Image from "next/image";

const Images = ({ component }) => {
  if (!component.featuredImage) return <p>No image found</p>;

  return (
    <div className="imageIm">
      <Image
        src={component.featuredImage}
        width={500}
        height={500}
        alt="Event Image"
      />
    </div>
  );
};

export default Images;
