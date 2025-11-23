export default function imageUrl(img) {
  if (!img) {
    return "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg";
  }

  if (img.startsWith("http") || img.startsWith("//")) {
    return img;
  }

  const strapiUrl = import.meta.env.VITE_STRAPI_URL;

  return `${strapiUrl}${img}`;
}
