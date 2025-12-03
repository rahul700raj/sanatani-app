import React, { useState } from 'react';
import './Profile.css';

function Profile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    batchId: user?.batchId || '',
    phone: '+91-9876543210',
    location: 'Mumbai, Maharashtra'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Save to backend
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <h2>👤 My Profile</h2>
        <p>Manage your account information</p>
      </div>

      <div className="profile-container">
        <div className="profile-sidebar card">
          <div className="profile-avatar">👤</div>
          <h3>{formData.name}</h3>
          <p className="batch-id">Batch: {formData.batchId}</p>
          <div className="profile-stats">
            <div className="stat">
              <strong>12</strong>
              <span>Courses</span>
            </div>
            <div className="stat">
              <strong>45</strong>
              <span>Stories Read</span>
            </div>
            <div className="stat">
              <strong>120</strong>
              <span>Hours</span>
            </div>
          </div>
        </div>

        <div className="profile-main card">
          <div className="section-header">
            <h3>Personal Information</h3>
            <button 
              className="btn btn-primary"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Batch ID</label>
              <input
                type="text"
                value={formData.batchId}
                onChange={(e) => setFormData({...formData, batchId: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <button type="submit" className="btn btn-primary btn-full">
                Save Changes
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="achievements card">
        <h3>🏆 Achievements</h3>
        <div className="achievement-grid">
          <div className="achievement-badge">
            <span className="badge-icon">📚</span>
            <p>Bookworm</p>
          </div>
          <div className="achievement-badge">
            <span className="badge-icon">🎓</span>
            <p>Scholar</p>
          </div>
          <div className="achievement-badge">
            <span className="badge-icon">🔥</span>
            <p>30 Day Streak</p>
          </div>
          <div className="achievement-badge">
            <span className="badge-icon">⭐</span>
            <p>Top Learner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;