"use client"; 

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar"; // Import your updated sidebar component

export default function Navbar() {
  const pathname = usePathname(); 
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Shared layout state

  const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);
  const linkBaseClass = "flex no-underline py-[1em] px-[2em] transition-all duration-150 ease-in-out hover:bg-nav-hover hover:text-white border-b-2";

  return (
    <>
      <nav className="bg-nav-bg border-b border-nav-hover fixed top-0 left-0 right-0 md:static z-50 h-16 flex items-center px-4 md:px-8">
        <ul className="list-none flex items-center m-0 p-0 w-full h-full">
          
          {/* 📱 MOBILE ALIGNMENT BLOCK: Hamburger sits perfectly on the left of the Home link */}
          <li className="mr-auto flex items-center gap-2">
            <button 
              onClick={toggleSidebar} 
              aria-label="Toggle Sidebar Menu"
              aria-expanded={isMobileOpen}
              className="p-2 md:hidden transition-colors duration-150 text-nav-text hover:text-white bg-transparent border-none cursor-pointer focus:outline-none flex items-center" 
            >
              <svg xmlns="http://w3.org" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </button>

            {/* The Home Link stays nested right next to the mobile button */}
            <Link 
              href="/" 
              className={`${linkBaseClass} ${
                pathname === "/" 
                  ? "border-nav-accent text-black font-semibold" 
                  : "border-transparent text-nav-text"
              }`}
            >
              Home
            </Link>
          </li>

          {/* 🖥️ DESKTOP-ONLY LINKS (Hidden entirely on mobile phone sizes) */}
          <li className="md:flex  ">
            <Link 
              href="/login" 
              className={`${linkBaseClass} ${
                pathname === "/login" 
                  ? "border-nav-accent text-black font-semibold" 
                  : "border-transparent text-nav-text"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* 🗂️ THE SIDEBAR ATTACHMENT */}
      {/* Pass state control props straight into the sidebar component */}
      <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
