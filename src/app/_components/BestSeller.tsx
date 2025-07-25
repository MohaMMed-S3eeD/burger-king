import React from "react";
import Card from "./Card";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface BestSellerProps {
  category: string;
  products: Product[];
}

const BestSeller = ({ category, products }: BestSellerProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary py-15 font-flame">
        {category}
      </h1>
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
          {products.slice(0, 4).map((item) => (
            <li className="col-span-1 max-w-sm mx-auto" key={item.id}>
              <Card
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                href={`/menu/${item.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestSeller;
