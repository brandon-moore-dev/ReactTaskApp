import { useState } from "react";
import { NavLink } from "react-router";
import { FaReact, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  // Array containing navigation items
  const navItems = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "Tasks", text: "Tasks" },
  ];

  // State to manage the mobile menu's visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to handle the mobile menu's display
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="bg-gray-800 flex justify-between items-center h-16 mx-auto px-4">
        {/* Logo */}
        <div className="hidden sm:flex text-2xl text-gray-300 font-bold">
          <div className="flex items-center">
            <FaReact className="mr-4" />
            <span>Task List</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "nav nav-link-active" : "nav nav-link"
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div
          onClick={toggleIsOpen}
          className="flex sm:hidden text-2xl text-gray-300"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            "z-50 fixed top-16 w-full transition " +
            (isOpen
              ? "sm:hidden h-full left-0 bg-gray-800 ease-out duration-100"
              : "left-[-100%] ease-in duration-75")
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li key={item.id} className="">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  "mobile-nav " + (isActive ? "nav-link-active" : "nav-link")
                }
                onClick={toggleIsOpen}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
