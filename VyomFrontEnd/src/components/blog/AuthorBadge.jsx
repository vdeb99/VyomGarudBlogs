import AuthorAvatar from "./AuthorAvatar";

const AuthorBadge = ({ author }) => {
  if (!author) return null;

  return (
    <div className="flex items-center gap-2">
      <AuthorAvatar avatar={author.avatar} name={author.name} size={32} />
      <span className="text-sm text-gray-600">{author.name}</span>
    </div>
  );
};

export default AuthorBadge;
