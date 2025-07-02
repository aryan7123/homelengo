import React from "react";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
      </div>
    </>
  );
};

export default Testimonials;
