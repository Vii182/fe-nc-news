import { useState, useEffect, memo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SideBar from "../SideBar";
import { getArticles } from "../../functions/api";
import ArticleCard from "./ArticleCard";
import SortingDropdown from "./SortingDropdown";
import ErrorPage from "../ErrorPage";

// <<<<< STOP SIDEBAR RERENDER >>>>> -----
const MemoizedSideBar = memo(SideBar);

// <<<<< MAIN COMPONENT >>>>> -----
const TopicPage = () => {
  const { topicName } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const [errorCode, setErrorCode] = useState(null);

  // <<<<< HANDLE SORT >>>>> -----
  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  // <<<<< FETCH DATA RELATED TO TOPIC >>>>> -----
  useEffect(() => {
    setIsLoading(true);
    setErrorCode(null);

    getArticles(topicName, sortBy, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      })
      // <<<<< ERROR ROUTE HANDLING >>>>> ------
      .catch((error) => {
        console.error("Error fetching topic Articles", error);
        if (error.response && error.response.status === 404) {
          setErrorCode(404);
        } else if (error.response && error.response.status === 400) {
          setErrorCode(400);
        } else setErrorCode(500);
      });
  }, [topicName, sortBy, order]);

  // <<<<< CONDITIONAL RETURN >>>>> ------

  if (errorCode) {
    return <ErrorPage errorCode={errorCode} />;
  }

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <section className="flex flex-col min-h-screen bg-gray-800">
      <div className="flex-grow flex">
        <div className="hidden sm:block bg-gray-800 w-24 sm:w-32 lg:w-40 p-2">
          <MemoizedSideBar />
        </div>
        <main className="flex-1  bg-gray-50">
          {isLoading ? (
            <p className="text-4xl font-semibold px-4 flex justify-start mt-10">{`Loading articles relating to ${topicName}...`}</p>
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
