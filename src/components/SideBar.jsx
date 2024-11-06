import { Link } from "react-router-dom";

const SideBar = () => {
  const topics = ["coding", "football", "cooking"];

  return (
    <aside className="mt-2 fixed left-0 w-24 sm:w-32 lg:w-40 bg-gray-800 text-white h-fit p-2 space-y-4">
      <h2 className="text-orange-500 text-m sm:text-lg lg:text-xl font-bold mb-4">Topics</h2>
      <ul className="space-y-2 text-sm sm:text-lg lg:text-xl list-none">
        {topics.map((topic) => (
          <li key={topic}>
            <Link
              to={`/articles/topics/${topic}`}
              className="block py-2 px-4 rounded hover:bg-gray-600"
            >
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-orange-500 text-m sm:text-lg lg:text-xl font-bold mb-4">Navigation</h2>
        <ul className="space-y-2 text-sm sm:text-lg lg:text-xl">
          <li>
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="block py-2 px-4 rounded hover:bg-gray-600"
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
