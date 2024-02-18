import React from 'react';

const LearnMoreButton = () => {
  const handleLearnHowClick = () => {
    console.log('Learn How button clicked!');
  };

  return (
    <div style={styles.learnMoreSection}>
      <h2 style={styles.heading}>Ready to Upskill?</h2>
      <p style={styles.description}>Explore our courses and take the next step towards advancing your career.</p>
      <button style={styles.learnMoreButton} onClick={handleLearnHowClick}>
        Learn How →
      </button>
    </div>
  );
};

const styles = {
  learnMoreSection: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  learnMoreButton: {
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LearnMoreButton;
