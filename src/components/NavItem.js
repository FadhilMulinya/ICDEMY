import React from 'react';

const NavItem = ({ link, label }) => (
  <li style={styles.navItem}>
    <a href={link} style={styles.navLink}>{label}</a>
  </li>
);

const styles = {
  navItem: {
    display: 'inline-block',
    margin: '0 10px',
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  },
};

export default NavItem;
