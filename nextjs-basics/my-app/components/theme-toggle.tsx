"use client";

import React from "react";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 px-4 rounded-full shadow-lg transition-colors">
      <button
        className={`mr-2 p-1 text-gray-700 dark:text-gray-300 ${
          theme === "dark" ? "bg-gray-300 dark:bg-gray-700 rounded-full shadow-md" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <Icons.moon />
      </button>
      <button
        className={`mr-2 p-1 text-gray-700 dark:text-gray-300 ${
          theme === "light" ? "bg-gray-300 dark:bg-gray-700 rounded-full shadow-md" : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <Icons.sun />
      </button>
    </div>
  );
}
