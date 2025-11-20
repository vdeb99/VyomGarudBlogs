import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getAuthorByDocId, getPostsByAuthor } from "../api/authors";
import PostList from "../components/blog/PostList";
import AuthorBadge from "../components/blog/AuthorBadge";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/Error";
import { Mail } from "lucide-react";
const Author = () => {
  const { documentId: docId } = useParams();

  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAuthorByDocId(docId)
      .then((res) => {
        console.log("Author Data:", res.data.data);
        setAuthor(res.data.data);
      })
      .finally(() => setLoading(false));
  }, [docId]);

  useEffect(() => {
    getPostsByAuthor(docId).then((res) => {
      setPosts(res.data.data);
    });
  }, [docId]);

  if (loading) return <Loader />;
  if (!author) return <ErrorMessage message="Author not found" />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-amber-50">
      <div className="flex justify-between mb-10">
        <AuthorBadge author={author} />
        <div className="flex gap-1 " >
          <Mail></Mail>
          <span>{author.email}</span>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{author.bio}</ReactMarkdown>
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-6">Posts by {author.name}</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default Author;
