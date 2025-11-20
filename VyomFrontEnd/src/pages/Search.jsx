import { useEffect, useState } from "react";
import { slugify } from "../utils/slugify";
import { getPostsWithRelations } from "../api/posts";
import Loader from "../components/ui/Loader";
import PostList from "../components/blog/PostList";

const Search = ({ slug }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPostsWithRelations()
      .then((res) => {
        const allPosts = res.data.data;
        const searchSlug = slugify(slug);

        const filtered = allPosts.filter((post) => {
          const postSlug = slugify(post.slug);
          const title = slugify(post.title);

          const tagMatches = post.tags?.some(
            (tag) =>
              slugify(tag.name).includes(searchSlug) ||
              slugify(tag.slug).includes(searchSlug)
          );

          return (
            postSlug.includes(searchSlug) ||
            title.includes(searchSlug) ||
            tagMatches
          );
        });

        setPosts(filtered);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-gray-400">No posts found.</p>
      )}
    </div>
  );
};

export default Search;
