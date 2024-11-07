import { useState, useEffect } from "react";
import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "../ErrorPage";

// <<<<< MAIN COMPONENT >>>>> -----
const ArticlesList = ({
  topic = null,
  sortBy = "created_at",
  order = "desc",
}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  const navigate = useNavigate();

  // <<<<< FETCH DATA >>>>> -----
  useEffect(() => {
    setIsloading(true);
    setErrorCode(null);
    getArticles(topic, sortBy, order)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        if (error.response && error.response.status === 404) {
          setErrorCode(404);
        } else if (error.response && error.response.status === 400) {
          setErrorCode(400);
        } else setErrorCode(500);
        setIsloading(false);
      });
  }, [topic, sortBy, order]);

  // <<<<< CONDITIONAL RETURNS >>>>> -----

  if (errorCode) {
    return <ErrorPage errorCode={errorCode} />;
  }

  if (isLoading) {
    return (
      <p className="text-4xl font-semibold px-4 flex justify-start mt-10">
        Loading articles...
      </p>
    );
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
