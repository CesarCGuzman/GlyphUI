import { useState } from 'react'
import Auth from './components/auth/Auth'
import { useTheme } from './context/ThemeContext'
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  // If no user is logged in, show the Auth screen
  if (!user) {
    return <Auth />;
  }

  // Once logged in, show the main app
  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <h1>Welcome to Glyph, {user.username}!</h1>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default App