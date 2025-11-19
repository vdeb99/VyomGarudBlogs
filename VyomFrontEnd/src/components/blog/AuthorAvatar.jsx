import imageUrl  from "../../utils/imageUrl";

const AuthorAvatar = ({ avatar, name, size = 40 }) => {
  console.log(avatar);
  const src = avatar ? imageUrl(avatar.url) : "/default-avatar.png";

  return (
    <img
      src={src}
      alt={name}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
};

export default AuthorAvatar;
