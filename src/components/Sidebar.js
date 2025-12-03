import React from 'react';
import './Sidebar.css';

function Sidebar({ currentPage, setCurrentPage, isOpen, closeSidebar }) {
  const menuItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
    { id: 'saints', icon: '🙏', label: 'Saints Directory' },
    { id: 'stories', icon: '📖', label: 'Stories' },
    { id: 'bhajans', icon: '🎵', label: 'Bhajans' },
    { id: 'courses', icon: '🎓', label: 'Courses' },
    { id: 'profile', icon: '👤', label: 'Profile' },
  ];

  const handleClick = (id) => {
    setCurrentPage(id);
    closeSidebar();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;