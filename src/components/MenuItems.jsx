"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MenuItems = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className=" w-full h-auto bg-white border rounded-xl shadow-md p-2">
      <ul className="space-y-1">
        {/* NEW ARRIVALS */}
        <li className="relative">
          <button
            onClick={() => toggleItem("new")}
            className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
          >
            NEW ARRIVALS
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                openItem === "new" ? "rotate-90 text-blue-600" : "text-gray-500"
              }`}
            />
          </button>
          {openItem === "new" && (
            <ul className="pl-6 py-1 space-y-1 bg-gray-50 rounded-md mt-1">
              <li>
                <Link href="#" className="block px-2 py-1 hover:text-blue-600">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-2 py-1 hover:text-blue-600">
                  Watches
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-2 py-1 hover:text-blue-600">
                  Bags
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* MEN */}
        <li className="relative">
          <button
            onClick={() => toggleItem("men")}
            className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
          >
            MEN
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                openItem === "men" ? "rotate-90 text-blue-600" : "text-gray-500"
              }`}
            />
          </button>
          {openItem === "men" && (
            <ul className="pl-6 py-1 space-y-1 bg-gray-50 rounded-md mt-1">
              <li>
                <Link href="#" className="block px-2 py-1 hover:text-blue-600">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-2 py-1 hover:text-blue-600">
                  Jeans
                </Link>
              </li>
              <li>
                <Link href="#" className="block px-2 py-1 hover:text-blue-600">
                  Jackets
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
