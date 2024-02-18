import React from 'react';

const Visuals = () => (
  <div style={styles.visuals} className="visuals">
    <div style={styles.visualItem} className="visual-item">
      <img style={styles.image} src="path/to/visual1.jpg" alt="Visual 1" />
      <p style={styles.caption}>Explore our interactive learning platform</p>
    </div>
    <div style={styles.visualItem} className="visual-item">
      <img style={styles.image} src="path/to/visual2.jpg" alt="Visual 2" />
      <p style={styles.caption}>Hands-on projects for real-world experience</p>
    </div>
    <div style={styles.visualItem} className="visual-item">
      <img style={styles.image} src="path/to/visual3.jpg" alt="Visual 3" />
      <p style={styles.caption}>Personalized mentorship to guide your journey</p>
    </div>
  </div>
);

const styles = {
  visuals: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  visualItem: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  caption: {
    color: '#333',
    fontSize: '16px',
  },
};

export default Visuals;
