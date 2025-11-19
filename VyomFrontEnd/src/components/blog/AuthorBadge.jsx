import { useEffect, useState } from "react";
import AuthorAvatar from "./AuthorAvatar";
import { getAuthorById } from "../../api/authors";
const AuthorBadge = ({ author }) => {
  if (!author) return null;
  
  const [authorDetails, setAuthorDetails] = useState(null);
  useEffect(() => {
    getAuthorById(author.documentId)
      .then((res) => {
        console.log(res.data)
        setAuthorDetails(res.data.data);
      })
      .catch((err) => console.error(err))
      
  }, []);
  console.log('Author Details in Badge : ', authorDetails);
  if(!authorDetails) return null;
  return (
    <div className="flex items-center gap-2">
      <AuthorAvatar avatar={authorDetails.avatar} name={authorDetails.name} size={32} />
      <span className="text-sm text-gray-600">{author.name}</span>
    </div>
  );
};

export default AuthorBadge;
