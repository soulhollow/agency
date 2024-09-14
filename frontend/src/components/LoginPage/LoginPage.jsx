import React, { useState, useContext } from 'react'; // Stelle sicher, dass useContext importiert wird
import './LoginPage.css';
import ApiService from '../../context/ApiService.jsx';  // Importiere den ApiService
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';  // Importiere AuthContext

function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);  // Hole die login-Funktion aus dem AuthContext
  const navigate = useNavigate();

  // Definiere die handleLogin-Funktion
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Verwende ApiService für den Login
      const loginRequest = { username: user, password }; // Erstelle loginRequest
      const response = await ApiService.login(loginRequest); // Rufe ApiService login-Methode auf
      const token = response.data.token;

      // Speichere den Token in localStorage und aktualisiere den Auth-Status
      login(token); // Rufe die login-Funktion aus dem AuthContext auf
      navigate('/profile'); // Navigiere zur Profilseite

    } catch (error) {
      // Fehlerbehandlung (API-Fehler oder Netzwerkfehler)
      setError(error.response?.data?.message || 'An error occurred during login.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}> {/* Nutze handleLogin hier */}
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label>
          Username:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
