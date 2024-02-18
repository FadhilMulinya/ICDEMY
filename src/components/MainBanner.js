import React from 'react';

const MainBanner = () => (
  <div style={styles.mainBanner}>
    <div style={styles.bannerContent}>
      <h1 style={styles.heading}>Unlock Your Potential with Icdemy</h1>
      <p style={styles.description}>Empower yourself with industry-leading skills and knowledge. Our comprehensive training programs are designed to make you job-ready.</p>
      <button style={styles.exploreCoursesButton}>Explore Courses</button>
    </div>
    <div style={styles.bannerImage}>
      <img style={styles.image} src="/images/banner-image.jpg" alt="ICDEMY Banner" />
    </div>
  </div>
);

const styles = {
  mainBanner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  bannerContent: {
    flex: 1,
    maxWidth: '600px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  exploreCoursesButton: {
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  bannerImage: {
    flex: 1,
    marginLeft: '50px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};

export default MainBanner;
