import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#285A80] text-gray-200 mt-12">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-[#BB5776] pl-3">
              समाचार
            </h4>
            <ul className="space-y-2 text-white">
              {["समाज", "विचार/ब्लग", "साहित्य", "अन्तर्वार्ता", "खेलकुद"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-[#BB5776] pl-3">
              बिजनेस
            </h4>
            <ul className="space-y-2 text-white">
              {["बजार", "सेयर", "अर्थतन्त्र"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-[#BB5776] pl-3">
              मनोरञ्जन
            </h4>
            <ul className="space-y-2 text-white">
              {["चलचित्र", "गीत/संगीत", "सेलिब्रिटी"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column - About */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-l-4 border-[#BB5776] pl-3">
              हाम्रो बारेमा
            </h4>
            <p className="text-white text-sm leading-relaxed">
              Online news portal providing latest updates on business, economy,
              politics and entertainment from Nepal and beyond.
            </p>
          </div>

        </div>
      </div>

      {/* MID BRAND BAR */}
      <div className="border-t border-gray-300 bg-[#285A80]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
  <Link href='/' className="flex items-center brightness-125">
            <Image
              src="/logo.png"
              alt="Logo"
              width={250}
              height={50}
              className="object-cover"
            />
          </Link>

          {/* Contact */}
          <div className="text-center text-sm text-white">
            <p>📞 +977-1-4790176 | +977-1-4796489</p>
            <p>✉️ news@businesskhabar.com</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 text-xl">
            <a className="p-2 bg-gray-800 rounded-full hover:bg-[#A81947] transition">
              <FaFacebookF />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-[#A81947] transition">
              <CiTwitter />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-[#A81947] transition">
              <FaYoutube />
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="bg-[#125384] py-4 text-center text-white text-sm py-7">
        © {new Date().getFullYear()} BusinessSansar.com — सर्वाधिकार सुरक्षित
      </div>

    </footer>
  );
}

export default Footer;