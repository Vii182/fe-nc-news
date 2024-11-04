import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/Users">Users</Link>
        </nav>
    )
}

export default NavBar;