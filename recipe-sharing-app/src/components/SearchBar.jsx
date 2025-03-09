import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  // Update search term
    filterRecipes();  // Trigger filtering
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          margin: '10px 0',
        }}
      />
    </div>
  );
};

export default SearchBar;
