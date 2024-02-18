import React from 'react';

const Blog = () => (
  <div style={styles.blog}>
    <h2 style={styles.heading}>Blog</h2>
    <p style={styles.description}>Stay updated with our latest blog posts, featuring insights, tips, and industry news.</p>
    <div style={styles.blogPost}>
      <h3 style={styles.postTitle}>Exploring the Future of Artificial Intelligence</h3>
      <p style={styles.postContent}>Discover the latest advancements in AI and how they are shaping the future of technology.</p>
      <a href="#read-more" style={styles.readMoreLink}>Read More</a>
    </div>
    <div style={styles.blogPost}>
      <h3 style={styles.postTitle}>The Rise of Remote Work: Challenges and Opportunities</h3>
      <p style={styles.postContent}>Explore the pros and cons of remote work and how it has become a significant trend in the modern workplace.</p>
      <a href="#read-more" style={styles.readMoreLink}>Read More</a>
    </div>
  </div>
);

const styles = {
  blog: {
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
  blogPost: {
    margin: '20px 0',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  postTitle: {
    color: '#333',
  },
  postContent: {
    color: '#555',
  },
  readMoreLink: {
    display: 'block',
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '10px',
  },
};

export default Blog;
