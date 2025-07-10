import React from "react";
import Card from "./Card";

const BestSeller = ({ category }: { category: string }) => {
  const bestSeller = [
    {
      id: 1,
      name: "Mac & Cheese",
      price: 10,
      image: "/BG.png",
      description:
        "Mac & Cheese is a fast food restaurant that serves burgers and fries.",
    },
    {
      id: 2,
      name: "Cheeseburger",
      price: 10,
      image: "/BG.png",
      description:
        "Cheeseburger is a fast food restaurant that serves burgers and fries.",
    },
    {
      id: 3,
      name: "Chicken Burger",
      price: 10,
      image: "/BG.png",
      description:
        "Chicken Burger is a fast food restaurant that serves burgers and fries.",
    },
    {
      id: 4,
      name: "Chicken Nuggets",
      price: 10,
      image: "/BG.png",
      description:
        "Chicken Nuggets is a fast food restaurant that serves burgers and fries.",
    },
    // {
    //   id: 5, // Changed from 1 to 5
    //   name: "Mac & Cheese",
    //   price: 10,
    //   image: "/BG.png",
    //   description:
    //     "Mac & Cheese is a fast food restaurant that serves burgers and fries.",
    // },
    // {
    //   id: 6, // Changed from 2 to 6
    //   name: "Cheeseburger",
    //   price: 10,
    //   image: "/BG.png",
    //   description:
    //     "Cheeseburger is a fast food restaurant that serves burgers and fries.",
    // },
    // {
    //   id: 7, // Changed from 3 to 7
    //   name: "Chicken Burger",
    //   price: 10,
    //   image: "/BG.png",
    //   description:
    //     "Chicken Burger is a fast food restaurant that serves burgers and fries.",
    // },
    // {
    //   id: 8, // Changed from 4 to 8
    //   name: "Chicken Nuggets",
    //   price: 10,
    //   image: "/BG.png",
    //   description:
    //     "Chicken Nuggets is a fast food restaurant that serves burgers and fries.",
    // },
  ];
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-primary py-15 font-flame">
        {category}
      </h1>
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
          {bestSeller.map((item) => (
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
