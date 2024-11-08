import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { postComment } from "../../functions/api";

// <<<<< COMMENT FORM COMPONENT >>>>> ------

const AddCommentForm = ({ article_id, onCommentAdd }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  // <<<<< AWAIT RESPONSE AND POST COMMENT >>>>> ------

  const handleSubmit = async (event) => {
    event.preventDefault();
    // <<<<< CHECK IF LOGGED IN, IF NOT POST ERROR >>>>> ------
    if (!user) {
      setError("Please log in to post a comment!");
      return;
    }
    try {
      const newComment = await postComment(article_id, {
        username: user.username,
        body: comment,
      });
      onCommentAdd(newComment);
      setComment("");
      setError(null);
    } catch (error) {
      setError("Comment Failed to Post");
    }
  };

  // <<<<< MAIN RETURN >>>>> ------
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Please type your comment here..."
        required
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <div className="mt-2 flex items-center">
        <button
          type="submit"
          disabled={!user}
          className={`mb-4 px-4 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105
            ${
              user
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Post Comment
        </button>
        {!user && (
          <p className="mb-4 ml-2 text-sm text-gray-500 italic">
            Sign in to post a comment.
          </p>
        )}
      </div>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </form>
  );
};

export default AddCommentForm;
