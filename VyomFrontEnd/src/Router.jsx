import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Post from "./pages/Post";
import Author from "./pages/Author";
import Search from "./pages/Search";
import About from "./pages/About";


import Layout from "./components/layout/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/post/:slug"
          element={
            <Layout>
              <Post />
            </Layout>
          }
        />

        <Route
          path="/category/:slug"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />

        <Route
          path="/author/:documentId"
          element={
            <Layout>
              <Author />
            </Layout>
          }
        />

        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
