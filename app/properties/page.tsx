'use client';

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Input } from "@/components/ui/input";
import { SearchIcon, MapPin, Grid3x3, Logs } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56720.61304840231!2d-87.5211305968324!3d41.6555257016172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811d94dda258cd5%3A0xa4c72b9eb15dd773!2s101%20E%20129th%20St%2C%20East%20Chicago%2C%20IN%2046312%2C%20USA!5e0!3m2!1sen!2sin!4v1750700471620!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0" }}
        ></iframe>
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"
          style={{ pointerEvents: "none" }}
        ></div>
      </section>
      <section className="max-w-7xl mx-auto relative -mt-14 z-10">
        <div className="w-full md:rounded-full rounded-2xl md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow">
          <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
            <label htmlFor="type" className="text-[#a3abb0]">
              Type
            </label>
            <Select>
              <SelectTrigger className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Office">Office</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
            <label htmlFor="type" className="text-[#a3abb0]">
              Location
            </label>
            <div className="flex items-center justify-between">
              <Input
                type="text"
                placeholder="Search Location"
                className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors"
              />
              <MapPin size={18} className="mr-5" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label htmlFor="type" className="text-[#a3abb0]">
              Keyword
            </label>
            <Input
              type="text"
              placeholder="Keyword"
              className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors"
            />
          </div>
          <button
            type="button"
            className="bg-[#1563df] flex items-center justify-center rounded-full gap-3 w-full md:w-1/4 py-3 text-white text-base transition-colors"
          >
            <span>Search</span>
            <SearchIcon size={20} />
          </button>
        </div>
      </section>
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <div className="flex md:items-center items-start justify-between md:flex-row flex-col md:gap-0 gap-5">
            <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
              <h3 className="text-[#161e2d] font-bold md:text-4xl text-2xl">Property Listing</h3>
              <span className="text-[#161e2d] font-medium text-sm">There are currently 164,814 properties.</span>
            </div>
            <div className="flex items-center gap-4">
              <button type="button" className="w-10 h-10 rounded-lg border border-[#e4e4e4] flex items-center justify-center p-2"><Grid3x3 /></button>
              <button type="button" className="w-10 h-10 rounded-lg border border-[#e4e4e4] flex items-center justify-center p-2"><Logs /></button>
              <Select>
                <SelectTrigger className="w-[140px] rounded-lg border border-[#e4e4e4] p-5 outline-none">
                  <SelectValue placeholder="Show: 30" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
