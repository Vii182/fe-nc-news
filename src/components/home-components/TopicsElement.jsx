import { Link } from "react-router-dom";

// <<<<< TOPICS COMPONENT (HOMEPAGE) >>>>> ------
const TopicsElement = () => {
  // <<<<< MAIN RETURN >>>>> ------
  return (
    <section className="bg-gray-900 text-white py-8 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-semibold font-playfair mb-6">
        Explore Our Trending Topics
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Link
          to="/articles/topics/coding"
          className="bg-blue-600 hover:bg-blue-700 transition-all p-4 w-64 rounded-lg"
        >
          <h3 className="text-xl font-semibold">Coding</h3>
          <p className="text-sm mt-2">
            Stay updated on the latest coding trends and technologies.
          </p>
        </Link>
        <Link
          to="/articles/topics/football"
          className="bg-green-600 hover:bg-green-700 transition-all p-4 w-64 rounded-lg"
        >
          <h3 className="text-xl font-semibold">Football</h3>
          <p className="text-sm mt-2">
            Dive into the latest football news, from all around the world.
          </p>
        </Link>
        <Link
          to="/articles/topics/cooking"
          className="bg-orange-600 hover:bg-orange-700 transition-all p-4 w-64 rounded-lg"
        >
          <h3 className="text-xl font-semibold">Cooking</h3>
          <p className="text-sm mt-2">
            Discover new recipes, cooking tips, and culinary trends.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default TopicsElement;
