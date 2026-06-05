"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { headerData } from "../Data";
import { IoMdMenu } from "react-icons/io";


function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const { navItems, topics } = headerData;

  return (
    <>
      {/* TOP BANNER */}
      <div className="container mx-auto px-4 py-3">
        <img
          className="w-full rounded-xl"
          src="https://www.onlinekhabar.com/wp-content/uploads/2026/06/15775170-B27A-48C0-B86E-E8F8E59F8AAE.gif"
          alt="banner"
        />
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm ">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <Link href='/' className="flex items-center brightness-125">
            <Image
              src="/logo.png"
              alt="Logo"
              width={300}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Ad */}
          <div className="hidden md:block">
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/05/IMG_3683.gif"
              className="rounded-lg max-h-20"
              alt="ad"
            />
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#125384] text-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 text-sm font-medium font-extrabold">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="hover:text-yellow-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

        
   

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(true)}>
              <CgProfile className="w-6 h-6 hover:scale-110 transition" />
            </button>

            <button onClick={() => setMenu(true)} className="lg:hidden">
              <FaBars className="w-5 h-5 hover:scale-110 transition" />
            </button>
          </div>
        </div>
      </nav>

      {/* TRENDING + SEARCH */}
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4 justify-between">

        {/* Trending */}
       <div className="flex gap-3 overflow-x-auto scrollbar-hide">
  {topics.map((topic) => (
    <div
      key={topic.id}
      className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap"
    >
      <img
        src={topic.image}
        alt={topic.title}
        className="w-6 h-6 rounded-full object-cover"
      />

      <span className="text-xs font-medium">
        {topic.title}
      </span>
    </div>
  ))}
</div>

        {/* Search */}
        <div className="flex items-center border border-gray-100 rounded-full px-4 py-2 w-full lg:w-80 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search news..."
            className="flex-1 outline-none text-sm"
          />
          <IoIosSearch className="text-gray-500 text-xl" />
        </div>
      </div>

      {/* PROFILE MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[90%] max-w-sm rounded-xl p-6 relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">
              Login
            </h2>

            <div className="space-y-3">
              <input className="w-full border p-2 rounded" placeholder="Username" />
              <input className="w-full border p-2 rounded" placeholder="Email" />
              <button className="w-full bg-[#125384] text-white py-2 rounded hover:bg-[#125384]">
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setMenu(false)}>✕</button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setMenu(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      
      </aside>
    </>
  );
}

export default Header;