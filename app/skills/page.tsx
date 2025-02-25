"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LanguagesData, FrameworkData, ToolsData } from "@/constans";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { getBasePath } from "../utils/basePath";
import styles from "./skills.module.css";

const Skills: React.FC = () => {
  const basePath = getBasePath();
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const swiperCount = 6;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = (isActive: boolean) => {
    console.log("Clicked");
    setExpanded(isActive);
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.pageContainer}>
        {/* About Me Section */}
        <div className={styles.aboutSection}>
          <h1 className={styles.title}>
            Skills <span className={styles.gradientText}>& Technologies</span>
          </h1>

          <h1 className={styles.subtitle}>Lanugages</h1>

          <Swiper
            slidesPerView={isMobile ? swiperCount - 2 : swiperCount}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: true }}
            speed={5000}
            modules={[Autoplay]}
            className={styles.swiperContainer}
          >
            {LanguagesData.map((skill, index) => (
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

          <h1 className={styles.subtitle}>Frameworks</h1>

          <Swiper
            slidesPerView={isMobile ? swiperCount - 2 : 4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: true }}
            speed={5000}
            modules={[Autoplay]}
            className={styles.swiperContainer}
          >
            {FrameworkData.map((skill, index) => (
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

          <h1 className={styles.subtitle}>Tools</h1>

          <Swiper
            slidesPerView={isMobile ? swiperCount - 2 : 4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: true }}
            speed={5000}
            modules={[Autoplay]}
            className={styles.swiperContainer}
          >
            {ToolsData.map((skill, index) => (
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

export default Skills;
