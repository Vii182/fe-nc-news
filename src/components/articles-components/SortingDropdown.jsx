import { useState } from "react";

// <<<<< MAIN COMPONENT >>>>> -----
const SortingDropdown = ({ onSort, sortBy, order }) => {
  const handleSortChange = (event) => {
    const newSortField = event.target.value;
    onSort(newSortField, order);
  };

  // <<<<< HANDLE SORTING >>>>> -----
  const handleSortToggle = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    onSort(sortBy, newOrder);
  };

  // <<<<< MAIN RETURN >>>>> -----
  return (
    <div className="ml-0 sm:ml-4 mt-2 flex items-center space-x-2 justify-center sm:justify-start">
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="p-2 bg-gray-200 rounded text-gray-800 border border-gray-300"
      >
        <option value="created_at">Date Created</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <button
        onClick={handleSortToggle}
        className="px-4 py-2 bg-gray-200 rounded text-gray-800 border border-gray-300 hover:bg-gray-300 transition-all ease-in-out active:bg-orange-700"
      >
        {order === "desc" ? "Descending" : "Ascending"}
      </button>
    </div>
  );
};

export default SortingDropdown;
