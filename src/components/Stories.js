import React, { useState } from 'react';
import './Stories.css';

function Stories() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', 'Ramayana', 'Mahabharata', 'Puranas', 'Saints'];
  
  const storiesData = [
    { id: 1, title: 'Ram Janma - Birth of Lord Rama', category: 'Ramayana', excerpt: 'The divine birth of Lord Rama in Ayodhya...', readTime: '5 min', image: '🏹' },
    { id: 2, title: 'Krishna Leela - Childhood Stories', category: 'Mahabharata', excerpt: 'The playful childhood of Lord Krishna...', readTime: '8 min', image: '🦚' },
    { id: 3, title: 'Samudra Manthan - Churning of Ocean', category: 'Puranas', excerpt: 'The great churning of the cosmic ocean...', readTime: '10 min', image: '🌊' },
    { id: 4, title: 'Hanuman Chalisa - The Power of Devotion', category: 'Ramayana', excerpt: 'The story behind Hanuman Chalisa...', readTime: '6 min', image: '🐒' },
    { id: 5, title: 'Swami Vivekananda in Chicago', category: 'Saints', excerpt: 'Historic speech at Parliament of Religions...', readTime: '7 min', image: '🙏' },
    { id: 6, title: 'Draupadi Vastraharan', category: 'Mahabharata', excerpt: 'Krishna saves Draupadi honor...', readTime: '9 min', image: '👗' },
  ];

  const filteredStories = selectedCategory === 'all' 
    ? storiesData 
    : storiesData.filter(story => story.category === selectedCategory);

  return (
    <div className="stories-page">
      <div className="page-header">
        <h2>📖 Sacred Stories</h2>
        <p>Timeless tales from our rich heritage</p>
      </div>

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="stories-grid">
        {filteredStories.map(story => (
          <div key={story.id} className="story-card">
            <div className="story-image">{story.image}</div>
            <div className="story-content">
              <span className="story-category">{story.category}</span>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <div className="story-footer">
                <span className="read-time">⏱️ {story.readTime}</span>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;