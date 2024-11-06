import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";

const TopicPage = () => {
  const { topicName } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    getArticles({ topic: topicName })
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError("Failed to load Articles. Please try again.");
        setIsLoading(false);
      });
  }, [topicName]);

  if (isLoading) return <p>{`Loading articles relating to ${topicName}...`}</p>;
  if (isError) return <p>{isError}</p>;

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Articles Relating to {topicName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <ArticleCard key={article.article_id} article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopicPage;
