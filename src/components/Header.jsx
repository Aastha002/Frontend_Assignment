import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Optional: shopping cart icon for better UX

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-white">Product Dashboard</span>
        </h1>

        {/* Navigation Bar */}
        <nav className="space-x-6">
          <a
            href="/"
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            About
          </a>
          {/* Shopping Cart Icon (Optional) */}
          <a
            href="#"
            className="text-white font-semibold hover:text-blue-300 transition duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-2" />
            Cart
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
