"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-blue-700  text-gray-400 px-4 py-3 mb-5 md:px-8">
      {/* Logo */}
      <Link href="/">
        <div
          className="w-16 h-16 bg-cover bg-no-repeat bg-center cursor-pointer"
          style={{ backgroundImage: 'url(/crossfit.png)' }}
        ></div>
      </Link>

      {/* Title */}
      <h2 className="text-white text-sm md:text-xl sm:block">
        <span className='text-yellow-200 font-bold text-xl md:text-3xl'>CrossFit</span> Gym Management System
      </h2>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="text-white text-2xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex space-y-4 md:space-y-0 flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0 text-white text-sm md:text-base`}
      >
        <li className="menuLink">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li className="menuLink">
          <a href="/about-us" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li className="menuLink">
          <a href="/membership" className="hover:text-gray-300">
            Membership
          </a>
        </li>
        <li className="menuLink">
          <a href="/contact-us" className="hover:text-gray-300">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
