import React from "react";
import Card from "./Card";
import { getProducts } from "@/constant/Data";

const BestSeller = async ({ category }: { category: string }) => {
  const bestSeller = await getProducts();
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary py-15 font-flame">
        {category}
      </h1>
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
          {bestSeller.slice(0, 4).map((item) => (
            <li className="col-span-1 max-w-sm mx-auto" key={item.id}>
              <Card
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestSeller;
