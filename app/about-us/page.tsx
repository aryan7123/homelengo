'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-white py-24">
        <div className="relative max-w-7xl mx-auto px-6 md:px-0">
          <h2 className="md:text-6xl text-center text-2xl text-[#161e2d] font-semibold">
            Welcome to the HomeLengo
          </h2>
          <p className="text-2xl text-[#5c6368] md:w-1/2 w-full text-center mx-auto font-medium mt-7 leading-8">
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

          <div className="">
            {/* Animated Image */}
            <div className="flex justify-center items-center h-64">
              <Image
                width={100}
                height={100}
                src="/banner/banner-account1.jpg"
                alt="Floating Animation"
                className="w-32 h-32 rounded-3xl shadow-lg object-cover animate-float"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateX(-50px);
            }
            50% {
              transform: translateX(50px);
            }
          }

          @keyframes floatSlow {
            0%,
            100% {
              transform: translateX(-30px);
            }
            50% {
              transform: translateX(30px);
            }
          }

          @keyframes floatFast {
            0%,
            100% {
              transform: translateX(-40px);
            }
            50% {
              transform: translateX(40px);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite alternate;
          }

          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite alternate;
          }

          .animate-float-fast {
            animation: floatFast 3s ease-in-out infinite alternate;
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default page;
