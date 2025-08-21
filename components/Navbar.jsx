"use client"
import React, { useState } from "react";
import { assets, BagIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIXED: call the hook
  const { openSignIn } = useClerk();

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-3 border-b border-gray-300 text-gray-700">
      {/* Logo */}
      <Image
        className="cursor-pointer w-24 sm:w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link href="/" className="hover:text-gray-900 transition">Home</Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">Shops</Link>
        <Link href="/about-us" className="hover:text-gray-900 transition">About Us</Link>
        <Link href="/" className="hover:text-gray-900 transition">Contact</Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full whitespace-nowrap"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Desktop Icons */}
      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4 cursor-pointer" src={assets.search_icon} alt="search icon" />

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Cart"
                labelIcon={<CartIcon />}   // ✅ corrected prop name
                onClick={() => router.push("/cart")}
              />
            </UserButton.MenuItems>

            <UserButton.MenuItems>
              <UserButton.Action
                label="My Orders"
                labelIcon={<BagIcon />}   // ✅ corrected prop name
                onClick={() => router.push("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            <span>Account</span>
          </button>
        )}


      </ul>

      {/* Mobile Icons + Hamburger */}
      <div className="flex items-center md:hidden gap-3">
        <button
          className="flex items-center gap-2 hover:text-gray-900 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col p-6 space-y-4 md:hidden z-50">
          <Link href="/" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/all-products" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/about-us" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/" className="hover:text-gray-900 transition" onClick={() => setMenuOpen(false)}>Contact</Link>

          {isSeller && (
            <button
              onClick={() => {
                router.push("/seller");
                setMenuOpen(false);
              }}
              className="text-sm border px-4 py-2 rounded-full"
            >
              Seller Dashboard
            </button>
          )}

          {user ? (
            <UserButton>

              <UserButton.MenuItems>
                <UserButton.Action
                  label="Home"
                  labelIcon={<HomeIcon />}   // ✅ corrected prop name
                  onClick={() => router.push("/")}
                />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Action
                  label="Products"
                  labelIcon={<HomeIcon />}   // ✅ corrected prop name
                  onClick={() => router.push("/all-products")}
                />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Action
                  label="Cart"
                  labelIcon={<CartIcon />}   // ✅ corrected prop name
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BagIcon />}   // ✅ corrected prop name
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="flex items-center gap-2 hover:text-gray-900 transition"
            >
              <Image src={assets.user_icon} alt="user icon" />
              <span>Account</span>
            </button>
          )}


        </div>
      )}
    </nav>
  );
};

export default Navbar;
