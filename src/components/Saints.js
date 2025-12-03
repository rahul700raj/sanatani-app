import React, { useState } from 'react';
import './Saints.css';

function Saints() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const saintsData = [
    { id: 1, name: 'Swami Vivekananda', location: 'Belur Math, West Bengal', phone: '+91-33-2654-9999', specialty: 'Vedanta Philosophy', image: '🧘' },
    { id: 2, name: 'Sri Sri Ravi Shankar', location: 'Bangalore, Karnataka', phone: '+91-80-6770-0000', specialty: 'Art of Living', image: '🙏' },
    { id: 3, name: 'Sadhguru Jaggi Vasudev', location: 'Coimbatore, Tamil Nadu', phone: '+91-422-2515-345', specialty: 'Isha Yoga', image: '🕉️' },
    { id: 4, name: 'Mata Amritanandamayi', location: 'Kollam, Kerala', phone: '+91-476-289-6278', specialty: 'Humanitarian Work', image: '🌺' },
    { id: 5, name: 'Baba Ramdev', location: 'Haridwar, Uttarakhand', phone: '+91-135-244-5000', specialty: 'Yoga & Ayurveda', image: '🧘‍♂️' },
    { id: 6, name: 'Morari Bapu', location: 'Mahuva, Gujarat', phone: '+91-2844-220-123', specialty: 'Ram Katha', image: '📿' },
  ];

  const filteredSaints = saintsData.filter(saint =>
    saint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    saint.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    saint.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="saints-page">
      <div className="page-header">
        <h2>🙏 Saints Directory</h2>
        <p>Connect with spiritual leaders across India</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, location, or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="saints-grid">
        {filteredSaints.map(saint => (
          <div key={saint.id} className="saint-card">
            <div className="saint-avatar">{saint.image}</div>
            <h3>{saint.name}</h3>
            <div className="saint-info">
              <p><strong>📍 Location:</strong> {saint.location}</p>
              <p><strong>📞 Contact:</strong> {saint.phone}</p>
              <p><strong>✨ Specialty:</strong> {saint.specialty}</p>
            </div>
            <div className="saint-actions">
              <button className="btn btn-primary">View Details</button>
              <button className="btn btn-secondary">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saints;