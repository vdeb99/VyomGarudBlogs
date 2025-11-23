import React from "react";
// import Logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Header() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <header className="pt-2 shadow bg-blue-950">
      <nav className="flex justify-between">
        <div className="mr-4 flex justify-between">
          <button
            onClick={goBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200"
          >
            <ArrowLeft className="w-3 h-3 text-white" />
          </button>
          <Link to="/" className="flex gap-1">
          <img src="https://smart-spirit-34e745db09.media.strapiapp.com/thumbnail_logo_5ea9cb61dd.png?updatedAt=2025-11-23T16%3A11%3A31.912Z" alt="Logo" />
            <span className="text-lg sm:text-xl md:text-2xl font-medium ">
              <span className="text-white">Vyom</span>
              <br />
              <span className="text-orange-400">Garud</span>
            </span>
          </Link>
        </div>
        <div className="mx-20">
          <Link to="/">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200">
              <span className="text-white">Home</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
