import { useEffect, useState } from "react";
import { getAllCategories } from "../api/categories";
import CategorySection from "../components/blog/CategorySection";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/Error";
import SearchBar from "../components/layout/SearchBar";
import Search from "./Search";
import About from "./About";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
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
      <About />
      <SearchBar setQuery={setQuery}/>
      {query && 
      <div className="">
      <h2 className="text-2xl font-bold mb-6 text-white">Search results for "{query}"</h2>
      <Search slug={query}
       />
       </div>
      }
      {categories.map((cat) => (
        <CategorySection key={cat.documentId} category={cat} />
      ))}
    </div>
  );
};

export default Home;
