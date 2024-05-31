import { Socials } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const baseURL = isProduction ? '/gh-pages/' : '';

  const handleImageClick = (url:any) => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <Link href="/">
          <a>
            <h1 className="text-white text-[25px] font-semibold">Demi Taylor Nimmo</h1>
          </a>
        </Link>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={baseURL + social.src}
            alt={social.name}
            width={28}
            height={28}
            onClick={() => handleImageClick(social.link)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
