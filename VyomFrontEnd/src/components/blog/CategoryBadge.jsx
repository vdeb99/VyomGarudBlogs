const CategoryBadge = ({ category }) => {
    if (!category) return null;
  
    return (
      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
        {category.name}
      </span>
    );
  };
  
  export default CategoryBadge;
  