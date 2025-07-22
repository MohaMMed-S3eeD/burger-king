"use client";
import { AlignLeft, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeMenu]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4 font-flame text-primary relative z-40">
        <div>
          <h1 className="text-2xl font-bold">Burger King</h1>
        </div>

        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-500 transition-colors duration-200 px-2 py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <AlignLeft
          onClick={toggleMenu}
          className="sm:hidden p-2 text-primary"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          size={50}
        />
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 sm:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        >
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-black shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-primary">Menu</h2>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
