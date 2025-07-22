import React from "react";
import { getProductById } from "@/constant/Data";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const page = async ({ params }: { params: Promise<{ productID: string }> }) => {
  const resolvedParams = await params;
  const product = await getProductById(parseInt(resolvedParams.productID));

  if (!product) {
    return (
      <div className="px-4 md:px-4 lg:px-0 max-w-4xl lg:max-w-5xl mx-auto">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-xl text-gray-300">Product not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-4 lg:px-0 max-w-4xl lg:max-w-5xl mx-auto">
      <div className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-2xl w-full h-auto"
                priority
                placeholder="blur" 
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold text-primary font-flame mb-4">
                {product.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                ${product.price}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-black px-6 py-3 rounded-2xl font-bold hover:bg-primary/80 transition-all duration-300 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-2xl font-bold hover:bg-primary hover:text-black transition-all duration-300">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
