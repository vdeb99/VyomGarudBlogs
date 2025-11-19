import { useEffect, useState } from "react";
import { getAllCategories } from "../api/categories";
import CategorySection from "../components/blog/CategorySection";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/Error";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (!categories.length) return <ErrorMessage message="No categories found" />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {categories.map((cat) => (
        <CategorySection key={cat.documentId} category={cat} />
      ))}
    </div>
  );
};

export default Home;
