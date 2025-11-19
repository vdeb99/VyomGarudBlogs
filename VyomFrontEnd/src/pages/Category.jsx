import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories, getCategoryBySlug } from "../api/categories";
import CategorySwitcher from "../components/blog/CategorySwitcher";
import PostList from "../components/blog/PostList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/Error";

const Category = () => {
  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    getAllCategories().then((res) => setCategories(res.data.data));
  }, []);

  useEffect(() => {
    setLoading(true);
    getCategoryBySlug(slug)
      .then((res) => {
        setCategory(res.data.data[0]);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loader />;
  if (!category) return <ErrorMessage message="Category not found" />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <CategorySwitcher
        categories={categories}
        currentSlug={slug}
      />

      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      <PostList posts={category.posts || []} />
    </div>
  );
};

export default Category;
