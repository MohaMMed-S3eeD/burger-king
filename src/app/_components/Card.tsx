import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = ({
  name,
  price,
  image,
  description,
}: {
  name: string;
  price: number;
  image: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-black rounded-2xl p-4 items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="rounded-2xl "
      />
      <h2 className="text-white text-2xl font-bold line-clamp-1">{name}</h2>
      <p className="text-gray-400  line-clamp-2 text-center">{description}</p>
      <div className="flex items-center gap-4 w-full justify-between">
        <p className="text-primary text-2xl font-bold">${price}</p>
        <button
          className=" text-white px-4 py-2 rounded-2xl cursor-pointer hover:bg-primary/80 transition-all duration-300"
          title="Add to Cart"
        >
          <ShoppingBag />
        </button>
      </div>
      <button className="bg-primary text-black px-4 py-2 rounded-2xl w-full cursor-pointer hover:bg-primary/80 transition-all duration-300">
        Details
      </button>
    </div>
  );
};

export default Card;
