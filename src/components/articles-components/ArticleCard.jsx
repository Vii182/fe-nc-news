const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden mb-4">
      <img src={article.article_img_url} loading="eager" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{article.title}</h2>
        <p className="text-gray-600">Author: {article.author}</p>
        <p className="text-gray-600">
          Published: {new Date(article.created_at).toLocaleDateString()}
        </p>
        <p className="text-gray-600">Topic: {article.topic}</p>
        <p className="text-gray-600">Votes: {article.votes}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
