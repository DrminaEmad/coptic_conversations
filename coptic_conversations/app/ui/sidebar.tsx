"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const linkClass = "block py-3 px-4 rounded-lg transition-colors text-brand-muted hover:bg-brand-primary/10 hover:text-brand-primary no-underline font-medium";

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
          bg-white dark:bg-zinc-950 border-r border-brand-muted/20 p-6 flex flex-col gap-6 z-40
          
          /* 🖥️ Desktop Style Sheet: Underneath Navbar, flows with root layout column */
          md:flex md:sticky md:top-0 md:h-[calc(100vh-128px)] md:translate-x-0

          
          /* 📱 Mobile Floating Panel Style Drawer Layout */
          fixed top-16 bottom-0 left-0 w-72 transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full "}
        `}
      >
        <div className="flex items-center justify-between">
          <span className="text-brand-primary font-bold text-lg tracking-tight">قائمة الخدمات</span>
          {/* Mobile close cross trigger button */}
          <button onClick={onClose} className="text-brand-muted hover:text-brand-primary md:hidden text-lg cursor-pointer bg-transparent border-none">
            ✕
          </button>
        </div>


        <nav className="flex flex-col gap-1.5">
          <Link href="/dashboard" onClick={onClose} className={`${linkClass} ${pathname === "/dashboard" ? "bg-brand-primary text-white hover:text-white! hover:bg-brand-primary/90" : ""}`}>
            📚 مكتبة الكتب
          </Link>
          <Link href="/dashboard/analytics" onClick={onClose} className={`${linkClass} ${pathname === "/dashboard/analytics" ? "bg-brand-primary text-white hover:text-white! hover:bg-brand-primary/90" : ""}`}>
            🎵 مكتبة الألحان
          </Link>
          <Link href="/dashboard/settings" onClick={onClose} className={`${linkClass} ${pathname === "/dashboard/settings" ? "bg-brand-primary text-white hover:text-white! hover:bg-brand-primary/90" : ""}`}>
            ☦️ اللغة القبطية
          </Link>
        </nav>

      </aside>
    </>
  );
}
