"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constans";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import ToggleButton from "../../components/ToggleButton"; // Adjust the import path as necessary

import { getBasePath } from "../utils/basePath";
import styles from "./skills.module.css";

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
    <div
      className={styles.backgroundImage}
      style={{ backgroundImage: `url(${basePath}/bg-2.webp)` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.contentContainer}>
        <div className={styles.pageContainer}>
          {/* About Me Section */}
          <div className={styles.aboutSection}>
            <h1 className={styles.title}>
              About <span className={styles.gradientText}>Me</span>
            </h1>
            <p className={styles.aboutText}>
              Hi, I’m Demi Taylor Nimmo, a passionate full-stack developer
              dedicated to crafting intuitive and impactful web experiences.
              With a keen eye for detail and a drive to solve complex problems,
              I specialize in building scalable and user-centric applications
              using modern technologies like React, Next.js, and serverless
              architectures.
            </p>
            <p className={styles.aboutText}>
              Over the years, I’ve honed my skills in creating seamless
              front-end designs and robust back-end solutions, ensuring every
              project not only functions beautifully but also tells a story. I
              believe in the power of clean code, thoughtful design, and
              collaboration to bring ideas to life.
            </p>
            <p className={styles.aboutText}>
              When I’m not coding, you can find me exploring new tech trends,
              brainstorming creative concepts for LunaLore—my interactive VTuber
              platform—or simply enjoying the journey of continuous learning.
            </p>

            <h1 className={styles.title}>
              Work <span className={styles.gradientText}>Experience</span>
            </h1>

            <div className={styles.aboutText}>
              <div>
                <div>
                  <b>Pass LTD: </b> 2 Months
                </div>
                <div>
                  <span className={styles.gradientText}>
                    (06/2024 - 08/2024)
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <b>3T Global: </b>3 Years 5 Months
                </div>
                <div>
                  <span className={styles.gradientText}>
                    (02/2021 - 06/2024)
                  </span>
                </div>
              </div>
            </div>
            <h1 className={styles.title}>
              Skills <span className={styles.gradientText}>& Technologies</span>
            </h1>

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
