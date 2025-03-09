import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  // Generate personalized recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation logic based on favorites
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
