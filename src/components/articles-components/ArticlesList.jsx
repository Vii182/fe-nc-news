import { useState, useEffect } from "react";
import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

// <<<<< MAIN COMPONENT >>>>> -----
const ArticlesList = ({
  topic = null,
  sortBy = "created_at",
  order = "desc",
}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);

  // <<<<< FETCH DATA >>>>> -----
  useEffect(() => {
    setIsloading(true);
    setIsError(null);
    getArticles(topic, sortBy, order)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setIsError("Error Fetching Articles, Please try again.");
        setIsloading(false);
      });
  }, [topic, sortBy, order]);

  // <<<<< CONDITIONAL RETURNS >>>>> -----
  if (isLoading) {
    return <p className="px-4 flex justify-start mt-10">Loading articles...</p>;
  }
  if (isError) {
    return <p className="px-4 flex justify-start mt-10">{isError}</p>;
  }

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <section>
      <h1 className="text-4xl font-playfair font-bold text-gray-800 gap-4 p-4">
        The Latest <span className="text-orange-500">News</span> and In-Depth
        Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <ArticleCard key={article.article_id} article={article} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ArticlesList;
