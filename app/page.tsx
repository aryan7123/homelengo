'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input"
import { SearchIcon, LocateIcon } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

export default function Home() {
  const [propertyType, setPropertyType] = useState('');

  const fetchPropertyType = async(propertyValue: string) => {
    try {
      const request = await axios.post('/api/fetch-property-type', { propertyValue });
      console.log(request);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="banner-slider w-full relative z-50 h-screen md:bg-fixed">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:px-0 px-6 md:py-36 py-20">
          <div className="w-full z-10 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-center md:text-[80px] text-white font-semibold">Find Your <br className="md:hidden block" /> Perfect Home</h1>
            <span className="text-white text-center text-base mt-[30px]">We are a real estate agency that will help you find the best residence you dream of, <br className="md:block hidden" /> let’s discuss for your dream house?</span>
            <Tabs defaultValue="for_rent" className="w-full mt-8 md:mt-24">
              <TabsList className="flex items-center justify-center gap-5 bg-transparent">
                <TabsTrigger className="relative rounded-3xl text-base py-3 w-44 border data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=active]:border-[#1563df] data-[state=inactive]:border-[#ffffff] text-white nav-tab-item" value="for_rent">For Rent</TabsTrigger>
                <TabsTrigger className="relative rounded-3xl text-base py-3 w-44 border data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=active]:border-[#1563df] data-[state=inactive]:border-[#ffffff] text-white nav-tab-item" value="for_sale">For Sale</TabsTrigger>
              </TabsList>
              <TabsContent value="for_rent">
                <div className="w-full md:rounded-full rounded-2xl mt-8 md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow-sm">
                  <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
                    <label htmlFor="type" className="text-[#a3abb0]">Type</label>
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
                    <label htmlFor="type" className="text-[#a3abb0]">Location</label>
                    <div className="flex items-center justify-between">
                      <Input type="text" placeholder="Search Location" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                      <LocateIcon size={18} className="mr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label htmlFor="type" className="text-[#a3abb0]">Keyword</label>
                    <Input type="text" placeholder="Keyword" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                  </div>
                  <button type="button" className="bg-[#1563df] flex items-center justify-center rounded-full gap-3 w-full md:w-1/4 py-3 text-white text-base transition-colors">
                    <span>Search</span>
                    <SearchIcon size={20} />
                  </button>
                </div>
              </TabsContent>
              <TabsContent value="for_sale">
                <div className="w-full md:rounded-full rounded-2xl mt-8 md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow-sm">
                  <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
                    <label htmlFor="type" className="text-[#a3abb0]">Type</label>
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
                    <label htmlFor="type" className="text-[#a3abb0]">Location</label>
                    <div className="flex items-center justify-between">
                      <Input type="text" placeholder="Search Location" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                      <LocateIcon size={18} className="mr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label htmlFor="type" className="text-[#a3abb0]">Keyword</label>
                    <Input type="text" placeholder="Keyword" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                  </div>
                  <button type="button" className="bg-[#1563df] flex items-center justify-center rounded-full gap-3 w-full md:w-1/4 py-3 text-white text-base transition-colors">
                    <span>Search</span>
                    <SearchIcon size={20} />
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#161e2d] opacity-30 content-['']"></div>
      </section>
      <motion.section
        className="w-full bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="text-center flex flex-col justify-center items-center">
            <span className="uppercase text-[#1563df] font-medium text-sm mb-3">Featured Properties</span>
            <h3 className="capitalize font-semibold text-3xl md:text-4xl text-[#161e2d]">recommended for you</h3>
          </div>
          <Tabs defaultValue="All" className="w-[inherit] mt-10">
            <TabsList className="flex w-full flex-nowrap justify-start md:justify-center gap-2 md:gap-3 lg:gap-5 bg-transparent overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 property-tablist">
              <TabsTrigger role="presentation" className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all" value="All" onClick={() => fetchPropertyType('All')}>View All</TabsTrigger>
              <TabsTrigger role="presentation" className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all" value="Apartment" onClick={() => fetchPropertyType('Apartment')}>Apartment</TabsTrigger>
              <TabsTrigger role="presentation" className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all" value="Villa" onClick={() => fetchPropertyType('Villa')}>Villa</TabsTrigger>
              <TabsTrigger role="presentation" className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all" value="Office" onClick={() => fetchPropertyType('Office')}>Office</TabsTrigger>
              <TabsTrigger role="presentation" className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all" value="Townhouse" onClick={() => fetchPropertyType('Townhouse')}>Townhouse</TabsTrigger>
              <TabsTrigger role="presentation" className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all" value="Studio" onClick={() => fetchPropertyType('Studio')}>Studio</TabsTrigger>
            </TabsList>
            <TabsContent value={propertyType}>
              
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
