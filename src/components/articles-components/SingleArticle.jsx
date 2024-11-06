import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../functions/api";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import VoteButtons from "./VoteButtons";
import CommentsSection from "../comments-components/CommentsSection";

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
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md mt-10">
      <ArticleHeader article={currArticle} />
      <ArticleBody body={currArticle.body} />
      <VoteButtons articleId={article_id} />
      <CommentsSection article_id={article_id} />
    </section>
  );
};

export default SingleArticle;
