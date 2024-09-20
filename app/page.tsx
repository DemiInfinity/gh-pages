import Image from "next/image";
import Link from "next/link";
import { getBasePath } from "./utils/basePath";
import './styles.css'; // Import the new CSS file

export default function Home() {
  const basePath = getBasePath();

  return (
    <main className="mainContainer">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${basePath}/main-bg.webp)` }}
      >
        <div className="overlay"></div>
        <div className="textContainer md:pl-40 md:pb-20">
          <h1 className="heading">
          Crafting Scalable and High-Performance 
          <span className="gradientText">
              {" "}
              Web Solutions
            </span>
          </h1>
          <p className="description md:block">
          With years of hands-on experience in full-stack web development, I specialize in creating scalable, high-performance web applications that solve real-world challenges. By integrating modern frameworks and best practices, I deliver seamless, user-friendly interfaces and robust back-end systems. Whether it's optimizing for speed, enhancing functionality, or driving innovation, my work consistently exceeds expectations. Explore my portfolio to see how I can bring your web development projects to life.
          </p>
        </div>
      </div>

      
      <div className="imageContainer">
        {/* Add images if necessary */}
      </div>

      <div className="fullScreenImage">
        {/* Add full-screen image */}
      </div>

      <Image
        src={`${basePath}/stars.png`}
        alt="stars"
        height={300}
        width={300}
        className="topLeftImage"
      />
    </main>
  );
}
