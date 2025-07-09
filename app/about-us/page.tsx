"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCallIcon } from "lucide-react";
import { motion } from "framer-motion";
import CarouselSlider from "../components/CarouselSlider";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  Mail,
} from "lucide-react";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-white py-24">
        <div className="relative max-w-7xl mx-auto px-6 md:px-0">
          <h2 className="md:text-6xl text-center text-2xl text-[#161e2d] font-semibold">
            Welcome to the HomeLengo
          </h2>
          <p className="text-sm md:text-2xl text-[#5c6368] md:w-1/2 w-full text-center mx-auto font-medium mt-7 leading-8">
            Welcome to Home Lengo, where we turn houses into homes and dreams
            into reality. At Home, we understand that a home is more than just a
            physical space, it&apos;s a place where memories are created,
            families grow, and life unfolds.
          </p>
          <Link
            href="/contact-us"
            className="w-[300px] flex items-center justify-center gap-1 bg-[#1563df] text-white font-semibold text-base mx-auto rounded-full mt-8 py-3.5 transition-colors hover:bg-[#0e49a6] capitalize"
          >
            Contact Us <ArrowRight size={20} />{" "}
          </Link>

          <div className="w-[inherit] pt-24">
            <div className="flex items-center mx-auto justify-center flex-col">
              <span className="text-[#1563df] font-medium">OUR TEAMS</span>
              <h2 className="mt-2 text-[#161e2d] font-semibold md:text-4xl text-2xl">
                Meet Our Agents
              </h2>
            </div>

            <div className="w-full mt-10 gap-10 flex md:flex-row flex-col items-center justify-between">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.21, duration: 0.5 }}
                className="w-full md:w-1/4 relative group overflow-hidden"
              >
                <Link href="#" className="block relative">
                  <Image
                    src="/agents/agent-1.jpg"
                    width={100}
                    height={100}
                    alt="image-agent"
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ul className="bg-[#0033] w-[220px] py-1 z-10 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg grid grid-cols-4 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <FacebookIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <TwitterIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <LinkedinIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center hover:text-[#1563ef]">
                      <InstagramIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                  </ul>
                </Link>

                <div className="content p-4 text-center">
                  <div className="info mb-3">
                    <h5 className="text-xl font-semibold">
                      <a href="#" className="hover:text-blue-600">
                        Sarah Rose
                      </a>
                    </h5>
                    <p className="text-sm text-gray-500">
                      Administrative Staff
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <PhoneCallIcon size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <Mail size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.21, duration: 0.5 }}
                className="w-full md:w-1/4 relative group overflow-hidden"
              >
                <Link href="#" className="block relative">
                  <Image
                    src="/agents/agent-2.jpg"
                    width={100}
                    height={100}
                    alt="image-agent"
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ul className="bg-[#0033] w-[220px] py-1 z-10 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg grid grid-cols-4 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <FacebookIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <TwitterIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <LinkedinIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center hover:text-[#1563ef]">
                      <InstagramIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                  </ul>
                </Link>

                <div className="content p-4 text-center">
                  <div className="info mb-3">
                    <h5 className="text-xl font-semibold">
                      <a href="#" className="hover:text-blue-600">
                        Esther Howard
                      </a>
                    </h5>
                    <p className="text-sm text-gray-500">
                      Administrative Staff
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <PhoneCallIcon size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <Mail size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.21, duration: 0.5 }}
                className="w-full md:w-1/4 relative group overflow-hidden"
              >
                <Link href="#" className="block relative">
                  <Image
                    src="/agents/agent-3.jpg"
                    width={100}
                    height={100}
                    alt="image-agent"
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ul className="bg-[#0033] w-[220px] py-1 z-10 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg grid grid-cols-4 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <FacebookIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <TwitterIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <LinkedinIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center hover:text-[#1563ef]">
                      <InstagramIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                  </ul>
                </Link>

                <div className="content p-4 text-center">
                  <div className="info mb-3">
                    <h5 className="text-xl font-semibold">
                      <a href="#" className="hover:text-blue-600">
                        Darell Steward
                      </a>
                    </h5>
                    <p className="text-sm text-gray-500">
                      Administrative Staff
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <PhoneCallIcon size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <Mail size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.21, duration: 0.5 }}
                className="w-full md:w-1/4 relative group overflow-hidden"
              >
                <Link href="#" className="block relative">
                  <Image
                    src="/agents/agent-4.jpg"
                    width={100}
                    height={100}
                    alt="image-agent"
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ul className="bg-[#0033] w-[220px] py-1 z-10 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg grid grid-cols-4 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <FacebookIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <TwitterIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center border-r border-[#e4e4e4] hover:text-[#1563ef]">
                      <LinkedinIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                    <li className="flex items-center justify-center hover:text-[#1563ef]">
                      <InstagramIcon className="text-white p-2 rounded-full w-8 h-8" />
                    </li>
                  </ul>
                </Link>

                <div className="content p-4 text-center">
                  <div className="info mb-3">
                    <h5 className="text-xl font-semibold">
                      <a href="#" className="hover:text-blue-600">
                        Yelena Jones
                      </a>
                    </h5>
                    <p className="text-sm text-gray-500">
                      Administrative Staff
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <PhoneCallIcon size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e4e4e4] text-[#a3abb0] bg-white transition-colors group-hover:bg-[#1563ef] group-hover:text-white cursor-pointer">
                      <Mail size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mt-20 pb-10">
              <h3 className="capitalize text-[#161e2d] font-semibold text-xl text-center mb-10">Trusted by over 150+ major companies</h3>
              <CarouselSlider />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
