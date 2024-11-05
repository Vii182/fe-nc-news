const ArticleHeader = ({ article }) => (
    // <<<<< ARTICLE HEADER RETURN >>>>> -----
  <>
    <div className="w-full h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-lg">
      <img
        src={article.article_img_url}
        alt={`Image of Article:${article.title}`}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>

    <div className="mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>

      <div className="text-gray-600 mb-4 flex flex-col sm:flex-row sm:items-center">
        <p className="mr-4">
          Author: <span className="font-semibold">{article.author}</span>
        </p>
        <p>
          Published:{" "}
          <span className="font-semibold">
            {new Date(article.created_at).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  </>
);

export default ArticleHeader;
