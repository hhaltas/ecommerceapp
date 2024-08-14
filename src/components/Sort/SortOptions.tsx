import React from "react";

interface SortOptionsProps {
  sortByPrice: (order: "asc" | "desc") => void;
  sortByPopularity: () => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortByPrice,
  sortByPopularity,
}) => {
  const handlePriceSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    sortByPrice(event.target.value as "asc" | "desc");
  };

  return (
    <div>
      <h2>Sort Options</h2>
      <select onChange={handlePriceSort}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
    </div>
  );
};

export default SortOptions;
