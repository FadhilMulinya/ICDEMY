import React, { useState } from 'react';
import NavItem from './NavItem';

const Header = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleInternetIdentityClick = () => {
    setSignedIn((prevSignedIn) => !prevSignedIn);
  };

  const handleNavItemClick = (label) => {
    console.log(`Clicked on ${label}`);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>ICDEMY</div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <NavItem label="Home" onClick={() => handleNavItemClick('Home')} />
          <NavItem label="Nanodegree" onClick={() => handleNavItemClick('Nanodegree')} />
          <NavItem label="Courses" onClick={() => handleNavItemClick('Courses')} />
          <NavItem label="Blog" onClick={() => handleNavItemClick('Blog')} />
          <NavItem label="Contact" onClick={() => handleNavItemClick('Contact')} />
        </ul>
        <button
          style={styles.identityButton}
          onClick={handleInternetIdentityClick}
        >
          {signedIn ? 'Internet Identity' : 'Sign In'}
        </button>
      </nav>
      <button
        style={styles.learnHowButton}
        onClick={() => alert('Learn How modal here')}
      >
        Learn How
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: '0',
    padding: '0',
    marginLeft: '20px',
  },
  identityButton: {
    marginLeft: '20px',
    padding: '8px 15px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  learnHowButton: {
    padding: '8px 15px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Header;
