import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Get filtered recipes
  const filterRecipes = useRecipeStore((state) => state.filterRecipes); // Get the filter function
  const recipesFromStore = useRecipeStore((state) => state.recipes); // Get all recipes

  // Trigger filtering when the component mounts or when recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipesFromStore, filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </div>
        ))
      ) : (
        <p>No recipes found matching your search criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;
