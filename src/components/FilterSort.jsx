import React from "react";

const FilterSort = ({ setFilter, setSort }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <select onChange={(e) => setFilter(e.target.value)} className="border p-2">
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
      <select onChange={(e) => setSort(e.target.value)} className="border p-2">
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSort;
