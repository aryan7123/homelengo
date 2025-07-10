import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#1563ef] text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        {/* Progress Circle */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 40 40"
        >
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow Icon */}
        <ChevronUp
          size={20}
          className="relative z-10 transition-transform duration-200 group-hover:scale-110"
        />
      </button>
    </>
  );
};

export default ScrollUpButton;
