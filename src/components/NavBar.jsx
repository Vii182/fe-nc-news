import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex space-x-4">
            <Link to="/" className="transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">Home</Link>
            <Link to="/articles" className="transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">Articles</Link>
            <Link to="/Users" className="transition-transform transform hover:scale-110 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">Users</Link>
        </nav>
    )
}

export default NavBar;