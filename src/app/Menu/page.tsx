"use client";
import React, { useState, useEffect } from "react";
import Card from "../_components/Card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface Category {
  id: number;
  name: string;
}

interface Setting {
  category: string[];
  price: string;
}

const Menu = () => {
  const [setting, setSetting] = useState<Setting>({
    category: ["Burgers"],
    price: "high-to-low",
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
        ]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(setting);

  if (loading) {
    return (
      <div className="px-4 md:px-4 lg:px-0 max-w-4xl lg:max-w-5xl mx-auto">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <div className="text-lg text-gray-300 font-medium">
              Loading the list ...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4  md:px-4 lg:px-0 max-w-4xl lg:max-w-5xl mx-auto">
      <HeadingMenu className="my-10" />
      <div className="flex flex-col sm:grid grid-cols-11 gap-4 mt-10">
        <div className="col-span-2">
          <SideMenu
            setting={setting}
            setSetting={setSetting}
            categories={categories}
          />
        </div>
        <div className="col-span-9">
          <Products setting={setting} products={products} />
        </div>
      </div>
    </div>
  );
};

export default Menu;

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

const SideMenu = ({
  setting,
  setSetting,
  categories,
}: {
  setting: Setting;
  setSetting: (setting: Setting) => void;
  categories: Category[];
}) => {
  const handleCategoryChange = (categoryName: string) => {
    const isSelected = setting.category.includes(categoryName);

    if (isSelected) {
      setSetting({
        ...setting,
        category: setting.category.filter((cat) => cat !== categoryName),
      });
    } else {
      setSetting({
        ...setting,
        category: [...setting.category, categoryName],
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold text-primary font-flame mb-1.5">
          Categories
        </h1>
        <div className="flex flex-col gap-4">
          {categories.map((category: Category) => (
            <div className="flex items-center gap-2" key={category.id}>
              <Checkbox
                id={category.name}
                checked={setting.category.includes(category.name)}
                onCheckedChange={() => handleCategoryChange(category.name)}
              />
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
            <Checkbox
              id="low-to-high"
              checked={setting.price === "low-to-high"}
              onCheckedChange={() => {
                setSetting({
                  ...setting,
                  price: "low-to-high",
                });
              }}
            />
            <Label htmlFor="low-to-high">Low to High</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="high-to-low"
              checked={setting.price === "high-to-low"}
              onCheckedChange={() => {
                setSetting({
                  ...setting,
                  price: "high-to-low",
                });
              }}
            />
            <Label htmlFor="high-to-low">High to Low</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = ({
  setting,
  products,
}: {
  setting: Setting;
  products: Product[];
}) => {
  const filteredProducts =
    setting.category.length === 0
      ? products
      : products.filter((item: Product) =>
          setting.category.includes(item.category)
        );

  const sortedProducts = [...filteredProducts].sort(
    (a: Product, b: Product) => {
      if (setting.price === "high-to-low") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    }
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2>Show {sortedProducts.length} products</h2>

        <div>
          <button>Sort By</button>
        </div>
      </div>

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedProducts.map((product: Product) => (
            <li key={product.id}>
              <Card
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                href={`/menu/${product.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
