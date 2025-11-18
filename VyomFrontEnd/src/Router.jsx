import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Post from "./pages/Post";
import Author from "./pages/Author";
import About from "./pages/About";


export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/author/:slug" element={<Author />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};


