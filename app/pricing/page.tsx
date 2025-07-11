'use client';

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, CircleCheck } from "lucide-react";
import Faqs from "../components/Faqs";

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
              <span className="text-[#1563df] uppercase text-sm font-semibold mb-2">
                pricing
              </span>
              <h2 className="text-4xl font-extrabold text-[#161e2d] capitalize">
                our subscription
              </h2>
            </div>
            <div className="w-full mt-12 flex md:flex-row flex-col items-center gap-10">
              <div className="group w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#1563df] hover:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-[#161e2d] text-4xl font-semibold group-hover:text-white">$20</h3>
                  <span className="text-[#5c6368] text-sm group-hover:text-white">/month</span>
                </div>
                <h3 className="text-[#161e2d] text-2xl font-semibold mb-2 group-hover:text-white">Intro</h3>
                <span className="text-[#5c6368] text-sm group-hover:text-white">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Transportation for you</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">A hotel or homestay</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Free meals and drinks</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#a3abb0] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">24/7 Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck size={14} className="text-[#a3abb0] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Unlimited users</span>
                    </li>
                </ul>
                <button type="button" className="w-full group-hover:bg-white group-hover:text-[#161e2d] mt-5 rounded-3xl bg-[#1563df] text-white transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5">
                    <span>View All Properties</span>
                    <ArrowRight />
                </button>
              </div>
              <div className="w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm group cursor-pointer transition-all duration-300 hover:bg-[#1563df] hover:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-[#161e2d] text-4xl font-semibold group-hover:text-white">$99</h3>
                  <span className="text-[#5c6368] text-sm group-hover:text-white">/month</span>
                </div>
                <h3 className="text-[#161e2d] text-2xl font-semibold mb-2 group-hover:text-white">Base</h3>
                <span className="text-[#5c6368] text-sm group-hover:text-white">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Transportation for you</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">A hotel or homestay</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Free meals and drinks</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#a3abb0] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">24/7 Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck size={14} className="text-[#a3abb0] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Unlimited users</span>
                    </li>
                </ul>
                <button type="button" className="w-full group-hover:bg-white group-hover:text-[#161e2d] mt-5 rounded-3xl bg-[#1563df] text-white transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5">
                    <span>View All Properties</span>
                    <ArrowRight />
                </button>
              </div>
              <div className="w-full bg-[#1563df] md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm group cursor-pointer md:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-white text-4xl font-semibold">$150</h3>
                  <span className="text-white text-sm">/month</span>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-2">Pro</h3>
                <span className="text-white text-sm">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-white" />
                        <span className="text-sm text-white">Transportation for you</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-white" />
                        <span className="text-sm text-white">A hotel or homestay</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-white" />
                        <span className="text-sm text-white">Free meals and drinks</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-white" />
                        <span className="text-sm text-white">24/7 Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck size={14} className="text-white" />
                        <span className="text-sm text-white">Unlimited users</span>
                    </li>
                </ul>
                <button type="button" className="w-full mt-5 rounded-3xl bg-white text-[#161e2d] transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5">
                    <span>View All Properties</span>
                    <ArrowRight />
                </button>
              </div>
              <div className="group w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm group cursor-pointer transition-all duration-300 hover:bg-[#1563df] hover:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-[#161e2d] text-4xl font-semibold group-hover:text-white">$200</h3>
                  <span className="text-[#5c6368] text-sm group-hover:text-white">/month</span>
                </div>
                <h3 className="text-[#161e2d] text-2xl font-semibold mb-2 group-hover:text-white">Enterprise</h3>
                <span className="text-[#5c6368] text-sm group-hover:text-white">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Transportation for you</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">A hotel or homestay</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Free meals and drinks</span>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">24/7 Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck size={14} className="text-[#1563df] group-hover:text-white" />
                        <span className="text-sm group-hover:text-white">Unlimited users</span>
                    </li>
                </ul>
                <button type="button" className="w-full group-hover:bg-white group-hover:text-[#161e2d] mt-5 rounded-3xl bg-[#1563df] text-white transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5">
                    <span>View All Properties</span>
                    <ArrowRight />
                </button>
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
