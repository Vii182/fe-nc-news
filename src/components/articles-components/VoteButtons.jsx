import { useState, useEffect } from "react";
import { updateArticleVotes } from "../../functions/api";

const VoteButtons = ({ articleId, initialVotes }) => {
  const [voteCount, setVoteCount] = useState(initialVotes);
  const [userVote, setUserVote] = useState(null);

  // <<<<< RETRIEVE VOTE STATUS >>>>> -----
  useEffect(() => {
    const voteStatus = JSON.parse(
      localStorage.getItem("votedArticles") || "{}"
    );
    setUserVote(voteStatus[articleId] || null);
  }, [articleId]);

  // <<<<< HANDLE VOTE BUTTON WITH TOGGLE UV/DV >>>>> -----
  const handleVoteChange = (voteChange) => {
    let newVoteValue = userVote === voteChange ? 0 : voteChange;
    const voteDifference = newVoteValue - (userVote || 0);

    setVoteCount((prev) => prev + voteDifference);
    setUserVote(newVoteValue);

    const voteStatus = JSON.parse(
      localStorage.getItem("votedArticles") || "{}"
    );
    voteStatus[articleId] = newVoteValue;
    localStorage.setItem("votedArticles", JSON.stringify(voteStatus));

    updateArticleVotes(articleId, voteDifference).catch((error) => {
      console.error("Error applying vote:", error);
      setVoteCount((prev) => prev - voteDifference);
      setUserVote(userVote);
    });
  };

  // <<<<< VOTE BTN RETURN >>>>> -----
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleVoteChange(1)}
        className={`p-2 bg-green-500 text-white rounded ${
          userVote === 1 ? "opacity-70" : ""
        }`}
      >
        {userVote === 1 ? "Upvoted" : "Upvote"}
      </button>
      <button
        onClick={() => handleVoteChange(-1)}
        className={`p-2 bg-red-500 text-white rounded ${
          userVote === -1 ? "opacity-70" : ""
        }`}
      >
        {userVote === -1 ? "Downvoted" : "Downvote"}
      </button>
      <p className="text-gray-600 font-semibold">Votes: {voteCount}</p>
    </div>
  );
};

export default VoteButtons;
