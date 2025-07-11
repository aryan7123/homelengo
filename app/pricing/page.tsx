import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative pricing-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Pricing</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-medium mt-4">
                Pricing
              </h2>
            </div>
          </div>
          <div className="w-[inherit] mx-auto py-24">
            <div className="flex flex-col items-center justify-center">
                <span className="text-[#1563df] uppercase text-sm font-semibold mb-2">pricing</span>
                <h2 className="text-4xl font-extrabold text-[#161e2d] capitalize">our subscription</h2>
            </div>
            <div className="w-full mt-10 flex md:flex-row flex-col items-center gap-10">
                <div className="w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm">

                </div>
                <div className="w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm">

                </div>
                <div className="w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm">

                </div>
                <div className="w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm">

                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
