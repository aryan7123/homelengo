"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  SearchIcon,
  MapPin,
  BedDouble,
  Bath,
  LandPlot,
  ArrowRight,
  PackageSearch,
  CalendarClock,
  Handshake,
  PhoneCallIcon,
  Mail,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  CircleUserRound,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import Link from "next/link";
import RotatingText from "./components/RotatingText";
import ScrollUpButton from "./components/ScrollUpButton";
import CarouselSlider from "./components/CarouselSlider";

export default function Home() {
  const locations = [
    {
      name: "Greater London",
      image: "/banner/location-1.jpg",
    },
    {
      name: "Birmingham",
      image: "/banner/location-4.jpg",
    },
    {
      name: "Liverpool",
      image: "/banner/location-3.jpg",
    },
    {
      name: "Cambridge",
      image: "/banner/location-5.jpg",
    },
    {
      name: "Reading",
      image: "/banner/location-6.jpg",
    },
  ];

  const [propertyType, setPropertyType] = useState("");
  const [propertyTypeDetails, setPropertyTypeDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchPropertyType = async (propertyValue: string) => {
    setLoading(true);
    try {
      const request = await axios.post("/api/fetch-property-type", {
        propertyValue,
      });
      setPropertyTypeDetails(request.data.properties);
      setPropertyType(propertyValue);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
    fetchPropertyType("All");
  }, []);

  useEffect(() => {
    handleFetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <section className="banner-slider w-full relative z-50 h-screen md:bg-fixed">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:px-0 px-6 md:py-36 py-20">
          <div className="w-full z-10 flex flex-col items-center justify-center">
            <div className="w-[inherit] mx-auto md:justify-center flex items-center md:flex-row flex-col gap-4">
              <h1 className="text-5xl text-center md:text-[80px] text-white font-semibold">
                Find Your{" "}
              </h1>
              <RotatingText
                texts={["Perfect Home", "Dream Home"]}
                mainClassName="text-white font-semibold md:text-7xl text-5xl overflow-hidden justify-center rounded-lg md:pt-[9px] pt-0"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
            </div>
            {/* <span className="text-white text-center text-base mt-[30px]">We are a real estate agency that will help you find the best residence you dream of, <br className="md:block hidden" /> let’s discuss for your dream house?</span> */}
            <Tabs defaultValue="for_rent" className="w-full mt-8 md:mt-24">
              <TabsList className="flex items-center justify-center gap-5 bg-transparent">
                <TabsTrigger
                  className="relative rounded-3xl text-base py-3 w-44 border data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=active]:border-[#1563df] data-[state=inactive]:border-[#ffffff] text-white nav-tab-item"
                  value="for_rent"
                >
                  For Rent
                </TabsTrigger>
                <TabsTrigger
                  className="relative rounded-3xl text-base py-3 w-44 border data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=active]:border-[#1563df] data-[state=inactive]:border-[#ffffff] text-white nav-tab-item"
                  value="for_sale"
                >
                  For Sale
                </TabsTrigger>
              </TabsList>
              <TabsContent value="for_rent">
                <div className="w-full md:rounded-full rounded-2xl mt-8 md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow-sm">
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
              </TabsContent>
              <TabsContent value="for_sale">
                <div className="w-full md:rounded-full rounded-2xl mt-8 md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow-sm">
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
            <span className="uppercase text-[#1563df] font-medium text-sm mb-3">
              Featured Properties
            </span>
            <h3 className="capitalize font-semibold text-3xl md:text-4xl text-[#161e2d]">
              recommended for you
            </h3>
          </div>
          <Tabs defaultValue="All" className="w-[inherit] mt-10">
            <TabsList className="flex w-full flex-nowrap justify-start md:justify-center gap-2 md:gap-3 lg:gap-5 bg-transparent overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 property-tablist">
              <TabsTrigger
                role="presentation"
                className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all"
                value="All"
                onClick={() => fetchPropertyType("All")}
              >
                View All
              </TabsTrigger>
              <TabsTrigger
                role="presentation"
                className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all"
                value="Apartment"
                onClick={() => fetchPropertyType("Apartment")}
              >
                Apartment
              </TabsTrigger>
              <TabsTrigger
                role="presentation"
                className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all"
                value="Villa"
                onClick={() => fetchPropertyType("Villa")}
              >
                Villa
              </TabsTrigger>
              <TabsTrigger
                role="presentation"
                className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all"
                value="Office"
                onClick={() => fetchPropertyType("Office")}
              >
                Office
              </TabsTrigger>
              <TabsTrigger
                role="presentation"
                className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all"
                value="Townhouse"
                onClick={() => fetchPropertyType("Townhouse")}
              >
                Townhouse
              </TabsTrigger>
              <TabsTrigger
                role="presentation"
                className="relative rounded-full text-sm font-medium py-2 px-4 min-w-[100px] flex-shrink-0 md:flex-shrink md:w-auto lg:min-w-[128px] whitespace-nowrap data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=inactive]:bg-[#f7f7f7] data-[state=inactive]:text-[#161e2d] transition-all"
                value="Studio"
                onClick={() => fetchPropertyType("Studio")}
              >
                Studio
              </TabsTrigger>
            </TabsList>
            <TabsContent value={propertyType} className="mt-10">
              {loading ? (
                <div className="flex justify-center items-center h-32">
                  <p className="text-gray-500">Loading properties...</p>
                </div>
              ) : propertyTypeDetails.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {propertyTypeDetails.map((item, index) => (
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
              ) : (
                <div className="text-center text-base text-gray-500">
                  No properties found.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      <motion.section
        className="w-full bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="text-center flex flex-col justify-center items-center">
            <span className="uppercase text-[#1563df] font-medium text-sm mb-3">
              Explore Cities
            </span>
            <h3 className="capitalize font-semibold text-3xl md:text-4xl text-[#161e2d]">
              Our Location For You
            </h3>
          </div>
          <div className="w-[inherit] mt-10">
            <Carousel className="w-full mx-auto max-w-5xl">
              <CarouselContent className="-ml-1">
                {locations.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="rounded-2xl overflow-hidden">
                        <div className="flex aspect-square items-center justify-center px-6 pt-0 pb-6">
                          <div className="relative">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={250}
                              height={350}
                              className="rounded-2xl"
                            />
                            <div className="text-center w-[220px] rounded-xl overflow-hidden ml-[15px] flex items-center justify-between p-4 absolute bottom-[10px] bg-white">
                              <h3 className="text-lg font-semibold text-gray-800">
                                {item.name}
                              </h3>
                              <div className="w-11 h-11 flex items-center justify-center rounded-full border border-[#a3abb0] transition-colors hover:bg-[#1563df] hover:text-white cursor-pointer">
                                <ArrowRight size={20} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Responsive arrow controls */}
              <div className="hidden sm:flex">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="w-full bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="text-center flex flex-col justify-center items-center">
            <span className="uppercase text-[#1563df] font-medium text-sm mb-3">
              Our Services
            </span>
            <h3 className="capitalize font-semibold text-3xl md:text-4xl text-[#161e2d]">
              What We Do?
            </h3>
          </div>
          <div className="w-[inherit] mt-10 flex md:flex-row flex-col items-center justify-between gap-8">
            <div className="w-full flex flex-col px-6 py-10 justify-center items-center md:w-1/3 border group border-[#e4e4e4] transition-all rounded-2xl hover:scale-105 hover:shadow-xl hover:border-0">
              <motion.img
                src="/banner/home-1.png"
                width={200}
                height={200}
                alt="buy new home"
                className="transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
              />
              <h3 className="text-[#161e2d] text-2xl font-medium mt-5">
                Buy a New Home
              </h3>
              <span className="text-[#5c6368] mt-5 text-center text-[15px]">
                Discover your dream home effortlessly. Explore diverse
                properties and expert guidance for a seamless buying experience.
              </span>
              <button
                type="button"
                className="flex mt-5 items-center justify-center rounded-full transition-all py-3 px-11 gap-2 border border-[#1563df] group-hover:bg-[#1563df]"
              >
                <span className="text-base font-medium text-[#161e2d] group-hover:text-white">
                  Learn More
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#161e2d] group-hover:text-white"
                />
              </button>
            </div>
            <div className="w-full flex flex-col px-6 py-10 group justify-center items-center md:w-1/3 border border-[#e4e4e4] transition-all rounded-2xl hover:scale-105 hover:shadow-xl hover:border-0">
              <motion.img
                src="/banner/home-2.png"
                width={200}
                height={200}
                alt="sell new home"
                className="transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
              />
              <h3 className="text-[#161e2d] text-2xl font-medium mt-5">
                Sell a Home
              </h3>
              <span className="text-[#5c6368] mt-5 text-center text-[15px]">
                Sell confidently with expert guidance and effective strategies,
                showcasing your property&apos;s best features for a successful
                sale.
              </span>
              <button
                type="button"
                className="flex mt-5 items-center justify-center rounded-full transition-all py-3 px-11 gap-2 border border-[#1563df] group-hover:bg-[#1563df]"
              >
                <span className="text-base font-medium text-[#161e2d] group-hover:text-white">
                  Learn More
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#161e2d] group-hover:text-white"
                />
              </button>
            </div>
            <div className="w-full flex flex-col group px-6 py-10 justify-center items-center md:w-1/3 border border-[#e4e4e4] transition-all rounded-2xl hover:scale-105 hover:shadow-xl hover:border-0">
              <motion.img
                src="/banner/home-3.png"
                width={200}
                height={200}
                alt="rent new home"
                className="transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
              />
              <h3 className="text-[#161e2d] text-2xl font-medium mt-5">
                Rent a Home
              </h3>
              <span className="text-[#5c6368] mt-5 text-center text-[15px]">
                Discover your perfect rental effortlessly. Explore a diverse
                variety of listings tailored precisely to suit your unique
                lifestyle needs.
              </span>
              <button
                type="button"
                className="flex mt-5 items-center justify-center rounded-full transition-all py-3 px-11 gap-2 border border-[#1563df] group-hover:bg-[#1563df]"
              >
                <span className="text-base font-medium text-[#161e2d] group-hover:text-white">
                  Learn More
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#161e2d] group-hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="px-6 md:px-0">
        <section className="w-full bg-[#f3f7fd] overflow-hidden rounded-3xl">
          <div className="max-w-full flex items-start md:justify-center justify-start md:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <Image
                src="/banner/img-w-text1.jpg"
                alt="benefit-banner"
                width={720}
                height={800}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover w-full h-full rounded-3xl"
                priority
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 py-12 md:pr-[200px] px-6">
              <span className="text-[#1563df] text-sm font-semibold uppercase">
                our benefit
              </span>
              <h3 className="text-4xl font-extrabold mt-2 text-[#161e2d]">
                Why Choose HomeLengo
              </h3>
              <p className="text-sm font-medium text-[#5c6368] mt-5">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
              <div className="w-full mt-10 flex flex-col items-start justify-start gap-6">
                <div className="w-full group hover:scale-105 duration-500 transition-transform bg-white shadow rounded-2xl p-8 flex items-start gap-5 cursor-pointer">
                  <PackageSearch
                    size={100}
                    className="text-[#1563df] font-semibold transition-transform duration-500 group-hover:[transform:rotateY(360deg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#161e2d]">
                      Proven Expertise
                    </h3>
                    <p className="text-sm font-medium text-[#5c6368]">
                      Our seasoned team excels in real estate with years of
                      successful market navigation, offering informed decisions
                      and optimal results.
                    </p>
                  </div>
                </div>
                <div className="w-full group hover:scale-105 duration-500 transition-transform bg-white shadow rounded-2xl p-8 flex items-center gap-5 cursor-pointer">
                  <CalendarClock
                    size={100}
                    className="text-[#1563df] font-semibold transition-transform duration-500 group-hover:[transform:rotateY(360deg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#161e2d]">
                      Customized Solutions
                    </h3>
                    <p className="text-sm font-medium text-[#5c6368]">
                      We pride ourselves on crafting personalized strategies to
                      match your unique goals, ensuring a seamless real estate
                      journey.
                    </p>
                  </div>
                </div>
                <div className="w-full group hover:scale-105 duration-500 transition-transform bg-white shadow rounded-2xl p-8 flex items-center gap-5 cursor-pointer">
                  <Handshake
                    size={100}
                    className="text-[#1563df] font-semibold transition-transform duration-500 group-hover:[transform:rotateY(360deg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#161e2d]">
                      Transparent Partnerships
                    </h3>
                    <p className="text-sm font-medium text-[#5c6368]">
                      Transparency is key in our client relationships. We
                      prioritize clear communication and ethical practices,
                      fostering trust and reliability throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-white py-24">
        <div className="flex items-center mx-auto justify-center flex-col">
          <span className="text-[#1563df] font-semibold">OUR TEAMS</span>
          <h2 className="mt-2 text-[#161e2d] font-extrabold md:text-4xl text-2xl">
            Meet Our Agents
          </h2>
        </div>

        <div className="w-full mt-12">
          <div className="max-w-7xl mx-auto md:px-0 px-6 gap-10 flex md:flex-row flex-col items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.21, duration: 0.5 }}
              className="w-full md:w-1/4 relative group overflow-hidden"
            >
              <Link href="#" className="block relative">
                <Image
                  src="/agents/agent-5.jpg"
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
                  <p className="text-sm text-gray-500">Administrative Staff</p>
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
                  <p className="text-sm text-gray-500">Administrative Staff</p>
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
                  <p className="text-sm text-gray-500">Administrative Staff</p>
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
                  <p className="text-sm text-gray-500">Administrative Staff</p>
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
        </div>
      </section>

      <section className="w-full bg-[#f3f7fd] py-24">
        <div className="flex items-center mx-auto justify-center flex-col">
          <span className="text-[#1563df] font-semibold uppercase">
            latest news
          </span>
          <h2 className="mt-2 text-[#161e2d] font-extrabold md:text-4xl text-2xl">
            Our Blogs
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-0 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs?.slice(0, 3).map((items, index) => {
              const isoDate = items?.createdAt;
              const date = new Date(isoDate);

              const formatted = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <Link
                  className="group block"
                  key={index}
                  href={`/blog-details?id=${
                    items.id
                  }&title=${encodeURIComponent(items.title)}`}
                >
                  <div className="relative overflow-hidden rounded-2xl w-full h-[220px] sm:h-[280px]">
                    <Image
                      src={items?.photos?.[0]}
                      alt={items?.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
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
                  <h3 className="text-[#161e2d] group-hover:text-[#1563df] transition-colors text-xl md:text-2xl font-bold mt-2">
                    {items?.title?.slice(0, 60)}
                    {items?.title?.length > 60 ? "..." : ""}
                  </h3>
                  <p className="text-sm font-medium mt-3 text-[#5c6368]">
                    {items?.description?.slice(0, 100)}
                    {items?.description?.length > 100 ? "..." : ""}
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
}
