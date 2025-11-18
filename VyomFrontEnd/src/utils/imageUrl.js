export default function imageUrl(img){
    if(!img){
        return "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
    }
    return import.meta.env.VITE_STRAPI_URL + img.url
}