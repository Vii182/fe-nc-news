import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topics = ["coding", "football", "coding"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden p-1 relative z-10">
      <button onClick={toggleMenu} className="text-white">
        {isOpen ? (
          <XIcon className="h-8 w-8" />
        ) : (
          <MenuIcon className="h-8 w-8" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-800 text-white p-4 rounded shadow-lg">
          <h2 className="text-lg font-bold text-orange-500 mb-2">Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic) => (
              <li key={topic}>
                <Link
                  to={`/articles/topics/${topic}`}
                  className="block py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-lg font-bold text-orange-500 mb-2">
              Navigation
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="block py-2 px-4 rounded hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  All Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
