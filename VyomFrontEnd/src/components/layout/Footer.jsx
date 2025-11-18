import React from 'react';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2025 Copyright:</span>
        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          to="/"
        >VyomGarudBlogs</Link>
      </div>
    </footer>
  );
}