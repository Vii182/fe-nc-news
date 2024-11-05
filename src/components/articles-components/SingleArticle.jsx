import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../../functions/api";
import CommentsSection from "../comments-components/CommentsSection";

// <<<<<<< SINGLEARTICLE COMPONENT >>>>>>> -------

const SingleArticle = () => {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(null);

  // <<<<<<< LOAD CURRENT VOTE STATUS >>>>>>> -------

  useEffect(() => {
    const voteStatus = JSON.parse(
      localStorage.getItem("votedArticles") || "{}"
    );
    setUserVote(voteStatus[article_id] || null);
  }, [article_id]);

  // <<<<<<< FETCH CURRENT ARTICLE DATA >>>>>>> -------

  useEffect(() => {
    getArticleById(article_id)
      .then((fetchedArticle) => {
        setCurrArticle(fetchedArticle);
        setVoteCount(fetchedArticle.votes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(false);
      });
  }, [article_id]);

  // <<<<<<< HANDLE VOTE CHANGE WITH TOGGLE UV / DV >>>>>>> -------

  const handleVoteChange = (voteChange) => {
    let newVoteValue;
    if (userVote === voteChange) {
      newVoteValue = 0;
    } else newVoteValue = voteChange;

    const voteDiference = newVoteValue - (userVote || 0);

    // <<<<<<< UPDATE FRONT-END >>>>>>> -------

    setVoteCount((prevVotes) => prevVotes + voteDiference);
    setUserVote(newVoteValue);

    // <<<<<<< SAVE CURRENT VOTE STATUS IN LOCAL STORAGE >>>>>>> -------

    const voteStatus = JSON.parse(
      localStorage.getItem("votedArticles") || "{}"
    );
    voteStatus[article_id] = newVoteValue;
    localStorage.setItem("votedArticles", JSON.stringify(voteStatus));

    // <<<<<<< UPDATE BACK-END >>>>>>> -------

    updateArticleVotes(article_id, voteDiference).catch((error) => {
      console.error("Error Applying Vote:", error);
      setVoteCount((prevVotes) => prevVotes - voteDiference);
      setUserVote(userVote);
    });
  };

  if (isLoading) {
    return <p>Loading article...</p>;
  }
  if (!currArticle) {
    return <p>Article not found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md mt-10">
      <div className="w-full h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
        <img
          src={currArticle.article_img_url}
          alt={`Image of Article:${currArticle.title}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {currArticle.title}
        </h1>

        <div className="text-gray-600 mb-4 flex flex-col sm:flex-row sm:items-center">
          <p className="mr-4">
            Author: <span className="font-semibold">{currArticle.author}</span>
          </p>
          <p>
            Published:{" "}
            <span className="font-semibold">
              {new Date(currArticle.created_at).toLocaleDateString()}
            </span>
          </p>
        </div>

        <p className="text-gray-800 mb-6">{currArticle.body}</p>

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
      </div>
      <CommentsSection article_id={article_id} />
    </section>
  );
};

export default SingleArticle;
