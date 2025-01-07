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
              Crafting Digital Experiences with 
              <span className="gradientText">
                {" "}
                Heart and Precision
              </span>
            </h1>
            <p className="textHome">
              I’m Demi Taylor Nimmo, a passionate full-stack developer dedicated to bringing creativity and functionality together. With expertise in modern web technologies and a focus on user-centric design, I thrive on building intuitive platforms that inspire and connect. Let’s turn ideas into impactful digital realities.
            </p>
          </div>
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
