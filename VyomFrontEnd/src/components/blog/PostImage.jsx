import imageUrl from "../../utils/imageUrl";

const PostImage = ({ image, alt = "", className = "" }) => {
  const src = image ? imageUrl(image) : "/default-thumbnail.jpg";

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover ${className}`}
      loading="lazy"
    />
  );
};

export default PostImage;
