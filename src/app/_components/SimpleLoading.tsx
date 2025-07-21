"use client";
import React, { useState, useEffect } from "react";

const SimpleLoading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // 3 ثوانِ

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-flame text-primary animate-pulse">
              BURGER KING
            </h1>
            <p className="text-gray-400 mt-6 text-lg  ">
              Preparing a great experience...
            </p>
          </div>

         
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-700 rounded-full animate-spin">
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SimpleLoading;
