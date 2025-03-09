import { useState } from 'react';
import './App.css';

// Importing your components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* AddRecipeForm allows the user to add recipes */}
        <AddRecipeForm />
        {/* RecipeList displays the list of recipes */}
        <RecipeList />
      </div>
      
      {/* Optionally include the Vite and React logos, if you want */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="./assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Vite + React section */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR (Hot Module Replacement)
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
