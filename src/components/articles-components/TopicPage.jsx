import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../SideBar";
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
    <section className="flex flex-col min-h-screen bg-gray-800">
      <div className="flex-grow flex">
      <div className="hidden sm:block bg-gray-800 w-24 sm:w-32 lg:w-40 p-2">
      <SideBar />
        </div>
        <main className="flex-1  bg-gray-50">
      <h2 className="text-4xl font-playfair font-bold text-gray-800 gap-4 p-4">
        Articles Relating to {topicName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {articles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <ArticleCard key={article.article_id} article={article} />
          </Link>
        ))}
      </div>
      </main>
      </div>
    </section>
  );
};

export default TopicPage;
