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
    <div className={styles.backgroundImage} style={{ backgroundImage: `url(${basePath}/bg-2.webp)` }}>
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>

    <div className={styles.pageContainer}>

      {/* About Me Section */}
      <div className={styles.aboutSection}>
        <h1 className={styles.title}>
          About <span className={styles.gradientText}>Me</span>
        </h1>
        <p className={styles.aboutText}>
            As a web developer with a strong focus on full-stack technologies, I have contributed to a range of projects, from developing user-friendly websites to creating more advanced web applications. My expertise includes working with modern frameworks like React, Next.js, and Node.js, while also integrating cloud services like AWS. I pride myself on delivering solutions that are both technically robust and aligned with the specific needs of each project.
        </p>
        <p className={styles.aboutText}>
          Throughout my career, I have continuously honed my skills, adapting to new technologies and coding standards. My approach is centered around ensuring scalability and maintainability, while always pushing to stay ahead of the latest trends in web development. I am passionate about solving complex challenges and delivering innovative, high-quality results.
        </p>

        <h1 className={styles.title}>
          Work <span className={styles.gradientText}>Experience</span>
        </h1>
        <div className={styles.aboutText}>
          <div>
            <div><b>Pass LTD: </b> 2 Months</div>
            <div><span className={styles.gradientText}>(06/2024 - 08/2024)</span></div>
          </div>
          <div>
            <div><b>3T Global: </b>3 Years 5 Months</div>
            <div><span className={styles.gradientText}>(02/2021 - 06/2024)</span></div>
          </div>
        </div>

      {/* Skills & Technologies Section */}
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Skills{" "}
              <span className={styles.gradientText}>
                & Technologies
              </span>
            </h1>
          </div>

          {/* Swiper for Skills */}
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
    </div>
  );
};

export default Page;
