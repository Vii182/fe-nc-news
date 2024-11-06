import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../functions/api";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import VoteButtons from "./VoteButtons";
import CommentsSection from "../comments-components/CommentsSection";
import SideBar from "../SideBar";

// <<<<< MAIN COMPONENT >>>>> -----
const SingleArticle = () => {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  // <<<<< FETCH ARTICLE DATA >>>>> -----
  useEffect(() => {
    getArticleById(article_id)
      .then((fetchedArticle) => {
        setCurrArticle(fetchedArticle);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsError("Error retreiving Article! Please try again.")
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;
  if (!currArticle) return <p>Article not found.</p>;
  if(isError) return <p>{isError}</p>;

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <section className="flex flex-col sm:flex-row min-h-screen bg-gray-800">
      <aside className="hidden sm:block w-24 sm:w-32 lg:w-40 bg-gray-800">
        <SideBar />
      </aside>
      <main className="flex-grow p-4 sm:p-6 lg:p-8 bg-white shadow-md mt-0 sm:ml-0 sm:mt-0 flex-1">
      <ArticleHeader article={currArticle} />
      <ArticleBody body={currArticle.body} />
      <VoteButtons articleId={article_id} />
      <CommentsSection article_id={article_id} />
      </main>
    </section>
  );
};

export default SingleArticle;
