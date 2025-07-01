import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CarouselSlider = () => {
  const imageUrls = [
    "/partners/partner-1.png",
    "/partners/partner-2.png",
    "/partners/partner-3.png",
    "/partners/partner-4.png",
    "/partners/partner-5.png",
    "/partners/partner-6.png"
  ]

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
          slidesToShow: 3,
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

  return (
    <div className="slider-container w-[inherit] mx-auto text-center px-4">
      <Slider {...settings}>
        {imageUrls.map((src, index) => (
          <div key={index} className="px-3">
            <Image
              src={src}
              width={100}
              height={100}
              alt={`Logo ${index + 1}`}
              className="max-h-24 w-[inherit] text-center object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
