"use client";

import React, { useState } from "react";
import axios from "axios";

const page = () => {
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
                  className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]"
                  name="tags"
                  id="tags"
                >
                  <option value="" selected disabled>
                    Select Tags
                  </option>
                  <option value="Furniture">Furniture</option>
                  <option value="Property">Property</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Interior">Interior</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Realtor">Realtor</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Dream Home">Dream Home</option>
                  <option value="Accommodation">Accommodation</option>
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
                  name="photos"
                  id="photos"
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
                />
              </div>
              <button
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
