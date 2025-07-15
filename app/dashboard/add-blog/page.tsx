"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

type BlogForm = {
  title: string;
  category: string;
  tags: string[];
  photos: File[];
  description: string;
};

const initialBlog: BlogForm = {
  title: "",
  category: "",
  tags: [],
  photos: [] as File[],
  description: "",
};

const page = () => {
  const { data: session } = useSession();
  const [blog, setBlog] = useState<BlogForm>(initialBlog);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setBlog((prev) => ({ ...prev, tags: selected }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setBlog((prev) => ({
        ...prev,
        photos: newFiles,
      }));
    }
  };

  const handleAddBlog = async () => {
    try {
      const formData = new FormData();

      formData.append("title", blog.title);
      formData.append("category", blog.category);
      formData.append("description", blog.description);
      formData.append("userId", session?.user.id);

      blog.tags.forEach((tag) => formData.append("tags", tag));
      blog.photos.forEach((file) => formData.append("photos", file));

      const request = await axios.post("/api/add-blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(request);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="w-full">
        <div
          className={`max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10`}
        >
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-[#161e2d] text-2xl font-extrabold">
              Add Blog Details
            </h3>
            <form className="mt-6" encType="multipart/form-data">
              <div className="flex flex-col gap-3 mb-7">
                <label className="text-sm font-semibold" htmlFor="title">
                  Title *
                </label>
                <input
                  className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  type="text"
                  name="title"
                  id="title"
                  value={blog.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-3 mb-7">
                <label className="text-sm font-semibold" htmlFor="category">
                  Category *
                </label>
                <select
                  className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  name="category"
                  id="category"
                  value={blog.category}
                  onChange={handleInputChange}
                >
                  <option value="" selected disabled>
                    Select Category
                  </option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Market Updates">Market Updates</option>
                  <option value="Buying Tips">Buying Tips</option>
                  <option value="Home Construction">Home Construction</option>
                  <option value="Interior Inspiration">
                    Interior Inspiration
                  </option>
                  <option value="Investments Insights">
                    Investments Insights
                  </option>
                  <option value="Legal Guidance">Legal Guidance</option>
                  <option value="Community Spotlight">
                    Community Spotlight
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-3 mb-7">
                <label className="text-sm font-semibold" htmlFor="tags">
                  Tags *
                </label>
                <select
                  multiple
                  name="tags"
                  id="tags"
                  value={blog.tags}
                  onChange={handleTagsChange}
                  className="w-full
                    h-44                     
                    rounded-xl                
                    border border-gray-300
                    bg-white
                    px-4 py-2.5
                    text-sm text-gray-900 font-medium
                    outline-none
                    focus:border-blue-600
                    focus:ring-1 focus:ring-blue-600
                    scrollbar-thin
                    scrollbar-thumb-gray-300 scrollbar-track-transparent
                    dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100
                    dark:scrollbar-thumb-gray-600"
                >
                  {[
                    "Furniture",
                    "Property",
                    "Real Estate",
                    "Interior",
                    "Architecture",
                    "Realtor",
                    "Buyer",
                    "Dream Home",
                    "Accommodation",
                  ].map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 mb-7">
                <label className="text-sm font-semibold" htmlFor="photos">
                  Photos *
                </label>
                <input
                  className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  type="file"
                  multiple
                  accept="image/*"
                  name="photos"
                  id="photos"
                  onClick={handleFileChange}
                />
              </div>
              <div className="flex flex-col gap-3 mb-7">
                <label className="text-sm font-semibold" htmlFor="description">
                  Description *
                </label>
                <textarea
                  className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-2xl bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  name="description"
                  id="description"
                  value={blog.description}
                  onChange={handleInputChange}
                />
              </div>
              <button
                onClick={handleAddBlog}
                type="button"
                className="bg-[#1563df] text-white font-semibold text-base rounded-full w-44 mt-4 py-3.5 transition-colors hover:bg-[#0e49a6]"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
