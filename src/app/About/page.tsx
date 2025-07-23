import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex justify-center items-center bg-primary sm:bg-transparent rounded-4xl relative">
        <div className="flex flex-col gap-4 text-gray-800 sm:text-primary z-10 absolute top-[50%] sm:top-[13%] w-full text-center text-[2rem] sm:text-[8rem] font-flame">
          <h1>ABOUT US</h1>
        </div>
        <div className="sm:flex flex-1 justify-center items-center relative h-40 sm:h-120">
          <Image
            src="https://res.cloudinary.com/dtvr83fb3/image/upload/v1753207970/BG_fox3rn.png"
            alt="About Burger King"
            fill
            className="object-contain"
            priority
            loading="eager"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-15">
        <h2 className="text-4xl font-bold text-center text-primary py-8 font-flame">
          Our Story
        </h2>
        <div className="bg-black rounded-2xl p-8 text-white">
          <p className="text-lg leading-relaxed mb-6">
            Since 1954, Burger King has been the Home of the Whopper. We began
            with a simple idea: to serve great-tasting, flame-grilled burgers
            made with quality ingredients at affordable prices. What started in
            Miami, Florida, has grown into a global brand with thousands of
            locations worldwide.
          </p>
          <p className="text-lg leading-relaxed">
            Our commitment to flame-grilling sets us apart from the competition.
            Every Whopper is cooked over an open flame, giving it that
            distinctive taste that our customers have loved for decades.
            It&apos;s not just a burger – it&apos;s an experience.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto px-4 py-15">
        <h2 className="text-4xl font-bold text-center text-primary py-8 font-flame">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-primary text-4xl mb-4 font-flame">🔥</div>
            <h3 className="text-xl font-bold text-primary mb-3 font-flame">
              Flame-Grilled
            </h3>
            <p className="text-gray-300">
              Our signature flame-grilling process gives every burger that
              unique, smoky taste that can&apos;t be replicated.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-primary text-4xl mb-4 font-flame">👑</div>
            <h3 className="text-xl font-bold text-primary mb-3 font-flame">
              Have It Your Way
            </h3>
            <p className="text-gray-300">
              We believe in giving you the freedom to customize your meal
              exactly how you want it – because you&apos;re the king.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center">
            <div className="text-primary text-4xl mb-4 font-flame">🌟</div>
            <h3 className="text-xl font-bold text-primary mb-3 font-flame">
              Quality Ingredients
            </h3>
            <p className="text-gray-300">
              We use only the finest ingredients in our recipes, from fresh
              lettuce and tomatoes to our signature flame-grilled beef.
            </p>
          </div>
        </div>
      </section>

      <hr className="w-1/2 mx-auto border-primary border-2 my-10" />

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-15 text-center">
        <div className="bg-primary rounded-2xl p-8 text-black">
          <h2 className="text-3xl font-bold mb-4 font-flame">
            Ready to Taste the Difference?
          </h2>
          <p className="text-lg mb-6">
            Experience what makes Burger King special. Try our flame-grilled
            burgers today!
          </p>
          <Link
            href="/menu"
            className="inline-block bg-black text-primary px-8 py-3 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300"
          >
            View Our Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
