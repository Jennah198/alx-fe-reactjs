import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import ProfileDetails from './components/pages/ProfileDetails';
import ProfileSettings from './components/pages/ProfileSettings';
import Post from './components/pages/Post';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Advanced</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<div>Login Page</div>} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>
          
          <Route path="/posts/:postId" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
