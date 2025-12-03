import React from 'react';
import './Dashboard.css';

function Dashboard({ user }) {
  const stats = [
    { icon: '🙏', label: 'Saints', count: '150+', color: '#ff6b35' },
    { icon: '📖', label: 'Stories', count: '500+', color: '#f7931e' },
    { icon: '🎵', label: 'Bhajans', count: '300+', color: '#ffd700' },
    { icon: '🎓', label: 'Courses', count: '50+', color: '#4caf50' },
  ];

  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h2>Welcome back, {user?.name}! 🙏</h2>
        <p>Batch ID: {user?.batchId}</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{borderTopColor: stat.color}}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.count}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-grid">
          <button className="action-btn">
            <span>📚</span>
            <span>Browse Courses</span>
          </button>
          <button className="action-btn">
            <span>🎧</span>
            <span>Listen Bhajans</span>
          </button>
          <button className="action-btn">
            <span>📖</span>
            <span>Read Stories</span>
          </button>
          <button className="action-btn">
            <span>🙏</span>
            <span>Find Saints</span>
          </button>
        </div>
      </div>

      <div className="recent-activity card">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">📖</span>
            <div>
              <p><strong>Completed:</strong> Ramayana Chapter 5</p>
              <small>2 hours ago</small>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">🎵</span>
            <div>
              <p><strong>Listened:</strong> Hanuman Chalisa</p>
              <small>5 hours ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;