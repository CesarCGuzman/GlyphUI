import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // add the actual API call later
    console.log('Form submitted:', { username, email, password, isLogin });
  };

  return (
    <div className={`auth-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <div className="auth-box">
        <div className="logo-container">
          <img src="/logoNoBackground.svg" alt="Glyph Logo" className="auth-logo" />
        </div>
        <h1>Glyph</h1>
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={!isLogin}
                placeholder="Choose a username"
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              minLength={6}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;