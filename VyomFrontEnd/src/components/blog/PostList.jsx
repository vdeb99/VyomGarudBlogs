import PostCard from "./PostCard";

const PostList = ({ posts = [] }) => {
  if (!posts.length) return <p>No posts found.</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.documentId} post={post} />
      ))}
    </div>
  );
};

export default PostList;
