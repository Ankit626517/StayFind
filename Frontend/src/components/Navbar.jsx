"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserPlus, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-50 text-[#2563EB]  border-b  shadow-sm   top-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {/* <Home className=text-yellow-300 h-6 w-6" /> */}
            <span className="font-semibold text-3xl  tracking-wide">
              StayFinder
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center font-bold font- gap-6">
            {/* <Link to="/" className="text-white hover:text-gray-200-500 transition">Home</Link> */}
            <Link
              to="/register"
              className="flex items-center btn   gap-1text-white hover:text-white transition px-3 py-2  rounded-[10px] bg-black   "
            >
              {/* <UserPlus className="w-4 h-4" /> */}
              Register
            </Link>
            <Link
              to="/login"
              className="flex items-center  px-3 py-2 rounded-[10px] bg-white text-blue-800 hover:text-gray-200-500 transition"
            >
              {/* <LogIn className="w-4 h-4" /> */}
              SingIn
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200-500 transition"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-4 pb-6 space-y-3">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-rose-500 transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className=" flex items-center gap-2 text-gray-700 hover:text-rose-500 transition"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link
            to="/register"
            onClick={toggleMenu}
            className=" flex items-center gap-2 text-gray-700 hover:text-rose-500 transition"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
