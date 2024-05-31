import Image from "next/image";
import Link from "next/link";
import getConfig from 'next/config';

export default function Home() {
    const config = getConfig();
    const publicRuntimeConfig = config ? config.publicRuntimeConfig : {};
    const basePath = publicRuntimeConfig?.basePath || '';

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${basePath}/main-bg.webp)` }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Empowering Innovation with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web & Desktop Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            As a passionate developer specializing in both web and desktop applications, I turn complex problems into elegant solutions. My work emphasizes seamless functionality, intuitive design, and cutting-edge technology to deliver applications that exceed expectations. Explore my portfolio to see how I can bring your ideas to life.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src={`${basePath}/horse.png`}
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image
          src={`${basePath}/cliff.webp`}
          alt="cliff"
          width={480}
          height={480}
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src={`${basePath}/trees.webp`}
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src={`${basePath}/stars.png`}
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
