"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { CircleUserRound } from "lucide-react";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  const handleFetchBlogs = async () => {
    try {
      const request = await axios.get("/api/all-blogs");
      setBlogs(request.data.blogs);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchBlogs();
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative blog-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Latest News</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-extrabold mt-4">
                Latest News
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs &&
              blogs.map((items, index) => {
                const isoDate = items?.createdAt;
                const date = new Date(isoDate);

                const formatted = date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <Link className="group block" key={index} href={`/blog-details?id=${items.id}&title=${encodeURIComponent(items.title)}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={items?.photos?.[0]}
                        alt={items?.title}
                        width={400}
                        height={280}
                        className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute tracking-widest top-3 left-3 bg-[#1563df] z-10 text-white font-bold text-sm rounded-full px-3 py-1">
                        {formatted}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                      <div className="flex items-center gap-2">
                        <CircleUserRound className="text-[#1563df]" size={18} />
                        <span className="text-[#161e2d] text-base font-semibold">
                          {items?.author.fullName}
                        </span>
                      </div>
                      <div className="relative pl-3 before:content-[''] before:absolute before:w-px before:bg-[#e4e4e4] before:top-[5px] before:bottom-[5px] before:left-0">
                        <span className="text-[#161e2d] text-base font-semibold">
                          {items?.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[#161e2d] group-hover:text-[#1563df] transition-colors text-xl md:text-2xl font-bold mt-2">{items?.title?.slice(0, 60)}{items?.title?.length > 60 ? '...' : ''}</h3>
                    <p className="text-sm font-medium mt-3 text-[#5c6368]">
                      {items?.description?.slice(0, 100)}{items?.description?.length > 100 ? '...' : ''}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default page;
