import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost } from "../api/posts";
import PostImage from "../components/blog/PostImage";
import AuthorBadge from "../components/blog/AuthorBadge";
import CategoryBadge from "../components/blog/CategoryBadge";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/Error";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("Post:", post);

  useEffect(() => {
    setLoading(true);

    getPost(slug)
      .then((res) => {
        setPost(res.data.data[0]);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;
  if (!post) return <ErrorMessage message="Post not found" />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PostImage
        image={post.coverImage.url}
        alt={post.title}
        className="h-80 rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <AuthorBadge author={post.author} />

      <div className="flex gap-2 my-4">
        {post.categories?.map((cat) => (
          <CategoryBadge key={cat.documentId} category={cat} />
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

     
    </div>
  );
};

export default Post;
