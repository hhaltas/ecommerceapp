import React from "react";

interface CategoryFilterProps {
  filterByCategory: (category: string) => void;
  filterByPriceRange: (min: number, max: number) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  filterByCategory,
  filterByPriceRange,
}) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    filterByCategory(event.target.value);
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const [min, max] = event.target.value.split("-").map(Number);
    filterByPriceRange(min, max);
  };

  return (
    <div>
      <h2>Filter by Category</h2>
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
      </select>

      <h2>Filter by Price Range</h2>
      <select onChange={handlePriceRangeChange}>
        <option value="0-9999">All</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-200">$100 - $200</option>
        <option value="200-500">$200 - $500</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
