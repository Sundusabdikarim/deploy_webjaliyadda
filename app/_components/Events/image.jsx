"use client"; // Needed if using Next.js Image on the client side

import Image from "next/image";
import { getImageUrl } from "@/utilis/starpi.utlis";

const Images = ({ component }) => {
  const imageUrl = getImageUrl(component.featuredImage);

  return (
    <div className="imageIm">
      {imageUrl ? (
        <Image src={imageUrl} width={500} height={500} alt="Event image" />
      ) : (
        <div className="placeholder">No Image</div>
      )}
    </div>
  );
};

export default Images;
