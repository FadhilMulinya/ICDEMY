import React from 'react';

const Contact = () => (
  <div style={styles.contact}>
    <h2 style={styles.heading}>Contact</h2>
    <p style={styles.description}>Have questions or need assistance? Reach out to us through the contact information below.</p>
    <address style={styles.address}>
      <p>Email: <a href="mailto:micadevelops@gmail.com" style={styles.link}>micadevelops@gmail.com</a></p>
      <p>Phone: +254 40 189 463</p>
      <p>Address: 123 Tech Street, Tech City, TC 12345</p>
    </address>
    <p style={styles.description}>We're here to help you on your learning journey. Feel free to get in touch!</p>
  </div>
);

const styles = {
  contact: {
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
  address: {
    marginTop: '20px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Contact;
