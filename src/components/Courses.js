import React from 'react';

const Courses = () => (
  <div style={styles.courses}>
    <h2 style={styles.heading}>Courses</h2>
    <p style={styles.description}>Browse through our wide range of courses covering various topics in technology and business.</p>
    <ul style={styles.courseList}>
      <li style={styles.courseItem}>Web Development Fundamentals</li>
      <li style={styles.courseItem}>Data Science Essentials</li>
      <li style={styles.courseItem}>Mobile App Development with React Native</li>
      <li style={styles.courseItem}>AI and Machine Learning Basics</li>
      <li style={styles.courseItem}>Blockchain for Beginners</li>
      <li style={styles.courseItem}>Digital Marketing Strategies</li>
    </ul>
    <p style={styles.description}>Our courses are designed to provide you with practical skills and knowledge that you can apply in your career.</p>
  </div>
);

const styles = {
  courses: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    color: '#333',
    textAlign: 'center',
  },
  description: {
    color: '#555',
    textAlign: 'center',
  },
  courseList: {
    listStyle: 'none',
    padding: '0',
    margin: '20px 0',
  },
  courseItem: {
    color: '#333',
    marginBottom: '8px',
  },
};

export default Courses;
