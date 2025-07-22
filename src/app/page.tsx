import BestSeller from "./_components/BestSeller";
import Hero from "./_components/Hero";
import MainOffers from "./_components/MainOffers";
import { getProducts, getOffers } from "@/constant/Data";

export default async function Home() {
  const [products, offers] = await Promise.all([getProducts(), getOffers()]);

  return (
    <>
      <Hero />
      <BestSeller category="New Items" products={products} />
      <MainOffers offers={offers} />
      <hr className="w-1/2 mx-auto border-primary border-2 my-10" />
      <BestSeller category="Best Seller" products={products} />
    </>
  );
}
