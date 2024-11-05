import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap 8">
                <div> 
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">NewsCentral</h3>
                    <p className="text-gray-400 mb-4">All the latest News and Stories</p>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
                    <li><Link to="/articles" className="hover:text-orange-400">Articles</Link></li>
                </ul>
            </div>

        </footer>
    );
};


export default Footer;