import { useState, useEffect, memo } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../SideBar";
import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";
import SortingDropdown from "./SortingDropdown";

// <<<<< STOP SIDEBAR RERENDER >>>>> -----
const MemoizedSideBar = memo(SideBar);

// <<<<< MAIN COMPONENT >>>>> -----
const TopicPage = () => {
  const { topicName } = useParams();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  // <<<<< HANDLE SORT >>>>> -----
  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  // <<<<< FETCH DATA RELATED TO TOPIC >>>>> -----
  useEffect(() => {
    setIsLoading(true);
    setIsError(null);

    getArticles(topicName, sortBy, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching topic Articles", error);
        setIsError("Failed to load Articles. Please try again.");
        setIsLoading(false);
      });
  }, [topicName, sortBy, order]);

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <section className="flex flex-col min-h-screen bg-gray-800">
      <div className="flex-grow flex">
        <div className="hidden sm:block bg-gray-800 w-24 sm:w-32 lg:w-40 p-2">
          <MemoizedSideBar />
        </div>
        <main className="flex-1  bg-gray-50">
          {isLoading ? (
            <p className="px-4 flex justify-start mt-10">{`Loading articles relating to ${topicName}...`}</p>
          ) : isError ? (
            <p className="px-4 flex justify-start mt-10">{isError}</p>
          ) : (
            <>
              <h2 className="text-4xl font-playfair font-bold text-gray-800 gap-4 p-4">
                Articles Relating to {topicName}
              </h2>
              <SortingDropdown
                sortBy={sortBy}
                order={order}
                onSort={handleSortChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {articles.map((article) => (
                  <Link
                    to={`/articles/${article.article_id}`}
                    key={article.article_id}
                  >
                    <ArticleCard key={article.article_id} article={article} />
                  </Link>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default TopicPage;
