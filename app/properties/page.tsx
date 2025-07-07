"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  MapPin,
  Grid3x3,
  Logs,
  BedDouble,
  Bath,
  LandPlot,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

const page = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = allProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const totalPages = Math.ceil(allProperties.length / propertiesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchAllProperties = async () => {
    try {
      const req = await axios.get("/api/fetch-property");
      console.log(req.data);
      setAllProperties(req.data.property);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProperties();
  }, []);

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
              <h3 className="text-[#161e2d] font-bold md:text-4xl text-2xl">
                Property Listing
              </h3>
              <span className="text-[#161e2d] font-medium text-sm">
                There are currently {allProperties.length} properties.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Tabs>
                <TabsList className="bg-transparent">
                  <TabsTrigger className="w-10 h-10 rounded-lg border border-[#e4e4e4] flex items-center justify-center p-2 mr-2.5 data-[state=active]:bg-[#1563df] data-[state=active]:text-white" value="gridLayout">
                    <Grid3x3 />
                  </TabsTrigger>
                  <TabsTrigger className="w-10 h-10 rounded-lg border border-[#e4e4e4] flex items-center justify-center p-2 data-[state=active]:bg-[#1563df] data-[state=active]:text-white" value="listLayout">
                    <Logs />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
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
          <div className="mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProperties.map((item, index) => (
                <Link
                  href={`/property-details/${item?.id}`}
                  key={index}
                  className="shadow-md border border-[#e4e4e4] rounded-t-2xl cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <Image
                      src={item?.photos[0]}
                      alt={item?.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-[250px]"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white z-20">
                      <p className="text-sm flex items-center gap-1">
                        <MapPin size={14} className="text-white" />
                        {item?.location}, {item?.country}
                      </p>
                    </div>
                    <div className="absolute top-0 w-full h-full left-0 z-20">
                      <div className="pl-5 pt-3 w-full flex items-center justify-start gap-3">
                        <button
                          className="bg-[#1563df] font-medium text-white text-sm p-2 rounded-2xl"
                          type="button"
                        >
                          Featured
                        </button>
                        <button
                          className="bg-[#0000004d] font-medium text-white text-sm p-2 rounded-2xl transition-colors hover:bg-[#1563df]"
                          type="button"
                        >
                          {item?.propertyStatus}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 rounded-b-2xl overflow-hidden bg-white">
                    <h3 className="text-[#161e2d] text-sm md:text-lg font-medium">
                      {item?.title}
                    </h3>
                    <div className="mt-3">
                      <div className="flex items-center gap-4 border-b border-[#e4e4e4] pb-5">
                        <div className="flex items-center gap-1">
                          <BedDouble size={18} className="text-[#a3abb0]" />
                          <span className="text-[#a3abb0] text-sm">
                            Beds:{" "}
                            <small className="text-[#1e1e2d] text-sm font-bold">
                              {item?.bedrooms}
                            </small>
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={18} className="text-[#a3abb0]" />
                          <span className="text-[#a3abb0] text-sm">
                            Baths:{" "}
                            <small className="text-[#1e1e2d] text-sm font-bold">
                              {item?.bathrooms}
                            </small>
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <LandPlot size={18} className="text-[#a3abb0]" />
                          <span className="text-[#a3abb0] text-sm">
                            Sqft:{" "}
                            <small className="text-[#1e1e2d] text-sm font-bold">
                              {item?.size}
                            </small>
                          </span>
                        </div>
                      </div>
                      <h4 className="text-[#1e1e2d] text-lg font-semibold pt-5">
                        Price: ${item?.price}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
          {totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationPrevious
                  className="cursor-pointer hover:bg-[#1563ef] hover:text-white"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <PaginationItem key={index}>
                      <PaginationLink
                        className={`cursor-pointer hover:bg-[#1563ef] hover:text-white ${
                          currentPage === pageNumber
                            ? "bg-[#1563ef] text-white"
                            : ""
                        }`}
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={currentPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationNext
                  className="cursor-pointer hover:bg-[#1563ef] hover:text-white"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                />
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
