"use client";

import React from "react";
import { HEADER_DATA } from "@/data/layoutData";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileSlideBar = ({ onClose }) => {
  return (
    <>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-[80px] right-0 w-[80%] max-w-[320px] h-[calc(100vh-80px)] bg-amber-50 shadow-lg z-50 flex flex-col gap-6 p-6"
      >
        {HEADER_DATA.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            onClick={onClose}
            className="text-sm font-bold text-gray-500 hover:text-primary tracking-[1.8px] uppercase"
          >
            {link.title}
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default MobileSlideBar;