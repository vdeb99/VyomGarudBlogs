import { useEffect, useState } from "react";
import AuthorAvatar from "./AuthorAvatar";
import { getAuthorByDocId } from "../../api/authors";
import { useNavigate } from "react-router-dom";
const AuthorBadge = ({ author }) => {
  const navigate = useNavigate();
  if (!author) return null;
  const [authorDetails, setAuthorDetails] = useState(author);
  if (!author.avatar) {
    useEffect(() => {
      getAuthorByDocId(author.documentId)
        .then((res) => {
          setAuthorDetails(res.data.data);
        })
        .catch((err) => console.error(err));
    }, []);
  }

  return (
    <div onClick={()=>navigate(`/author/${authorDetails.documentId}`)} className="flex items-center gap-2 cursor-pointer">
      <AuthorAvatar
        avatar={authorDetails.avatar}
        name={authorDetails.name}
        size={32}
      />
      <h1 className="text-lg text-red-600">{author.name}</h1>
    </div>
  );
};

export default AuthorBadge;
