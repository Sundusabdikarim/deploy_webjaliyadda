import {extractImageUrl} from "@/utilis/starpi.utlis"
import Image from "next/image";

const Images = ({component}) => {
  
    return (
        <div className="imageIm">
<Image src={extractImageUrl(component.featuredImage)} width={500} height={500}  />
</div>
    )
}
export default Images;