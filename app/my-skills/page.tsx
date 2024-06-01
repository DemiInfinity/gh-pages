"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constans";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import ToggleButton from "../../components/ToggleButton"; // Adjust the import path as necessary

import { getBasePath } from "../utils/basePath";
import styles from './page.module.css';

const Page: React.FC = () => {
  const basePath = getBasePath();
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = (isActive: boolean) => {
    console.log('Clicked');
    setExpanded(isActive);
  };

  const numColumns = 5;
  const rows = [];
  for (let i = 0; i < SkillData.length; i += numColumns) {
    rows.push(SkillData.slice(i, i + numColumns));
  }

  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${basePath}/bg-2.webp)` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Skills{" "}
              <span className={styles.gradientText}>
                & Technologies
              </span>
            </h1>
            <p className={styles.subtitle}>
              Using the latest tech this world has to offer
            </p>
          </div>
          <div className={styles.switchContainer}>
            <ToggleButton
              elemId="toggle-all"
              initialStatus={expanded ? 'active' : 'pending'}
              onToggle={handleToggle}
            />
            <span>{expanded ? 'Show All' : 'Show Slider'}</span>
          </div>
          {!expanded ? (
            <Swiper
              slidesPerView={isMobile ? 3 : 5}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={5000}
              modules={[Autoplay]}
              className={styles.swiperContainer}
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={`${basePath}${skill.Image}`}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={styles.gridContainer}>
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.gridRow}>
                  {row.map((skill, colIndex) => (
                    <div key={colIndex} className={styles.gridCell}>
                      <Image
                        src={`${basePath}${skill.Image}`}
                        alt={skill.name}
                        width={skill.width}
                        height={skill.height}
                        className={styles.gridImage}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
