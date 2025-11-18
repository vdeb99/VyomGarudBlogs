import { Link } from "react-router-dom";
import PostList from "./PostList";

const CategorySection = ({ category }) => {
  const posts = category.posts?.slice(0, 4) || [];

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{category.name}</h2>

        <Link
          to={`/category/${category.slug}`}
          className="text-blue-600 hover:underline"
        >
          More →
        </Link>
      </div>

      <PostList posts={posts} />
    </section>
  );
};

export default CategorySection;
