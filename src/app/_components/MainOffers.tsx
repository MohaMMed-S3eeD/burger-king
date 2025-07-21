import Image from "next/image";
import React from "react";
import { offers } from "@/constant/Data";

const MainOffers = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-flame text-primary mb-4">
            MAIN OFFERS
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Discover our mouth-watering deals and save big on your favorite
            burgers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group relative bg-gradient-to-br rounded-2xl p-4 overflow-hidden border border-gray-700 hover:border-primary transition-all duration-200 hover:scale-102"
            >
              <div className="absolute top-3 right-3 bg-primary text-black font-bold px-2 py-1 rounded-full text-xs z-10">
                {offer.discount}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-flame text-primary mb-2 group-hover:text-yellow-400 transition-colors duration-200">
                  {offer.title}
                </h3>
                <p className="text-gray-300 mb-3 text-xs leading-relaxed">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      {offer.price}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      {offer.originalPrice}
                    </span>
                  </div>
                </div>

                <button className="cursor-pointer w-full bg-primary text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 duration-200 transform hover:scale-102 active:scale-98">
                  ORDER NOW
                </button>
              </div>

              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-lg group-hover:bg-primary/20 transition-all duration-200"></div>
              <div className="absolute -top-8 -left-8 w-12 h-12 bg-primary/5 rounded-full blur-md group-hover:bg-primary/15 transition-all duration-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainOffers;
