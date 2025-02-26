// components/Footer.tsx (Example Footer component)
import React from 'react';
import styles from './footer.module.css'; // Import your CSS module

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Demi Taylor Nimmo. All rights reserved.</p>
        {/* Add any other footer content here (links, social icons, etc.) */}
      </div>
    </footer>
  );
};

export default Footer;