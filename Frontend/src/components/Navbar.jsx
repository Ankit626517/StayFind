"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserPlus, LogIn } from "lucide-react";
import { MapPin } from "lucide-react"; // icon import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-[#111827] border-b shadow-sm top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-8 w-8 text-[#EA580C] drop-shadow-md" />
              <span className="font-[Poppins] font-extrabold text-2xl tracking-wide bg-gradient-to-r from-[#EA580C] to-[#111827] bg-clip-text text-transparent drop-shadow-sm">
                StayFinder
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center font-bold gap-6">
            <Link
              to="/register"
              className="flex items-center gap-1 px-3 py-2 rounded-[10px] bg-[#EA580C] text-white hover:bg-[#cf4a09] transition"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="flex items-center px-3 py-2 rounded-[10px] border border-[#111827] text-[#111827] hover:bg-[#F3F4F6] transition"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#111827] hover:text-[#EA580C] transition"
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
            className="block text-[#111827] hover:text-[#EA580C] transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="flex items-center gap-2 text-[#111827] hover:text-[#EA580C] transition"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link
            to="/register"
            onClick={toggleMenu}
            className="flex items-center gap-2 text-[#111827] hover:text-[#EA580C] transition"
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
