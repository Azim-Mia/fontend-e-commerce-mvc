"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
//import MenuComponent from "@/components/Menu";
import MenuItems from "@/components/MenuItems";
import NavIcon from "@/components/NavIcon";
import LargePageMenuItems  from "@/components/LargePageMenuItems"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-auto mx-auto px- 1 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Menu Button + Logo */}
          <div className="flex items-center space-x-1">
            {/* Custom Menu component (Hamburger/Menu toggle) */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition"
            >
              MyBrand
            </Link>
          </div>
          <div className="flex hidden lg:block">
           <LargePageMenuItems />
          </div>
          {/* Right Section - Navigation Icons */}
          <div className="flex items-center space-x-4">
            <NavIcon />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className=" bg-white border-t border-gray-100 shadow-sm">
          <div className="p-4 space-y-2">
            <MenuItems />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 {/* Middle Section - Menu Items */}
          