import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />

        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
