"use client"; 

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar"; 

export default function Navbar() {
  const pathname = usePathname(); 
  const [isMobileOpen, setIsMobileOpen] = useState(false); 

  const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);
  
  // Stretched layout height to prevent vertical line offsets
  const linkBaseClass = "flex items-center no-underline h-full px-6 transition-all duration-150 ease-in-out hover:bg-nav-hover hover:text-white border-b-2";

  return (
    <>
      <nav className="bg-nav-bg border-b border-nav-hover fixed top-0 left-0 right-0 md:static z-50 h-16 flex items-center px-4 md:px-8">
        <ul className="list-none flex items-center m-0 p-0 w-full h-full">
          
          <li className="mr-auto flex items-center gap-2 h-full">
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

            <Link 
              href="/" 
              className={`${linkBaseClass} ${
                pathname === "/" ? "border-nav-accent text-black font-semibold" : "border-transparent text-nav-text"
              }`}
            >
              Home
            </Link>
          </li>

          <li className="hidden md:flex h-full">
            <Link 
              href="/login" 
              className={`${linkBaseClass} ${
                pathname === "/login" ? "border-nav-accent text-black font-semibold" : "border-transparent text-nav-text"
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* 🚀 YOUR IDEA: Wrapping the sidebar in a positioning container */}
      {/* On desktop (md), this forces the sidebar to float permanently on the left side */}
      <div className="hidden md:block fixed top-16 left-0 bottom-0 w-72 z-40">
        <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      </div>

      {/* Mobile-only view portal attachment fallback */}
      <div className="md:hidden">
        <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      </div>
    </>
  );
}
