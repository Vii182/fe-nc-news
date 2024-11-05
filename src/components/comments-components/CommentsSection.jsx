import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../../functions/api";

const CommentsSection = (props) => {
  const { article_id } = props;
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

  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>{isError}</p>;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.comment_id}
            className="p-4 bg-orange-100 border-l-4 border-orange-400 rounded shadow-sm"
          >
            <p className="font-semibold text-gray-800">{comment.author}</p>
            <p className="text-gray-700 mt-2">{comment.body}</p>
            <p className="text-gray-800 font-semibold">
              Votes: {comment.votes}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Posted on {new Date(comment.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
