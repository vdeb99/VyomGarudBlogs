import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PostImage from "./PostImage";
import AuthorBadge from "./AuthorBadge";
import CategoryBadge from "./CategoryBadge";

const PostCard = ({ post }) => {
  if (!post) return null;

  const img = post.coverImage?.url;
  const author = post.author;
  const category = post.categories?.[0];

  return (
    <Link
      to={`/post/${post.slug}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition block"
    >
      <PostImage image={img} alt={post.title} className="h-48 rounded-t-lg" />

      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-amber-300">{post.title}</h3>
        <span className="text-red-800">{post.excerpt}</span>

        <AuthorBadge author={author} />
      </div>
    </Link>
  );
};

export default PostCard;
