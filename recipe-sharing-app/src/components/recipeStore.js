import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => {
      if (!newRecipe || !newRecipe.id) {
        console.error("Recipe must have an id");
        return state;
      }
      return { recipes: [...state.recipes, newRecipe] };
    }),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      if (!updatedRecipe || !updatedRecipe.id) {
        console.error("Updated recipe must have an id");
        return state;
      }
      return {
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
      };
    }),

  // Delete a recipe by id
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Optionally, you can add a way to load initial recipes (e.g., from localStorage or API)
  loadRecipes: (initialRecipes) =>
    set({ recipes: initialRecipes }),
}));

export default useRecipeStore;
