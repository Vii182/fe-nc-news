import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// <<<<< NAVBAR COMPONENT (HEADER) >>>>> ------
const NavBar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  // <<<<< QUICKLOGOUT (NAVIGATES TO HOME) >>>>> ------
  const handleQuickLogout = () => {
    logout();
    navigate("/");
  };

  // <<<<< MAIN RETURN >>>>> ------
  return (
    <nav className="text-white flex items-center space-x-4">
      <Link
        to="/"
        className="text-sm sm:text-base transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        Home
      </Link>
      <Link
        to="/articles"
        className="text-sm sm:text-base transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        Articles
      </Link>
      {user ? (
        <>
          <span className="text-orange-400">Hello, {user.username}</span>
          <button
            onClick={handleQuickLogout}
            className="text-sm sm:text-base transition-transform transform hover:scale-110 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="text-sm sm:text-base transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
