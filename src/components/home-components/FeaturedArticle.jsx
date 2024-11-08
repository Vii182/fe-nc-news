import { Link } from "react-router-dom";

// <<<<< FEATURED ARTICLE COMPONENT >>>>> ------
const FeaturedArticle = ({ article }) => {
  
  // <<<<< MAIN RETURN >>>>> ------
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
        <div className="relative">
          <img
            src={article.article_img_url}
            alt={article.title}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <h3 className="text-4xl font-semibold text-white">
              {article.title}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-xl text-gray-300">{article.body}</p>
        <Link
          to={`/articles/${article.article_id}`}
          className="mt-4 inline-block bg-orange-600 text-white py-2 px-6 rounded"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticle;
