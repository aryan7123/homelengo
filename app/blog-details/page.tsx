"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../components/Footer";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar1Icon,
  Facebook,
  FolderArchive,
  Instagram,
  Linkedin,
  SearchIcon,
  SendHorizontal,
  Twitter,
  UserCircleIcon,
} from "lucide-react";

const page = () => {
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  const [blog, setBlog] = useState(null);
  const [randomBlogs, setRandomBlogs] = useState(null);

  const handleGetBlog = async () => {
    try {
      const request = await axios.post("/api/blog-details", { blogId });
      setBlog(request.data.blog);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRandomBlogs = async () => {
    try {
      const request = await axios.get("/api/featured-blog-listings");
      setRandomBlogs(request.data.randomBlogs);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRandomBlogs();
  }, []);

  useEffect(() => {
    if (blogId) handleGetBlog();
  }, [blogId]);

  const isoDate = blog?.createdAt;

  const formatted = isoDate
    ? new Date(isoDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <Navbar />

      {blog && (
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
            {/* Image Container */}
            <div
              className="relative w-full h-[22rem] bg-center bg-cover bg-no-repeat overflow-hidden rounded-[15px]"
              style={{
                backgroundImage: `url(${blog?.photos[0]})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

              <div className="absolute px-6 inset-0 flex flex-col items-center justify-center text-white z-10">
                <div className="flex text-sm items-center justify-center gap-1">
                  <Link href="/">Home</Link> /<span>Pages</span> /
                  <span>Latest News</span>
                </div>
                <h2 className="text-xl md:text-3xl text-center font-extrabold mt-4">
                  {blog?.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="w-full py-24 flex md:flex-row flex-col items-start justify-start md:gap-16 gap-10 relative">
              <div className="w-[inherit] md:w-3/4">
                <h3 className="text-4xl text-[#161e2d] font-extrabold">
                  {blog?.title}
                </h3>
                <div className="flex items-center gap-4 mt-4 border-b border-[#e4e4e4] pb-6">
                  <div className="flex items-center gap-2">
                    <UserCircleIcon size={16} />
                    <span className="text-sm font-semibold text-[#1563df]">
                      {blog?.author.fullName}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FolderArchive size={16} />
                    <span className="text-sm font-semibold text-[#1563df]">
                      {blog?.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar1Icon size={16} />
                    <span className="text-sm font-semibold text-[#5c6368]">
                      {formatted}
                    </span>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <Image
                    src={blog?.photos[0]}
                    alt={blog?.title}
                    width={400}
                    height={300}
                    className="object-cover w-full md:h-[400px] h-[300px] rounded-2xl"
                  />
                  <div className="mt-8 border-b border-[#e4e4e4]">
                    {blog?.description &&
                      blog.description.split(/\n\s*\n/).map((para, index) => (
                        <p
                          key={index}
                          className="text-[#1c1c1e] text-sm font-medium my-3.5"
                        >
                          {para.trim()}
                        </p>
                      ))}
                  </div>
                  <div className="w-full flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start mt-4 md:gap-0 gap-6">
                    <div className="flex items-start md:items-center gap-3">
                      <span className="text-[#161e2d] text-sm font-semibold">
                        Tags:
                      </span>
                      <ul className="flex flex-wrap items-center justify-start gap-2">
                        {blog?.tags.map((tag, index) => (
                          <li
                            key={index}
                            className="border text-xs whitespace-nowrap bg-transparent rounded-full text-[#5c6368] border-[#e4e4e4] cursor-pointer transition-colors duration-300 hover:bg-[#1563df] p-3 hover:text-white"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#161e2d] text-sm font-semibold">
                        Share:
                      </span>
                      <ul className="flex items-center justify-center gap-2">
                        <li className="border text-xs whitespace-nowrap bg-transparent rounded-full text-[#5c6368] border-[#e4e4e4] cursor-pointer transition-colors duration-300 hover:bg-[#1563df] p-3 hover:text-white">
                          <Facebook size={16} />
                        </li>
                        <li className="border text-xs whitespace-nowrap bg-transparent rounded-full text-[#5c6368] border-[#e4e4e4] cursor-pointer transition-colors duration-300 hover:bg-[#1563df] p-3 hover:text-white">
                          <Instagram size={16} />
                        </li>
                        <li className="border text-xs whitespace-nowrap bg-transparent rounded-full text-[#5c6368] border-[#e4e4e4] cursor-pointer transition-colors duration-300 hover:bg-[#1563df] p-3 hover:text-white">
                          <Twitter size={16} />
                        </li>
                        <li className="border text-xs whitespace-nowrap bg-transparent rounded-full text-[#5c6368] border-[#e4e4e4] cursor-pointer transition-colors duration-300 hover:bg-[#1563df] p-3 hover:text-white">
                          <Linkedin size={16} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[inherit] mt-10">
                    <h3 className="text-[#1c1c1e] text-2xl font-bold">
                      Featured Listings
                    </h3>
                    <div className="flex flex-col mt-5">
                      {randomBlogs &&
                        randomBlogs.map((item, index) => {
                          const isoDate = item?.createdAt;
                          const date = new Date(isoDate);

                          const formatted = date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          });

                          return (
                            <Link
                              className="flex items-center gap-4 border-t py-4 border-[#e4e4e4]"
                              key={index}
                              href={`/blog-details?id=${
                                item.id
                              }&title=${encodeURIComponent(item.title)}`}
                            >
                              <Image
                                src={item.photos[0]}
                                alt={item.title}
                                width={120}
                                height={80}
                                className="object-cover rounded-2xl"
                              />
                              <div className="flex flex-col">
                                <h4 className="text-[#1c1c1e] font-bold text-sm mb-2.5">{item.title}</h4>
                                <div className="flex items-center gap-1 text-sm font-medium text-[#a3abb0]">
                                  <Calendar1Icon size={12} />
                                  <span>{formatted}</span>
                                </div>
                              </div>                         
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[inherit] md:w-3/12 md:sticky md:top-24 md:right-0">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[#1c1c1e] text-2xl font-bold">
                    Search Blog
                  </h3>
                  <div className="flex items-center justify-center border border-[#e4e4e4] rounded-full py-3 px-3 text-sm font-medium text-[#5c6368] gap-4">
                    <SearchIcon size={16} />
                    <input
                      type="text"
                      className="w-full outline-none"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <h3 className="text-[#1c1c1e] text-2xl font-bold">
                    Categories
                  </h3>
                  <ul className="mt-5">
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Market Updates
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Buying Tips
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Investment Insights
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Accommodation
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Home Construction
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Interior Aspirations
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Community Spotlight
                    </li>
                    <li className="text-[#1c1c1e] border-b border-[#e4e4e4] py-3 font-semibold cursor-pointer">
                      Legal Guidance
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h3 className="text-[#1c1c1e] text-2xl font-bold mb-3">Join our newsletter</h3>
                  <span className="text-[#5c6368] text-xs font-medium">Signup to be the first to hear about exclusive deals, special offers and upcoming collections.</span>
                  <div className="w-full flex items-center justify-between mt-4 border border-[#e4e4e4] rounded-2xl px-2.5 py-3">
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="w-[inherit] text-[#5c6368] text-sm font-semibold outline-none" />
                    <SendHorizontal size={18} className="text-[#1563df] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default page;
