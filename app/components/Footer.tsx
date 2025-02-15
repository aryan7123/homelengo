'use client';

import React from 'react';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon, LocateIcon, Mail, PhoneCallIcon, TwitterIcon, YoutubeIcon, SendHorizontal } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-[#161e2d]'>
        <div className='max-w-7xl mx-auto md:px-0 px-6 py-12'>
          <div className='flex md:flex-row flex-col md:items-center items-start md:justify-between justify-start md:gap-0 gap-8 border-b pb-12 border-[#ffffff14]'>
            <Image src="/logo/logo-footer@2x.png" width={200} height={100} alt="footer-logo" />
            <div className='flex items-center justify-center gap-3'>
              <span className='text-sm font-medium text-white'>Follow Us: </span>
              <ul className="flex items-center justify-center gap-2">
                <li className='w-10 h-10 rounded-full text-white bg-[#ffffff1a] flex items-center justify-center hover:bg-[#1563df] hover:text-white transition-colors'>
                  <FacebookIcon size={18} />
                </li>
                <li className='w-10 h-10 rounded-full text-white bg-[#ffffff1a] flex items-center justify-center hover:bg-[#1563df] hover:text-white transition-colors'>
                  <InstagramIcon size={18} />
                </li>
                <li className='w-10 h-10 rounded-full text-white bg-[#ffffff1a] flex items-center justify-center hover:bg-[#1563df] hover:text-white transition-colors'>
                  <TwitterIcon size={18} />
                </li>
                <li className='w-10 h-10 rounded-full text-white bg-[#ffffff1a] flex items-center justify-center hover:bg-[#1563df] hover:text-white transition-colors'>
                  <LinkedinIcon size={18} />
                </li>
                <li className='w-10 h-10 rounded-full text-white bg-[#ffffff1a] flex items-center justify-center hover:bg-[#1563df] hover:text-white transition-colors'>
                  <YoutubeIcon size={18} />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex md:flex-row flex-col items-start justify-between md:gap-0 gap-8 border-b py-12 border-[#ffffff14]'>
            <div>
              <span className='text-sm text-[#a3abb0]'>Specializes in providing high-class tours for those <br /> in need. Contact Us</span>
              <div className='flex flex-col gap-2 pt-4'>
                <div className='flex items-center gap-1.5'>
                  <LocateIcon className='text-[#a3abb0]' size={18} />
                  <span className='text-white'>101 E 129th St, East Chicago, IN 46312, US</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <PhoneCallIcon className='text-[#a3abb0]' size={18} />
                  <span className='text-white'>1-333-345-3868</span>
                </div>
                <div className='flex items-center gap-1.5'>
                  <Mail className='text-[#a3abb0]' size={18} />
                  <span className='text-white'>themesflat@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className='text-white font-medium mb-4'>Categories</h4>
              <ul className='flex flex-col gap-2'>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Pricing Plans
                </li>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Our Services
                </li>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  About Us
                </li>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-4'>Our Company</h4>
              <ul className='flex flex-col gap-2'>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Property For Sale
                </li>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Property For Rent
                </li>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Property For Buy
                </li>
                <li className='nav-link text-base font-medium relative text-[#a3abb0]'>
                  Our Agents
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-medium mb-4'>Newsletter</h4>
              <ul className='flex flex-col gap-2'>
                <li className='text-[#a3abb0]'>Your Weekly / Monthly Dose of Knowledge and Inspiration</li>
              </ul>
              <div className='bg-[#ffffff12] mt-6 rounded-3xl flex items-center justify-between px-4 py-3'>
                <input type="email" placeholder='Your Email Address' className='text-[#a3abb0] bg-transparent outline-none text-sm' name="" id="" />
                <SendHorizontal className='text-[#1563df]' size={18} />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center md:gap-0 gap-5 justify-between pt-6'>
            <div className='text-[#a3abb0]'>
              © {new Date().getFullYear()} Homelengo. All Rights Reserved.
            </div>
            <div className='flex items-center justify-between gap-5'>
              <span className='text-[#a3abb0] md:text-sm text-xs'>Terms & Conditions</span>
              <span className='text-[#a3abb0] md:text-sm text-xs'>Privacy and Policy</span>
              <span className='text-[#a3abb0] md:text-sm text-xs'>Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer