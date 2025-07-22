"use client";
import React, { useState, useMemo } from "react";
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

interface MenuClientProps {
  initialProducts: Product[];
  initialCategories: Category[];
}

const MenuClient = ({ initialProducts, initialCategories }: MenuClientProps) => {
  const [setting, setSetting] = useState<Setting>({
    category: ["Burgers"],
    price: "high-to-low",
  });

  const products = initialProducts;
  const categories = initialCategories;

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (setting.category.length > 0) {
      filtered = filtered.filter((product) =>
        setting.category.includes(product.category)
      );
    }

    if (setting.price === "high-to-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (setting.price === "low-to-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    return filtered;
  }, [products, setting]);

  const handleCategoryChange = (categoryName: string, checked: boolean) => {
    setSetting((prev) => ({
      ...prev,
      category: checked
        ? [...prev.category, categoryName]
        : prev.category.filter((cat) => cat !== categoryName),
    }));
  };

  const handlePriceChange = (priceOption: string) => {
    setSetting((prev) => ({
      ...prev,
      price: priceOption,
    }));
  };

  return (
    <div className="flex gap-6 max-w-7xl mx-auto p-6">
      <aside className="w-64 bg-gray-900 p-6 rounded-lg h-fit sticky top-6">
        <h2 className="text-xl font-flame text-primary mb-6">Filters</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-white mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={setting.category.includes(category.name)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category.name, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`category-${category.id}`}
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Sort by Price</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="high-to-low"
                checked={setting.price === "high-to-low"}
                onCheckedChange={() => handlePriceChange("high-to-low")}
              />
              <Label
                htmlFor="high-to-low"
                className="text-sm text-gray-300 cursor-pointer"
              >
                High to Low
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="low-to-high"
                checked={setting.price === "low-to-high"}
                onCheckedChange={() => handlePriceChange("low-to-high")}
              />
              <Label
                htmlFor="low-to-high"
                className="text-sm text-gray-300 cursor-pointer"
              >
                Low to High
              </Label>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1">
        <div className="mb-6">
          <h1 className="text-4xl font-flame text-primary mb-2">Our Menu</h1>
          <p className="text-gray-400">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              href={`/menu/${product.id}`}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default MenuClient; 