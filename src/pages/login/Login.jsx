

//import "./login.scss";



import React, { useState } from 'react';
import './login.scss'; // Optional: Add styling in a separate CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    // Clear error message
    setErrorMessage('');

    // Handle authentication here (e.g., call your backend API)
    console.log('Login Submitted: ', { email, password });

    // For now, just reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;



