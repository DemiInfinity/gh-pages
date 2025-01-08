"use client";

import { NavLinks } from "@/constans"; // Ensure the correct path to your constants file
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition"; // Ensure the correct path to your Transition component
import styles from "./Navigation.module.css"; // Ensure the correct path to your CSS module

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <>
      {isRouting && <Transition />}
      <div className={styles.navContainer}>
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className={styles.navLink}>
            <nav.icon
              className={`${styles.navIcon} ${
                path === nav.name ? styles.activeIcon : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
