"use client";

import { useEffect, useState } from "react";

import ThemeToggle from "./theme-toggle";




export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextPage, setNextPage] = useState<undefined | string>("/");
  const [previousPage, setPreviousPage] = useState<undefined | string>("/");

  return (
    <>
      <div className="flex w-full items-center justify-between">
       
        
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
        
        <div className={`py-2 text-xs font-bold group-hover:bg-[#e1ffe1c5]`}>
          <p className="text-xs">
          
     
            
          </p>
        </div>

        
          
        
      </div>
    </>
  );
}
