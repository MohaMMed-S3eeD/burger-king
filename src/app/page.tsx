import BestSeller from "./_components/BestSeller";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSeller category="New Items" />
      <hr className="w-1/2 mx-auto border-primary border-2 my-10" />
      <BestSeller category="Best Seller" />
      
    </>
  );
}
