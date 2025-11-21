import { Link } from "react-router-dom";
import PostList from "./PostList";

const CategorySection = ({ category }) => {
  const posts = category.posts?.slice(0, 3) || [];

  return (
    <section className="my-14">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />

          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {category.name}
          </h2>

          {category.posts?.length > 0 && (
            <span className="px-2.5 py-0.5 text-xs font-medium bg-slate-800 text-slate-400 rounded-full border border-slate-700">
              {category.posts.length} posts
            </span>
          )}
        </div>

        <Link
          to={`/category/${category.slug}`}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-400 hover:text-amber-300 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/30 rounded-lg transition-all duration-300"
        >
          <span>View All</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent mb-6" />

      <PostList posts={posts} />
    </section>
  );
};

export default CategorySection;
