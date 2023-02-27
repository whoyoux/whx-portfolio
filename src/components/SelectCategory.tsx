"use client";

import { Suspense, useState } from "react";
import Contact from "./Contact";
import RecentPosts from "./RecentPosts";
import RecentWorks from "./RecentWorks";

const SelectCategory = () => {
  const [currentIndex, setCurrentIndex] = useState<0 | 1 | 2>(0);
  return (
    <div>
      <div className="w-full flex text-center h-12 transition-all">
        <button
          onClick={() => setCurrentIndex(0)}
          className={`transition-all cursor-pointer select-none flex-1 flex items-center justify-center hover:bg-zinc-800 hover:border-b-4 hover:border-red-900 ${
            currentIndex === 0
              ? "bg-zinc-800 border-b-4 border-red-900"
              : "border-b-4 border-transparent"
          }`}
        >
          recent works
        </button>
        <button
          onClick={() => setCurrentIndex(2)}
          className={`transition-all cursor-pointer select-none flex-1 flex items-center justify-center hover:bg-zinc-800 hover:border-b-4 hover:border-red-900 ${
            currentIndex === 2
              ? "bg-zinc-800 border-b-4 border-red-900"
              : "border-b-4 border-transparent"
          }`}
        >
          contact
        </button>
      </div>
      {currentIndex === 0 && <RecentWorks />}

      {currentIndex === 1 && (
        <Suspense fallback={<span>Loading</span>}>
          {/* @ts-expect-error Server Component */}
          <RecentPosts />
        </Suspense>
      )}

      {currentIndex === 2 && <Contact />}
    </div>
  );
};

export default SelectCategory;
