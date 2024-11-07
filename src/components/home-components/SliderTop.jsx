import { useState, useEffect } from "react";
import LatestSlide from "./LatestSlide";
import { Link } from "react-router-dom";

const SliderTop = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % articles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [articles]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % articles.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + articles.length) % articles.length
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {articles.map((article, index) => (
        <Link
          key={article.article_id}
          to={`/articles/${article.article_id}`}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <LatestSlide article_id={article.article_id} article={article} />
        </Link>
      ))}

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SliderTop;
