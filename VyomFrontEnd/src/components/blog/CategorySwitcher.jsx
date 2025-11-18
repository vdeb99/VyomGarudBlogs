import { useNavigate } from "react-router-dom";

const CategorySwitcher = ({ categories = [], currentSlug }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const slug = e.target.value;
    navigate(`/category/${slug}`);
  };

  return (
    <div className="mb-6">
      <select
        value={currentSlug}
        onChange={handleChange}
        className="border px-3 py-2 rounded"
      >
        {categories.map((cat) => (
          <option key={cat.documentId} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySwitcher;
