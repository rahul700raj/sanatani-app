import React from 'react';
import './Header.css';

function Header({ user, onLogout, toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="logo">🕉️ Sanatani App</h1>
      </div>
      <div className="header-right">
        <span className="user-name">नमस्ते, {user?.name}</span>
        <button className="btn btn-logout" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;