import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Store all recipes
  searchTerm: '',  // Store the search term entered by the user
  setSearchTerm: (term) => set({ searchTerm: term }),  // Action to update the search term
  filteredRecipes: [],  // Store filtered recipes based on search term

  // Action to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||  // Filter by title
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())  // Optional: Filter by ingredients
        )
      ),
    })),

  // Add recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete a recipe by id
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
}));

export default useRecipeStore;
