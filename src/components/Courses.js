import React, { useState } from 'react';
import './Courses.css';

function Courses({ user }) {
  const [activeTab, setActiveTab] = useState('available');
  
  const coursesData = [
    { id: 1, title: 'Bhagavad Gita - Complete Course', instructor: 'Swami Sarvapriyananda', duration: '12 weeks', level: 'Beginner', enrolled: false, progress: 0, image: '📚' },
    { id: 2, title: 'Vedic Mathematics', instructor: 'Dr. Bharati Krishna', duration: '8 weeks', level: 'Intermediate', enrolled: true, progress: 65, image: '🔢' },
    { id: 3, title: 'Sanskrit for Beginners', instructor: 'Prof. Ramesh Sharma', duration: '10 weeks', level: 'Beginner', enrolled: true, progress: 30, image: '📖' },
    { id: 4, title: 'Yoga Philosophy', instructor: 'Sadhguru', duration: '6 weeks', level: 'All Levels', enrolled: false, progress: 0, image: '🧘' },
    { id: 5, title: 'Ayurveda Basics', instructor: 'Dr. Vasant Lad', duration: '8 weeks', level: 'Beginner', enrolled: false, progress: 0, image: '🌿' },
  ];

  const enrolledCourses = coursesData.filter(c => c.enrolled);
  const availableCourses = coursesData.filter(c => !c.enrolled);

  const displayCourses = activeTab === 'enrolled' ? enrolledCourses : availableCourses;

  return (
    <div className="courses-page">
      <div className="page-header">
        <h2>🎓 Courses</h2>
        <p>Learn and grow with our comprehensive courses</p>
      </div>

      <div className="course-tabs">
        <button 
          className={`tab-btn ${activeTab === 'available' ? 'active' : ''}`}
          onClick={() => setActiveTab('available')}
        >
          Available Courses
        </button>
        <button 
          className={`tab-btn ${activeTab === 'enrolled' ? 'active' : ''}`}
          onClick={() => setActiveTab('enrolled')}
        >
          My Courses ({enrolledCourses.length})
        </button>
      </div>

      <div className="courses-grid">
        {displayCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-image">{course.image}</div>
            <div className="course-content">
              <span className="course-level">{course.level}</span>
              <h3>{course.title}</h3>
              <p className="instructor">👨‍🏫 {course.instructor}</p>
              <p className="duration">⏱️ {course.duration}</p>
              
              {course.enrolled && (
                <div className="progress-section">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
                  </div>
                  <span className="progress-text">{course.progress}% Complete</span>
                </div>
              )}
              
              <div className="course-actions">
                {course.enrolled ? (
                  <>
                    <button className="btn btn-primary">Continue Learning</button>
                    <button className="btn btn-secondary">Download Materials</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary">Enroll Now</button>
                    <button className="btn btn-secondary">Preview</button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;