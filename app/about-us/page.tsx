"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCallIcon, Star } from "lucide-react";
import { motion } from "framer-motion";
import CarouselSlider from "../components/CarouselSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  Mail,
} from "lucide-react";
import ScrollUpButton from "../components/ScrollUpButton";

const page = () => {
  const [allReviews, setAllReviews] = useState([]);

  const fetchAllReviews = async () => {
    try {
      const req = await axios.get("/api/all-reviews");
      setAllReviews(req.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  const settings = {
    infinite: true, // changed to true
    speed: 800, // smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // slightly slower for readability
    cssEase: "ease-in-out", // smoother easing
    pauseOnHover: true, // better UX
    lazyLoad: "ondemand", // improves performance
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);
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
              <h3 className="capitalize text-[#161e2d] font-semibold text-xl text-center mb-10">
                Trusted by over 150+ major companies
              </h3>
              <CarouselSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="w-[inherit] bg-[#f3f7fd] py-28">
        <div className="relative max-w-7xl mx-auto px-6 md:px-0">
          <div className="w-full flex md:flex-row flex-col md:gap-[140px] gap-[100px] items-start justify-between">
            <div className="relative w-full md:w-[50%]">
              <Image
                src="/banner/banner-account1.jpg"
                alt="Discover what sets our Real Estate expertise apart"
                width={600}
                height={600}
                sizes="(max-width: 767px) 100vw, 600px"
                className="object-cover h-[350px] md:h-[570px] rounded-3xl w-full"
                priority
              />
              <Image
                src="/banner/banner-account2.jpg"
                alt="Discover what sets our Real Estate expertise apart"
                width={160}
                height={150}
                className="absolute md:-top-10 -top-8 md:-right-12 -right-4
                w-24 h-24
                md:w-60 md:h-56
                object-cover rounded-3xl z-20"
              />
              <Image
                src="/banner/img-w-text-sm2.jpg"
                alt="Discover what sets our Real Estate expertise apart"
                width={160}
                height={110}
                className="absolute md:-bottom-10 -bottom-8 md:-left-12 -left-4
                w-24 h-24
                md:w-60 md:h-auto
                object-cover rounded-3xl z-20"
              />
            </div>
            <div className="w-full md:w-[50%]">
              <span className="uppercase text-[#1563ef] font-bold text-base">
                our benefit
              </span>
              <h2 className="capitalize mt-2 text-[#161e2d] text-4xl leading-10 font-bold">
                Discover what sets our Real Estate expertise apart
              </h2>
              <p className="mt-5 text-[#5c6368] text-sm">
                Our seasoned professionals, armed with extensive market
                knowledge, walk alongside you through every phase of your
                property endeavor.
              </p>
              <div className="flex flex-col gap-7 mt-10">
                <div className="bg-white flex items-start gap-5 shadow-sm rounded-2xl p-7 transition-transform group cursor-pointer hover:scale-105">
                  <Image
                    src="/logo/home.png"
                    alt="home-logo"
                    width={60}
                    height={60}
                    className="transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#161e2d]">
                      Buy A New Home
                    </h3>
                    <p className="text-sm text-[#5c6368]">
                      Explore diverse properties and expert guidance for a
                      seamless buying experience.
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        className="relative text-base font-semibold text-[#161e2d]
                      after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                      after:h-0.5 after:w-0 after:bg-[#161e2d]
                      after:transition-all after:duration-300 after:ease-out
                      group-hover:after:w-full"
                      >
                        Explore Now
                      </span>
                      <ArrowRight size={16} className="text-[#1563ef]" />
                    </div>
                  </div>
                </div>
                <div className="bg-white flex items-start gap-5 shadow-sm rounded-2xl p-7 transition-transform group cursor-pointer hover:scale-105">
                  <Image
                    src="/logo/keys.png"
                    alt="key-logo"
                    width={60}
                    height={60}
                    className="transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#161e2d]">
                      Rent a Home
                    </h3>
                    <p className="text-sm text-[#5c6368]">
                      Explore a diverse variety of listings tailored precisely
                      to suit your unique lifestyle needs.
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        className="relative text-base font-semibold text-[#161e2d]
                      after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                      after:h-0.5 after:w-0 after:bg-[#161e2d]
                      after:transition-all after:duration-300 after:ease-out
                      group-hover:after:w-full"
                      >
                        Explore Now
                      </span>
                      <ArrowRight size={16} className="text-[#1563ef]" />
                    </div>
                  </div>
                </div>
                <div className="bg-white flex items-start gap-5 shadow-sm rounded-2xl p-7 transition-transform group cursor-pointer hover:scale-105">
                  <Image
                    src="/logo/location.png"
                    alt="location-logo"
                    width={60}
                    height={60}
                    className="transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#161e2d]">
                      Sell Your Home
                    </h3>
                    <p className="text-sm text-[#5c6368]">
                      Showcasing your property&apos;s best features for a rapid
                      and successful sale.
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        className="relative text-base font-semibold text-[#161e2d]
                      after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                      after:h-0.5 after:w-0 after:bg-[#161e2d]
                      after:transition-all after:duration-300 after:ease-out
                      group-hover:after:w-full"
                      >
                        Explore Now
                      </span>
                      <ArrowRight size={16} className="text-[#1563ef]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-full">
        <div className="flex md:flex-row flex-col items-start">
          <div className="relative w-full md:w-[45%] md:h-[600px] h-[400px]">
            <Image
              src="/banner/banner-tes.jpg"
              alt="testimonial-banner"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute left-12 bottom-12 right-6">
              <h3 className="text-white font-bold text-3xl mb-5">
                Our Testimonials
              </h3>
              <span className="text-white text-sm font-semibold">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </span>
            </div>
          </div>
          <div className="w-full h-full md:w-[55%] md:py-24 md:pl-12 md:pr-28 px-6 py-12">
            <Slider {...settings}>
              {allReviews &&
                allReviews.map((review, index) => (
                  <div key={index} className="px-3">
                    <div className="w-full flex flex-col justify-between">
                      {/* Review Text */}
                      <p className="text-base md:text-3xl md:leading-10 capitalize font-semibold text-balance line-clamp-5 overflow-hidden">
                        &quot;{review?.comment}&quot;
                      </p>
                      {/* User Info and Stars */}
                      <div className="mt-4">
                        <h3 className="text-[#161e2d] font-bold">
                          {review?.username}
                        </h3>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => {
                            const starValue = i + 1;
                            return (
                              <Star
                                key={starValue}
                                size={16}
                                className={`${
                                  review?.rating >= starValue
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-400 text-gray-400"
                                }`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default page;
