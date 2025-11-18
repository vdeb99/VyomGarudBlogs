import React from "react";
import Logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SearchBar from "./SearchBar";
function Header() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <header className="pt-2 shadow bg-blue-950">
      <nav className="flex">
        <div className="mr-4 flex justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200"
          >
            <ArrowLeft className="w-3 h-3 text-white" />
          </button>
          <Link to="/" className="flex gap-1">
            <img src={Logo} className="h-14 w-14" alt="Logo.jpg" />
            <span className="text-lg sm:text-xl md:text-2xl font-medium ">
              <span className="text-white">Vyom</span>
              <br />
              <span className="text-orange-400">Garud</span>
            </span>
          </Link>
        </div>
        <ul className="flex ml-auto">
          <li>
            <Link to="/">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200">
                <span className="text-white">Home</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200">
                <span className="text-white">About</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/category">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200">
                <span className="text-white">Category</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <SearchBar />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
