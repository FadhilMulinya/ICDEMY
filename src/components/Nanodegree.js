import React from 'react';

const Nanodegree = () => (
  <div style={styles.nanodegree}>
    <h2 style={styles.heading}>Nanodegree</h2>
    <p style={styles.description}>Unlock new opportunities with our specialized Nanodegree programs designed to equip you with in-demand skills for the rapidly evolving tech industry.</p>
    <ul style={styles.list}>
      <li style={styles.listItem}>Hands-on projects to build a strong portfolio.</li>
      <li style={styles.listItem}>Industry-relevant curriculum created by experts.</li>
      <li style={styles.listItem}>Personalized mentorship to guide your learning journey.</li>
      <li style={styles.listItem}>Real-world scenarios for practical application of skills.</li>
    </ul>
    <p style={styles.description}>Choose a Nanodegree and level up your career today!</p>
  </div>
);

const styles = {
  nanodegree: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    color: '#333',
    fontSize: '28px',
    marginBottom: '20px',
  },
  description: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    color: '#333',
    marginBottom: '10px',
  },
};

export default Nanodegree;
