import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[50vh] sm:min-h-screen flex justify-center items-center bg-primary  sm:bg-transparent rounded-4xl">
      <div className="flex flex-col gap-4 text-gray-800 sm:text-primary z-10 sm:-z-20 absolute top-[50%] sm:top-[13%] w-full text-center text-[2rem]  sm:text-[12rem] font-flame ">
        <h1>BURGER KING</h1>
      </div>
      <div className="sm:flex flex-1  justify-center items-center relative h-40 sm:h-120  ">
        <Image
          src="https://res.cloudinary.com/dtvr83fb3/image/upload/v1753207970/BG_fox3rn.png"
          alt="hero"
          fill
          className="object-contain"
          priority
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
