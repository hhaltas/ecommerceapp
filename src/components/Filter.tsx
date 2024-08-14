import React from "react";

interface FilterProps {
  filterProducts: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterProducts }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    filterProducts(event.target.value);
  };

  return (
    <div>
      <h2>Filter</h2>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        <option value="Category 3">Category 3</option>
      </select>
    </div>
  );
};

export default Filter;
