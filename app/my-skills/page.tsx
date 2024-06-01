"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constans";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { getBasePath } from "../utils/basePath";
import styles from './Page.module.css';


const Page: React.FC = () => {
  const basePath = getBasePath();

  return (
    <div className={styles.mainContainer}>
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
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            modules={[Autoplay]}
            className={styles.swiperContainer}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
            }}
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
          <Swiper
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className={styles.swiperContainer}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
            }}
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
