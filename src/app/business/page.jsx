"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiGrid41, CiCircleList } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { businessNews, sidebarNews,  } from "../Data";

function Page() {
  const [view, setView] = useState("grid");



  return (
    <div className="container mx-auto p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold"> बिजनेस</h1>

        <div className="flex border border-gray-200 shadow rounded-lg overflow-hidden">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 flex items-center gap-2 ${
              view === "grid" ? "bg-gray-100 text-[#125384]" : ""
            }`}
          >
            <CiGrid41 />  ग्रिड
          </button>

          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 flex items-center gap-2 ${
              view === "list" ? "bg-gray-200 text-[#125384]" : ""
            }`}
          >
            <CiCircleList /> सुची
          </button>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* MAIN CONTENT */}
        <main className="lg:col-span-3">

          {/* GRID VIEW */}
          {view === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessNews.map((item) => (
                <Link href={`/business/${item.slug}`} key={item.id} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
                  <img src={item.image} className="w-full h-52 object-cover" />
                  <div className="p-4">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                               <Link className="text-[#6DA7E7]" href={`/business/${item.slug}`}>
  थप पढ्नुस् →
</Link>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* LIST VIEW */}
          {view === "list" && (
            <div className="flex flex-col gap-4">
              {businessNews.map((item) => (
                <Link href={`/business/${item.slug}`} key={item.id} className="flex gap-4 bg-white shadow rounded-xl p-3">
                  <img src={item.image} className="w-28 h-20 object-cover rounded" />
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                              <Link className="text-[#6DA7E7]" href={`/business/${item.slug}`}>
  थप पढ्नुस् →
</Link>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          <div className="mt-8 flex gap-2">
            <button className="w-10 h-10 bg-[#A81947] text-white rounded">1</button>
            <button className="w-10 h-10 border rounded">2</button>
            <button className="w-10 h-10 border rounded">3</button>
            <button className="px-4 h-10 border rounded flex items-center gap-1">
              अर्को <MdNavigateNext />
            </button>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside className="lg:col-span-1 flex flex-col gap-6">

          {/* AD */}
          <img
            src="https://bankingkhabar.com/wp-content/uploads/2026/04/nepal-life-insurance.gif"
            className="rounded shadow"
          />

          {/* TRENDING */}
          <div className=" rounded shadow mt-5">

            <div className="flex shadow">
              <button className="w-1/2 py-2 border-t-2 border-[#A81947] font-bold text-[#A81947]">
                ताजा
              </button>
              <button className="w-1/2 py-2 border-b border-l border-gray-200 font-bold">
                ट्रेन्डिङ
              </button>
            </div>

            <div className="p-3 flex flex-col gap-3">
              {sidebarNews.map((item,id) => (
                <div key={id} className="flex gap-3">
                  <img
                    src={item.image} alt={item.title}
                    className="w-14 h-14 rounded object-cover"
                  />
                  <p className="text-sm font-semibold hover:text-[#A81947]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </aside>

      </div>
    </div>
  );
}

export default Page;