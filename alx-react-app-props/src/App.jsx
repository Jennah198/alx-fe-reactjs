import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

// Import components
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Import UserProfile

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Context Provider for User Data */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      {/* Welcome Message */}
      <div>
        <WelcomeMessage />
      </div>

      {/* Main Content */}
      <MainContent />

      {/* User Profile Section */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      {/* Logos for Vite and React */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Counter Section */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
