'use client';

import React from "react";
import Navbar from "../components/Navbar";
import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative privacy-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Privacy Policy</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-extrabold mt-4">
                Privacy Policy
              </h2>
            </div>
          </div>
        </div>
      </section>

      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default page;
