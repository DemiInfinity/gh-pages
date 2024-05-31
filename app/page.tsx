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
            Empowering Innovation with 
            <span className="gradientText">
              {" "}
              Web & Desktop Development
            </span>
          </h1>
          <p className="description md:block">
            As a passionate developer specializing in both web and desktop applications, I turn complex problems into elegant solutions. My work emphasizes seamless functionality, intuitive design, and cutting-edge technology to deliver applications that exceed expectations. Explore my portfolio to see how I can bring your ideas to life.
          </p>

          <div className="buttonGroup md:flex">
            <Link
              href="/my-skills"
              className="button bg-blue-500 hover:bg-blue-400"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="button bg-transparent"
            >
              My projects
            </Link>
          </div>
        </div>
      </div>

      <div className="linkGroup md:hidden">
        <Link
          href="/my-skills"
          className="button bg-blue-500"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="button bg-transparent"
        >
          My projects
        </Link>
        {/* <Link
          href="/contact-me"
          className="button bg-transparent"
        >
          Contact me
        </Link> */}
      </div>

      <div className="imageContainer">
        {/* <Image
          src={`${basePath}/horse.png`}
          alt="horse"
          height={300}
          width={300}
          className="right-55 top-40"
        /> */}

        {/* <Image
          src={`${basePath}/cliff.webp`}
          alt="cliff"
          width={480}
          height={480}
        /> */}
      </div>

      <div className="fullScreenImage">
        {/* <Image
          src={`${basePath}/trees.webp`}
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        /> */}
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
