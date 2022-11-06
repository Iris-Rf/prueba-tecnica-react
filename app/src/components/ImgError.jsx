
export const ImgError=(image) =>{
    image.onerror = "";
    image.src = "/images/noimage.gif";
    return true;
}

export default ImgError;