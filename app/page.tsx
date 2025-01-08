import Image from "next/image";
import Link from "next/link";
import { getBasePath } from "./utils/basePath";
import "./styles.css"; // Import the new CSS file

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
            <span className="gradientText"> Heart and Precision</span>
          </h1>
          <p className="textHome">
            I’m Demi Taylor Nimmo, a passionate full-stack developer dedicated
            to bringing creativity and functionality together. With expertise in
            modern web technologies and a focus on user-centric design, I thrive
            on building intuitive platforms that inspire and connect. Let’s turn
            ideas into impactful digital realities.
          </p>

          <h2 className="heading">
            Active <span className="gradientText">Projects</span>
          </h2>
          <p className="textProjects">
            I’m currently working on some exciting projects. If you're
            interested in exploring more or gaining detailed insights, simply
            head to the Projects page in the navigation bar below.
          </p>

          <div className="projectsGrid">
            <div className="projectCard">
              <Image
                src={`${basePath}/elementrix-logo.png`}
                alt="Elementrix-UI Logo"
                width={150}
                height={150}
                className="projectLogo"
              />
            </div>

            <div className="projectCard">
              <Image
                src={`${basePath}/lunalore-logo.png`}
                alt="LunaLore Logo"
                width={150}
                height={150}
                className="projectLogo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
