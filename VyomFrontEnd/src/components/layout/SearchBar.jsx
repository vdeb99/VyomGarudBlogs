import { Search } from "lucide-react";
import { slugify } from "../../utils/slugify";
function SearchBar({ setQuery }) {
  return (
    <div className="flex bg-slate-600 px-2 rounded-2xl mt-1 py-2 items-center">
      <Search className="w-4 h-4 text-white mr-2" />
      <input
        onChange={(e) => setQuery(slugify(e.target.value))}
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-white placeholder-white w-full"
      />
    </div>
  );
}

export default SearchBar;
