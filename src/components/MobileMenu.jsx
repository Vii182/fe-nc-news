import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

// <<<<< MAIN COMPONENT >>>>> -----
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  // <<<<< TOPICS LIST >>>>> -----
  const topics = ["coding", "football", "cooking"];

  // <<<<< TOGGLE OPEN >>>>> -----
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // <<<<< QUICKLOGOUT >>>>> -----
  const handleQuickLogout = () => {
    logout();
    navigate("/");
  };

  // <<<<< MAIN RETURN >>>>> -----
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
          <div className="mt-4">
            {user ? (
              <>
                <span className="block text-orange-400 mb-2">
                  Hello, {user.username}
                </span>
                <button
                  onClick={handleQuickLogout}
                  className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
