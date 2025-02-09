// Navbar.tsx
'use client'
import { Socials, Logo } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getBasePath } from "@/app/utils/basePath";
import styles from './Navbar.module.css';
import Navigation from './Navigation'; // Import your Navigation component

const Navbar = () => {
  const basePath = getBasePath();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <button className={styles.hamburger} onClick={toggleNav}>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>

        {Logo.map((logo) => (
          <Link href={logo.link} key={logo.name}>
            <Image
              key={logo.name}
              src={basePath + logo.src}
              alt={logo.name}
              width={100}
              height={100}
            />
          </Link>
        ))}
        <h1 className={styles.siteTitle}>
          Demi Taylor Nimmo
        </h1>
      </div>

      <div className={`${styles.navbarNavigation} ${isNavOpen ? styles.navOpen : ''}`}>
        {isNavOpen && <Navigation />}
      </div>

      <div className={`${styles.navbarSocials} ${isNavOpen ? styles.navOpen : ''}`}>
        {Socials.map((social) => (
          <Link href={social.link} key={social.name}>
            <Image
              key={social.name}
              src={basePath + social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;