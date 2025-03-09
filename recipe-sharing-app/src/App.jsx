import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </div>
  );
}

export default App;
