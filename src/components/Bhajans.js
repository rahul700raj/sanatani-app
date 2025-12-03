import React, { useState } from 'react';
import './Bhajans.css';

function Bhajans() {
  const [playing, setPlaying] = useState(null);
  
  const bhajansData = [
    { id: 1, title: 'Hanuman Chalisa', artist: 'MS Subbulakshmi', duration: '8:30', deity: 'Hanuman', image: '🐒' },
    { id: 2, title: 'Om Jai Jagdish Hare', artist: 'Anuradha Paudwal', duration: '5:45', deity: 'Vishnu', image: '🙏' },
    { id: 3, title: 'Shiv Tandav Stotram', artist: 'Ravana', duration: '7:20', deity: 'Shiva', image: '🔱' },
    { id: 4, title: 'Krishna Bhajan', artist: 'Jagjit Singh', duration: '6:15', deity: 'Krishna', image: '🦚' },
    { id: 5, title: 'Gayatri Mantra', artist: 'Deva Premal', duration: '4:30', deity: 'Surya', image: '☀️' },
    { id: 6, title: 'Durga Chalisa', artist: 'Lata Mangeshkar', duration: '9:00', deity: 'Durga', image: '🌺' },
  ];

  const togglePlay = (id) => {
    setPlaying(playing === id ? null : id);
  };

  return (
    <div className="bhajans-page">
      <div className="page-header">
        <h2>🎵 Divine Bhajans</h2>
        <p>Immerse yourself in devotional music</p>
      </div>

      <div className="player-section card">
        <div className="now-playing">
          <h3>Now Playing</h3>
          {playing ? (
            <div className="current-track">
              <div className="track-icon">{bhajansData.find(b => b.id === playing)?.image}</div>
              <div>
                <h4>{bhajansData.find(b => b.id === playing)?.title}</h4>
                <p>{bhajansData.find(b => b.id === playing)?.artist}</p>
              </div>
            </div>
          ) : (
            <p className="no-track">Select a bhajan to play</p>
          )}
        </div>
      </div>

      <div className="bhajans-list">
        {bhajansData.map(bhajan => (
          <div key={bhajan.id} className={`bhajan-item ${playing === bhajan.id ? 'playing' : ''}`}>
            <div className="bhajan-icon">{bhajan.image}</div>
            <div className="bhajan-info">
              <h4>{bhajan.title}</h4>
              <p>{bhajan.artist} • {bhajan.deity}</p>
            </div>
            <div className="bhajan-duration">{bhajan.duration}</div>
            <button 
              className="play-btn"
              onClick={() => togglePlay(bhajan.id)}
            >
              {playing === bhajan.id ? '⏸️' : '▶️'}
            </button>
            <button className="download-btn">⬇️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bhajans;