import ArticlesList from "../components/articles-components/ArticlesList";
import SideBar from "../components/SideBar";
import { useState } from "react";
import SortingDropdown from "../components/articles-components/SortingDropdown";
import { NewspaperIcon } from "@heroicons/react/solid";

// <<<<< MAIN COMPONENT >>>>> -----
const Articles = () => {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  // <<<<< HANDLE SORT >>>>> -----
  const handleSortChange = (newSortBy, newOrder) => {
    setSortBy(newSortBy);
    setOrder(newOrder);
  };

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <section className="flex flex-col min-h-screen bg-gray-800">
      <div className="flex-grow flex">
        <div className="hidden sm:block bg-gray-800 w-24 sm:w-32 lg:w-40 p-2">
          <SideBar />
        </div>
        <main className="flex-1  bg-gray-50">
          <SortingDropdown
            onSort={handleSortChange}
            sortBy={sortBy}
            order={order}
          />
          <ArticlesList sortBy={sortBy} order={order} />
        </main>
      </div>
    </section>
  );
};

export default Articles;
