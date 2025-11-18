import React from 'react'
import { Search } from 'lucide-react'
function SearchBar() {
  return (
    <div>
        <div className="flex bg-slate-600 text-shadow-white px-2 rounded-2xl mt-1 py-2">
                <Search className="w-4 h-4 text-white mr-2 mt-1" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none border-none text-white placeholder-white w-32 sm:w-48 md:w-64"
                  />
        </div>
              
    </div>
  )
}

export default SearchBar