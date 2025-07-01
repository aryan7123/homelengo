"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselSlider from "../components/CarouselSlider";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative service-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Our Services</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-medium mt-4">
                Our Services
              </h2>
            </div>
          </div>
          <div className="w-full py-20">
            <div className="text-center flex flex-col justify-center items-center">
              <span className="uppercase text-[#1563df] font-medium text-sm mb-3">
                Explore Cities
              </span>
              <h3 className="capitalize font-semibold text-3xl md:text-4xl text-[#161e2d]">
                Our Location For You
              </h3>
            </div>
            <div className="w-[inherit] mt-10 flex md:flex-row flex-col items-center justify-between gap-6">
              <div className="w-full flex flex-col px-6 py-10 justify-center items-center md:w-1/3 border border-[#e4e4e4] transition-all rounded-2xl">
                <motion.img
                  src="/banner/home-1.png"
                  width={200}
                  height={200}
                  alt="buy new home"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <h3 className="text-[#161e2d] text-2xl font-medium mt-5">
                  Buy a New Home
                </h3>
                <span className="text-[#5c6368] mt-5 text-center text-[15px]">
                  Discover your dream home effortlessly. Explore diverse
                  properties and expert guidance for a seamless buying
                  experience.
                </span>
                <button
                  type="button"
                  className="flex mt-5 items-center justify-center rounded-full transition-all py-3 px-11 gap-2 border border-[#1563df]"
                >
                  <span className="text-base font-medium text-[#161e2d]">
                    Learn More
                  </span>
                  <ArrowRight size={20} className="text-[#161e2d]" />
                </button>
              </div>
              <div className="w-full flex flex-col px-6 py-10 justify-center items-center md:w-1/3 border border-[#e4e4e4] transition-all rounded-2xl">
                <motion.img
                  src="/banner/home-2.png"
                  width={200}
                  height={200}
                  alt="sell new home"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <h3 className="text-[#161e2d] text-2xl font-medium mt-5">
                  Sell a Home
                </h3>
                <span className="text-[#5c6368] mt-5 text-center text-[15px]">
                  Sell confidently with expert guidance and effective
                  strategies, showcasing your property&apos;s best features for
                  a successful sale.
                </span>
                <button
                  type="button"
                  className="flex mt-5 items-center justify-center rounded-full transition-all py-3 px-11 gap-2 border border-[#1563df]"
                >
                  <span className="text-base font-medium text-[#161e2d]">
                    Learn More
                  </span>
                  <ArrowRight size={20} className="text-[#161e2d]" />
                </button>
              </div>
              <div className="w-full flex flex-col px-6 py-10 justify-center items-center md:w-1/3 border border-[#e4e4e4] transition-all rounded-2xl">
                <motion.img
                  src="/banner/home-3.png"
                  width={200}
                  height={200}
                  alt="rent new home"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <h3 className="text-[#161e2d] text-2xl font-medium mt-5">
                  Rent a Home
                </h3>
                <span className="text-[#5c6368] mt-5 text-center text-[15px]">
                  Discover your perfect rental effortlessly. Explore a diverse
                  variety of listings tailored precisely to suit your unique
                  lifestyle needs.
                </span>
                <button
                  type="button"
                  className="flex mt-5 items-center justify-center rounded-full transition-all py-3 px-11 gap-2 border border-[#1563df]"
                >
                  <span className="text-base font-medium text-[#161e2d]">
                    Learn More
                  </span>
                  <ArrowRight size={20} className="text-[#161e2d]" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full py-10">
            <div className="text-center mb-12">
              <h3 className="uppercase font-semibold text-sm md:text-base text-[#161e2d]">
                Trusted by over 150+ major companies
              </h3>
            </div>
            <CarouselSlider />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
