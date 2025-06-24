"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import axios from "axios";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from "lucide-react";

const page = () => {
  const [contactForm, setContactForm] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    subject: "",
    form_message: ""
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const { full_name, email_address, phone_number, subject, form_message } = contactForm;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (responseMessage !== null) {
      setResponseMessage(null);
    }
  };

  const handleContactForm = async() => {
    try {
      const req = await axios.post("/api/contact-form", { contactForm });
      setResponseMessage(req.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative contact-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-medium mt-4">
                Contact Us
              </h2>
            </div>
          </div>
          <div className="w-[inherit] flex md:flex-row flex-col md:items-start items-center md:justify-between justify-start md:py-24 py-10 gap-8">
            <div className="w-full md:w-[70%]">
              <h2 className="text-[#161e2d] text-3xl mb-3">Drop Us A Line</h2>
              <span className="text-[#5c6368] mt-3">
                Feel free to connect with us through our online channels for
                updates, news, and more.
              </span>
              <form action="" className="mt-4">
                <div className="w-full flex md:flex-row flex-col gap-8">
                  <div className="md:w-1/2 w-full flex flex-col gap-1">
                    <label
                      className="text-sm text-[#161e2d] font-semibold mb-1"
                      htmlFor="full_name"
                    >
                      Full Name:
                    </label>
                    <input
                      className="w-full rounded-3xl text-sm py-3 pl-3 text-[#161e2d] font-medium outline-none border border-[#e4e4e4]"
                      type="text"
                      value={full_name}
                      onChange={handleChange}
                      name="full_name"
                      id="full_name"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col gap-1">
                    <label
                      className="text-sm text-[#161e2d] font-semibold mb-1"
                      htmlFor="email_address"
                    >
                      Email Address:
                    </label>
                    <input
                      className="w-full rounded-3xl text-sm py-3 pl-3 text-[#161e2d] font-medium outline-none border border-[#e4e4e4]"
                      type="email"
                      value={email_address}
                      onChange={handleChange}
                      name="email_address"
                      id="email_address"
                    />
                  </div>
                </div>
                <div className="w-full flex md:flex-row flex-col gap-8 mt-6">
                  <div className="md:w-1/2 w-full flex flex-col gap-1">
                    <label
                      className="text-sm text-[#161e2d] font-semibold mb-1"
                      htmlFor="phone_number"
                    >
                      Phone Number:
                    </label>
                    <input
                      className="w-full rounded-3xl text-sm py-3 pl-3 text-[#161e2d] font-medium outline-none border border-[#e4e4e4]"
                      type="tel"
                      value={phone_number}
                      onChange={handleChange}
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col gap-1">
                    <label
                      className="text-sm text-[#161e2d] font-semibold mb-1"
                      htmlFor="subject"
                    >
                      Subject:
                    </label>
                    <input
                      className="w-full rounded-3xl text-sm py-3 pl-3 text-[#161e2d] font-medium outline-none border border-[#e4e4e4]"
                      type="text"
                      value={subject}
                      onChange={handleChange}
                      name="subject"
                      id="subject"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-1 mt-6">
                  <label
                    className="text-sm text-[#161e2d] font-semibold mb-1"
                    htmlFor="form_message"
                  >
                    Your Message:
                  </label>
                  <textarea
                    className="w-full h-28 rounded-lg text-sm py-3 pl-3 text-[#161e2d] font-medium outline-none border border-[#e4e4e4]"
                    name="form_message"
                    value={form_message}
                    onChange={handleChange}
                    id="form_message"
                  ></textarea>
                </div>
                {responseMessage !== null && (
                  <div className="mt-6 text-sm text-[#161e2d] font-semibold">
                    {responseMessage}
                  </div>
                )}
                <button
                  onClick={handleContactForm}
                  type="button"
                  className="w-full bg-[#1563df] text-white font-medium text-base rounded-full mt-6 py-3.5 transition-colors hover:bg-[#0e49a6]"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-[30%] py-7 px-7 border border-[#e4e4e4] rounded-2xl">
              <h2 className="text-[#161e2d] text-3xl">Contact Us</h2>
              <div className="mt-8 mb-4">
                <h3 className="text-[#161e2d] mb-3 font-semibold text-base">
                  Address:
                </h3>
                <p className="text-[#5c6368] text-sm">
                  101 E 129th St, East Chicago, IN 46312
                </p>
                <p className="text-[#5c6368] text-sm">United States</p>
              </div>
              <div className="mt-8 mb-4">
                <h3 className="text-[#161e2d] mb-3 font-semibold text-base">
                  Information:
                </h3>
                <p className="text-[#5c6368] text-sm">1-333-345-6868</p>
                <p className="text-[#5c6368] text-sm">
                  hi.themesflat@gmail.com
                </p>
              </div>
              <div className="mt-8 mb-4">
                <h3 className="text-[#161e2d] mb-3 font-semibold text-base">
                  Timing:
                </h3>
                <p className="text-[#5c6368] text-sm">
                  Monday - Friday: 08:00 - 20:00
                </p>
                <p className="text-[#5c6368] text-sm">
                  Saturday - Sunday: 10:00 - 18:00
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-[#161e2d] mb-3 font-semibold text-base">
                  Follow Us:
                </h3>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    className="w-11 h-11 rounded-lg flex items-center justify-center border border-[#e4e4e4] transition-colors hover:bg-[#1563df] hover:text-white"
                  >
                    <FacebookIcon />
                  </button>
                  <button
                    type="button"
                    className="w-11 h-11 rounded-lg flex items-center justify-center border border-[#e4e4e4] transition-colors hover:bg-[#1563df] hover:text-white"
                  >
                    <InstagramIcon />
                  </button>
                  <button
                    type="button"
                    className="w-11 h-11 rounded-lg flex items-center justify-center border border-[#e4e4e4] transition-colors hover:bg-[#1563df] hover:text-white"
                  >
                    <YoutubeIcon />
                  </button>
                  <button
                    type="button"
                    className="w-11 h-11 rounded-lg flex items-center justify-center border border-[#e4e4e4] transition-colors hover:bg-[#1563df] hover:text-white"
                  >
                    <TwitterIcon />
                  </button>
                  <button
                    type="button"
                    className="w-11 h-11 rounded-lg flex items-center justify-center border border-[#e4e4e4] transition-colors hover:bg-[#1563df] hover:text-white"
                  >
                    <LinkedinIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative pb-[56.25%] h-0 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56720.61304840231!2d-87.5211305968324!3d41.6555257016172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811d94dda258cd5%3A0xa4c72b9eb15dd773!2s101%20E%20129th%20St%2C%20East%20Chicago%2C%20IN%2046312%2C%20USA!5e0!3m2!1sen!2sin!4v1750700471620!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "0" }}
            ></iframe>
            {/* Black transparent overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" style={{ pointerEvents: "none" }}></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
