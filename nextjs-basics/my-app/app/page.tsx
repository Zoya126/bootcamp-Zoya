"use client";

import Wrapper from "@/components/wrapper";
import { Form } from '../components/Form';
import ThemeToggle from "../components/theme-toggle";  // Assuming this is the correct import path

export default function Home() {
  return (
    <section className="flex flex-col h-screen w-full">
      {/* Theme Toggle Section */}
      <div className="absolute top-5 left-5 z-10 flex items-center space-x-4">
        <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Switch theme
        </span>
        <div className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
          <ThemeToggle />
        </div>
      </div>

      {/* Header */}
      <header className="w-full py-10 bg-gradient-to-r from-blue-950 via-teal-600 to-green-950 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-teal-200 transition-all duration-300">Home</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-all duration-300">About</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-all duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <Wrapper>
        <div className="flex justify-center items-center h-full">
          <div >
            <Form />
          </div>
        </div>
      </Wrapper>

      {/* Footer */}
      <footer className="w-full py-4 bg-gradient-to-r from-teal-300 via-teal-400 to-blue-700 text-black shadow-lg">
        <p className="text-sm">
          &copy; 2025 My Awesome App. All rights reserved.
        </p>
        <div className="flex justify-center space-x-8 mt-2">
          <a href="#" className="hover:text-teal-300">Privacy Policy</a>
          <a href="#" className="hover:text-teal-300">Terms of Service</a>
        </div>
      </footer>
    </section>
  );
}
