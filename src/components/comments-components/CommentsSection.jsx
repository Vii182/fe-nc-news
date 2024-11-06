import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../functions/api";
import CommentCard from "./CommentCard";
import AddCommentForm from "./AddCommentForm";

const CommentsSection = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError("Failed to Load Comments, Please Try Again.", error);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleCommentAdding = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>{isError}</p>;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Comments</h2>
      <AddCommentForm
        article_id={article_id}
        onCommentAdd={handleCommentAdding}
      />
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
