import { useState } from 'react';
import '../styles/login.css';
import Navbar from '../Components/navbar';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here (e.g., API call, authentication)
    // For now, let's just display the entered credentials
    console.log('Username:', username);
    console.log('Password:', password);
    window.location.href = '/home';
  };

  return (
    <div className="App">
    <Navbar />
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <input
        className="login-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
  
  );
}

export default Login;
