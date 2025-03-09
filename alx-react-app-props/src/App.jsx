import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

// Import other components
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <Header />

      {/* Provide Context */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <WelcomeMessage />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;
