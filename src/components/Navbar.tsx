"use client";

import React, { useState } from "react";
// import { X } from "react-";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdCall } from "react-icons/md";

interface FullscreenPopupMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky bg-black/20 z-50  top-0 backdrop-blur text-white flex items-start sm:items-center justify-between px-4 sm:px-8 py-3 sm:py-4 border left-0 border-gray-400/50 w-full sm:border-none ">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <div className="flex justify-center sm:scale-125 sm:px-6 items-center ">
              <Image width={220} height={100} src="/logo.svg" alt="logo" />
            </div>
          </Link>

          <button
            onClick={openMenu}
            className="hover:scale-110 transition-transform duration-300  sm:hidden"
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex text-xs sm:text-sm gap-2 sm:gap-6 lg:gap-10 items-center">
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors hidden sm:flex"
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="hover:text-gray-300 transition-colors hidden sm:flex"
          >
            Services
          </Link>
          <Link
            href="/#portfolio"
            className="hover:text-gray-300 transition-colors hidden sm:flex"
          >
            Portfolio
          </Link>
          <Link
            href="/#about"
            className="hover:text-gray-300 transition-colors hidden sm:flex"
          >
            ABOUT
          </Link>
          <Link href="/#contact">
            <button className="hidden px-3 py-2 sm:flex bg-white text-md text-black rounded-lg hover:bg-gray-100 transition-all duration-300">
              Contact
            </button>
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <FullscreenPopupMenu isOpen={isOpen} closeMenu={closeMenu} />
        )}
      </AnimatePresence>
    </>
  );
};

const FullscreenPopupMenu: React.FC<FullscreenPopupMenuProps> = ({
  isOpen,
  closeMenu,
}) => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/#services" },
    { label: "portfolio", link: "/#portfolio" },
    { label: "About", link: "/#about" },
    { label: "Contact", link: "/#contact" },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black-100 bg-opacity-95 text-white flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="fixed inset-0 border m-6 rounded-xl border-gray-400/40 bg-black-100 bg-opacity-95 text-white flex items-center justify-center z-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 left-6 p-2 px-4 rounded-lg bg-black-100 border border-white/50 hover:bg-[#1a1a1a] transition"
          aria-label="Close menu"
        >
          <span className="text-white w-5 h-5"> X</span>
        </button>

        <div className="flex flex-col items-center space-y-6 text-center text-3xl md:text-5xl">
          <div className="text-sm text-white">--- ● ---</div>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.link}
                onClick={closeMenu}
                className="hover:text-white transition-transform duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="text-sm text-white">--- ● ---</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
