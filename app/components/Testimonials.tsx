"use client";

import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import { Quote, Star } from "lucide-react";

const Testimonials = () => {
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
    dots: true,
    infinite: true, // changed to true
    speed: 800, // smoother transition
    slidesToShow: 4,
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
      <div className="bg-[#f3f7fd] mt-24 w-full py-24 rounded-2xl">
        <div className="w-[inherit] mx-auto text-center">
          <span className="uppercase text-[#1563ef] font-semibold">
            our testimonials
          </span>
          <h2 className="text-[#161e2d] capitalize mt-4 md:text-4xl text-2xl font-extrabold">
            What’s people say’s
          </h2>
          <p className="text-[#5c6368] text-sm mt-4 text-balance">
            Our seasoned team excels in real estate with years of successful
            market navigation, offering <br /> informed decisions and optimal
            results.
          </p>
        </div>
        <div className="w-[inherit] mx-auto py-12">
          <Slider {...settings}>
            {allReviews &&
              allReviews.map((review, index) => (
                <div key={index} className="px-3">
                  <div className="bg-white rounded-2xl p-10 shadow-sm">
                    <Quote
                      size={25}
                      className="text-[#1563ef] fill-[#1563ef]"
                    />
                    <p className="text-base mt-4 text-balance line-clamp-6">
                      &quot;{review?.comment}&quot;
                    </p>
                    <h3 className="text-[#161e2d] font-semibold mt-4">{review?.username}</h3>
                    <div className="flex items-center mt-4">
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
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
