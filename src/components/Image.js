import useImageDownloader from "../hooks/useImageDownloader"

function Image(props) {
    const { size, alt, imageId, ...other } = props
    const imageUrl = useImageDownloader(imageId);


    return (
        <img src={imageUrl} width={size.width} height={size.height} alt={alt} {...other} />
    )
}

export default Image;