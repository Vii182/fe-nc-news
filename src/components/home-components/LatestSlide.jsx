import { Link } from "react-router-dom";

// <<<<< IMAGE SLIDE COMPONENT(INDIVIDUAL SLIDE) (HOMEPAGE) >>>>> ------
const LatestSlide = ({ article }) => {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${article.article_img_url})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
        <h2 className="text-center text-white text-3xl font-bold mb-4">
          {article.title}
        </h2>
        <p className="text-white text-center bg-orange-600 opacity-100 py-2 px-4 rounded w-1/4 mx-auto">
          Read More
        </p>
      </div>
    </div>
  );
};

export default LatestSlide;
