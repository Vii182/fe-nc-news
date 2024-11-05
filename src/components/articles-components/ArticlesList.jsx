import { useState, useEffect } from "react";
import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setIsloading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

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
