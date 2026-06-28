"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const linkClass = "block py-3 px-4 rounded-lg transition-colors text-nav-text hover:bg-nav-hover hover:text-white no-underline";

  return (
    <>
      {/* 👥 MOBILE BACKDROP OVERLAY SHIELD */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
        />
      )}

      {/* 🗂️ SIDEBAR CONTAINER BOX */}
      <aside 
        className={`
          bg-nav-bg border-r border-nav-hover p-6 flex flex-col gap-6 z-40
          
          /* 🖥️ Desktop Style Sheet: Underneath Navbar, flows with root layout column */
          md:flex md:sticky md:top-0 md:h-[calc(100vh-64px)] md:translate-x-0
          
          /* 📱 Mobile Floating Panel Style Drawer Layout */
          fixed top-16 bottom-0 left-0 w-72 transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full "}
        `}
      >
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-xl tracking-tight">Main Console</span>
          {/* Mobile close cross trigger button */}
          <button onClick={onClose} className="text-nav-text hover:text-white md:hidden text-lg cursor-pointer bg-transparent border-none">
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-1.5">
          <Link href="/dashboard" onClick={onClose} className={`${linkClass} ${pathname === "/dashboard" ? "bg-nav-hover text-white font-medium" : ""}`}>
            📊 Overview
          </Link>
          <Link href="/dashboard/analytics" onClick={onClose} className={`${linkClass} ${pathname === "/dashboard/analytics" ? "bg-nav-hover text-white font-medium" : ""}`}>
            📈 Analytics
          </Link>
          <Link href="/dashboard/settings" onClick={onClose} className={`${linkClass} ${pathname === "/dashboard/settings" ? "bg-nav-hover text-white font-medium" : ""}`}>
            ⚙️ Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}
