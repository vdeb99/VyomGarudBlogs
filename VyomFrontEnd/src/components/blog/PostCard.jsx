import { Link } from "react-router-dom";
import PostImage from "./PostImage";
import AuthorBadge from "./AuthorBadge";
import CategoryBadge from "./CategoryBadge";
import { formateDate } from "../../utils/formateDate";

const PostCard = ({ post }) => {
  if (!post) return null;

  const img = post.coverImage?.url;
  const author = post.author;
  const category = post.categories?.[0];
  console.log("postcard details", post);

  return (
    <Link
      to={`/post/${post.slug}`}
      className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 block border border-slate-700/50 hover:border-amber-500/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative overflow-hidden">
        <PostImage
          image={img}
          alt={post.title}
          className="h-52 rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

        {category && (
          <div className="absolute top-3 left-3">
            <CategoryBadge category={category} />
          </div>
        )}
      </div>

      <div className="relative p-5 space-y-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
          {post.excerpt}
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="flex items-center justify-between">
          <AuthorBadge author={author} />

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{formateDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );
};

export default PostCard;
