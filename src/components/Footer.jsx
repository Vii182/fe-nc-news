import { Link } from "react-router-dom";

// <<<<< FOOTER COMPONENT >>>>> ------
const Footer = () => {
  // <<<<< MAIN RETURN >>>>> ------
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            NewsCentral
          </h3>
          <p className="text-gray-400 mb-4">
            All the latest news and stories delivered right to you.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Trending Topics
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/articles/topics/coding" className="hover:text-orange-400">
                Coding
              </Link>
            </li>
            <li>
              <Link to="/articles/topics/football" className="hover:text-orange-400">
                Football
              </Link>
            </li>
            <li>
              <Link to="/articles/topics/cooking" className="hover:text-orange-400">
                Cooking
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-orange-400">
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-700 text-center text-gray-400 py-4 mt-6">
        <p>&copy; 2024 NewsCentral</p>
      </div>
    </footer>
  );
};

export default Footer;
