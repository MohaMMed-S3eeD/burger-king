import { getProducts, getCategories } from "@/constant/Data";
import MenuClient from "./MenuClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Burger King",
  description:
    "Explore our delicious menu of burgers, fries, and more at Burger King",
  openGraph: {
    title: "Menu - Burger King",
    description: "Explore our delicious menu of burgers, fries, and more",
  },
};

export default async function MenuPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <MenuClient initialProducts={products} initialCategories={categories} />
  );
}
