import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import { UserContext } from "../../context/UserContext";

// <<<<< COMMENT CARD COMPONENT >>>>> ------
const CommentCard = ({ comment, onDelete }) => {

  const { user } = useContext(UserContext);

  // <<<<< MAIN RETURN >>>>> ------
  return (
    <div className="p-4 bg-orange-100 border-l-4 border-orange-400 rounded shadow-sm relative">
      <p className="font-semibold text-gray-800">{comment.author}</p>
      <p className="text-gray-700 mt-2">{comment.body}</p>
      <p className="text-gray-800 font-semibold">Votes: {comment.votes}</p>
      <p className="text-sm text-gray-500 mt-1">
        Posted on {new Date(comment.created_at).toLocaleDateString()}
      </p>
      {user && comment.author === user.username && (
        <>
        {console.log('Delete button for comment_id:', comment.comment_id)}
        <DeleteButton comment_id={comment.comment_id} onDelete={onDelete} />
        </>
      )}
    </div>
  );
};

export default CommentCard;
