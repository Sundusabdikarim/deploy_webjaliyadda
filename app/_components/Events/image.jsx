import {extractImageUrl} from "@/utilis/starpi.utlis"
const Images = ({component}) => {
  
    return (
        <div className="imageIm">
<img src={extractImageUrl(component.featuredImage)} />
</div>
    )
}
export default Images;