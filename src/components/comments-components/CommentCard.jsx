const CommentCard = ({ comment }) => {
  return (
    <div className="p-4 bg-orange-100 border-l-4 border-orange-400 rounded shadow-sm">
      <p className="font-semibold text-gray-800">{comment.author}</p>
      <p className="text-gray-700 mt-2">{comment.body}</p>
      <p className="text-gray-800 font-semibold">Votes: {comment.votes}</p>
      <p className="text-sm text-gray-500 mt-1">
        Posted on {new Date(comment.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CommentCard;
