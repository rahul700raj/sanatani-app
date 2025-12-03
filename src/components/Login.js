import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    batchId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - in production, connect to backend
    onLogin({
      name: formData.name || 'User',
      email: formData.email,
      batchId: formData.batchId || 'BATCH001'
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>🕉️ Sanatani App</h1>
          <p>संस्कृति और ज्ञान का संगम</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          {isSignup && (
            <input
              type="text"
              placeholder="Batch ID (optional)"
              value={formData.batchId}
              onChange={(e) => setFormData({...formData, batchId: e.target.value})}
            />
          )}
          <button type="submit" className="btn btn-primary btn-full">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className="toggle-text">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button className="link-btn" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;