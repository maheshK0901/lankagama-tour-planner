import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Cool Breeze Lanka
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
            </Link>
            <Link
              to="/tripplan"
              className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full relative group"
            >
              Plan Trip
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
            </Link>
            <Link
              to="/houses"
              className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full relative group"
            >
              Houses
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
            </Link>
            <Link
              to="/experiences"
              className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full relative group"
            >
              Experiences
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-emerald-50 rounded-full relative group"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button & User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-emerald-600 p-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-emerald-600 p-2 rounded-full hover:bg-gray-50 transition-colors duration-200 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link
                to="/"
                className="text-gray-700 hover:text-emerald-600 block px-4 py-3 text-base font-medium hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tripplan"
                className="text-gray-700 hover:text-emerald-600 block px-4 py-3 text-base font-medium hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan Trip
              </Link>
              <Link
                to="/houses"
                className="text-gray-700 hover:text-emerald-600 block px-4 py-3 text-base font-medium hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Houses
              </Link>
              <Link
                to="/experiences"
                className="text-gray-700 hover:text-emerald-600 block px-4 py-3 text-base font-medium hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-emerald-600 block px-4 py-3 text-base font-medium hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-3">
                <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-emerald-600 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search</span>
                </button>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-xl text-base font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}