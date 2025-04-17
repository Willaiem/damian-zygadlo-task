"use client";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex text-2xl font-bold text-black">
          <img
            src="/logo.svg"
            alt="Estatary Logo"
            className="w-8 h-8 mr-1 rounded"
          />
          Estatary
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-black hover:text-indigo-600 font-semibold transition-colors"
          >
            Rent
          </a>
          <a
            href="#"
            className="text-black hover:text-indigo-600 font-semibold transition-colors"
          >
            Buy
          </a>
          <a
            href="#"
            className="text-black hover:text-indigo-600 font-semibold transition-colors"
          >
            Sell
          </a>
          <a
            href="#"
            className="text-black hover:text-indigo-600 font-semibold transition-colors"
          >
            Manage Property
          </a>
          <a
            href="#"
            className="text-black hover:text-indigo-600 font-semibold transition-colors"
          >
            Resources
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-flex text-gray-600 font-bold border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            Login
          </button>
          <button className="hidden md:block bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors">
            Sign up
          </button>
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col p-6 md:hidden">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 text-2xl font-semibold text-gray-800 mb-auto">
            <a href="#" className="hover:text-indigo-600">
              Rent
            </a>
            <a href="#" className="hover:text-indigo-600">
              Buy
            </a>
            <a href="#" className="hover:text-indigo-600">
              Sell
            </a>
            <a href="#" className="hover:text-indigo-600">
              Manage Property
            </a>
            <a href="#" className="hover:text-indigo-600">
              Resources
            </a>
          </nav>
          <div className="flex flex-col space-y-4">
            <button className="text-gray-800 font-bold border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors text-lg">
              Login
            </button>
            <button className="bg-indigo-600 text-white font-medium rounded-lg px-4 py-3 hover:bg-indigo-700 transition-colors text-lg">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
