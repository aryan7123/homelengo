"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative contact-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex items-center justify-center gap-1">
                <Link href="/">Home</Link> /
                <span>Pages</span> /
                <span>Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-semibold mt-3">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
