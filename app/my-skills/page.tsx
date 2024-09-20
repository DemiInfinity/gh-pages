"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constans";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import ToggleButton from "../../components/ToggleButton"; // Adjust the import path as necessary

import { getBasePath } from "../utils/basePath";
import styles from './skills.module.css';

const Page: React.FC = () => {
  const basePath = getBasePath();
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const swiperCount = 6;

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
          <Swiper
            slidesPerView={isMobile ? swiperCount - 2 : swiperCount}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: true }}
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
        </div>
      </div>
    </div>
  );
};

export default Page;
