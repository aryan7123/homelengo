import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto md:px-[120px] px-6 transition-[padding] duration-300 py-10">
        <div className="bg-white w-full shadow-md rounded-2xl p-6 mt-8">
          <h3 className="text-[#161e2d] mb-7 text-2xl font-semibold">
            Account Settings
          </h3>
          <form className="w-full">
            <div className="flex flex-col gap-2 mb-7">
              <label className="text-xs font-semibold" htmlFor="full_name">Full Name: *</label>
              <input className="w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="text" name="full_name" id="full_name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold" htmlFor="description">Description: *</label>
              <textarea className="w-full h-28 resize-none border border-[#e4e4e4] pl-4 py-2.5 rounded-2xl bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" name="description" id="description" />
            </div>
            <div className="w-full mt-7 flex md:flex-row md:gap-0 gap-2 flex-col md:items-center items-start justify-between">
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="occupation">Occupation: *</label>
                <input className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="text" name="occupation" id="occupation" />
              </div>
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="phone_number">Phone Number: *</label>
                <input className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="tel" name="phone_number" id="phone_number" />
              </div>
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="address">Address: *</label>
                <input className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="text" name="address" id="address" />
              </div>
            </div>
            <button type="button" className="bg-[#1563df] text-white font-medium text-base rounded-full w-44 mt-7 py-3.5 transition-colors hover:bg-[#0e49a6]">Save & Update</button>
          </form>
          <h3 className="text-[#161e2d] mt-7 text-2xl font-semibold">
            Update Password
          </h3>
          <form className="w-full">
            <div className="w-full mt-7 flex md:flex-row md:gap-0 gap-2 flex-col md:items-center items-start justify-between">
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="occupation">Old Password: *</label>
                <input className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="text" name="occupation" id="occupation" />
              </div>
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="phone_number">New Password: *</label>
                <input className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="tel" name="phone_number" id="phone_number" />
              </div>
              <div className="w-[inherit] flex flex-col gap-2">
                <label className="text-xs font-semibold" htmlFor="address">Confirm Password: *</label>
                <input className="md:w-[320px] w-full border border-[#e4e4e4] pl-4 py-2.5 rounded-[99px] bg-white text-[#161e2d] font-medium text-sm outline-none focus:border-[#1563df]" type="text" name="address" id="address" />
              </div>
            </div>
            <button type="button" className="bg-[#1563df] text-white font-medium text-base rounded-full w-44 mt-7 py-3.5 transition-colors hover:bg-[#0e49a6]">Update Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
