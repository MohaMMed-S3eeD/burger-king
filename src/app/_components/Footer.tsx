import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const socialLinks = [
    {
      name: "Facebook",
      href: "/facebook",
    },
    {
      name: "Instagram",
      href: "/instagram",
    },
    {
      name: "Twitter",
      href: "/twitter",
    },
    {
      name: "LinkedIn",
      href: "/linkedin",
    },
  ];
  return (
    <>
      <div className="flex flex-col px-4 sm:px-10 mt-20 ">
        <div className="Top flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Stay Connected</h1>
            <input
              placeholder="Enter your email"
              className="bg-transparent border-1 border-primary rounded-xl p-2 w-full sm:w-auto"
            />
          </div>

          <div className="flex flex-row gap-4 justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-primary hover:text-primary transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-primary hover:text-primary transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="Bottom flex justify-center items-center relative">
            <div className="flex flex-col gap-4 text-primary z-10 sm:-z-20 absolute top-[50%] sm:top-[13%] w-full text-center text-[1rem] sm:text-[7rem] font-flame ">
              <h1>BURGER KING</h1>
            </div>
            <div className="sm:flex flex-1 justify-end items-end relative h-32 sm:h-50 ">
              <Image
                src="/Footer.png"
                alt="hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-black rounded-t-4xl text-white p-4 ">
          <p className="text-xs sm:text-sm text-center">
            © 2025 Burger King. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
