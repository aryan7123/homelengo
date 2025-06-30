import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  return (
    <>
      <div className="w-full mb-20 mt-14 bg-[#f3f7fd] rounded-2xl relative">
        <div className="flex md:flex-row flex-col md:items-center items-start md:justify-between md:gap-0 gap-10 justify-start">
          <div className="md:pl-20 pl-6 md:pt-0 pt-10 pr-5">
            <span className="uppercase text-sm font-medium text-[#1563df]">
              become partners
            </span>
            <h3 className="md:text-4xl text-2xl mt-3 text-[#161e2d] text-balance font-semibold">
              List your Properties on Homelengo, join Us Now!
            </h3>
            <button
              type="button"
              className="w-[250px] flex items-center justify-center gap-1 bg-[#1563df] text-white font-semibold text-base rounded-full mt-6 py-3.5 transition-colors hover:bg-[#0e49a6] capitalize"
            >
              become a hosting <ArrowRight size={20} />{" "}
            </button>
          </div>
          <div>
            <Image
              className="scale-100 md:mt-[-60px] mt-0"
              src="/banner/banner.png"
              alt="banner"
              width={1200}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
