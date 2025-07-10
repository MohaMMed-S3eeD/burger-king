import React from "react";
import Card from "../_components/Card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { products, categories } from "@/constant/Data";

const menu = () => {
  return (
    <div className="px-4  md:px-4 lg:px-0 max-w-4xl lg:max-w-5xl mx-auto">
      <HeadingMenu className="my-10" />
      <div className="flex flex-col sm:grid grid-cols-11 gap-4 mt-10">
        <div className="col-span-2">
          <SideMenu />
        </div>
        <div className="col-span-9">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default menu;

const HeadingMenu = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h1 className="text-4xl font-bold text-center text-primary pt-10 pb-5 font-flame">
        Our Menu
      </h1>
      <p className="text-center text-sm text-gray-300 max-w-2xl mx-auto">
        From Juicy, Flavor-Packed Burgers To Golden, Crispy Fries And
        Refreshing, Ice-Cold Drinks, Our Menu Has Everything You Need To Satisfy
        Your Cravings.
      </p>
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold text-primary font-flame mb-1.5">
          Categories
        </h1>
        <div className="flex flex-col gap-4">
          {categories.map((category) => (
            <div className="flex items-center gap-2" key={category.id}>
              <Checkbox id={category.name} />
              <Label htmlFor={category.name}>{category.name}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-primary font-flame mb-1.5">
          Sort By Price
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="low-to-high" />
            <Label htmlFor="low-to-high">Low to High</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="high-to-low" />
            <Label htmlFor="high-to-low">High to Low</Label>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-primary font-flame mb-1.5">
          Filter By Size
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="small" />
            <Label htmlFor="small">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="medium" />
            <Label htmlFor="medium">Medium</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="large" />
            <Label htmlFor="large">Large</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2> Show 12 products</h2>

        <div>
          <button>Sort By</button>
        </div>
      </div>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <Card
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
