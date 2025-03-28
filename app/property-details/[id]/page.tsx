'use client';

import React, { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image';
import { Printer, MapPin, SlidersHorizontal, Star, BedDouble, Bath, LandPlot, Heart, Share2, Move3d, House, Warehouse, BathIcon, CropIcon, HammerIcon, RulerIcon } from "lucide-react";
interface RatingProps {
  onRatingSelect?: (ratings: number[]) => void;
}

const page: React.FC<RatingProps> = ({ onRatingSelect }) => {
  const { id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (starValue: number) => {
    const newRating = starValue === rating ? 0 : starValue;
    setRating(newRating);
    onRatingSelect?.(newRating);
  };

  useEffect(() => {
    const fetchPropertyById = async () => {
      try {
        const request = await axios.post('/api/single-property', { propertyId: id });
        setPropertyDetails(request.data.property);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPropertyById();
  }, []);

  return (
    <>
      <Navbar />
      <main className='w-full bg-white'>
        <div className='max-w-7xl mx-auto px-6 py-12 md:px-0'>
          <div className='flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start md:gap-0 gap-4 border-b border-[#e4e4e4] pb-7 mb-7'>
            <h3 className='text-[#161e2d] md:text-4xl cursor-pointer transition-colors text-2xl font-semibold hover:text-[#1563df]'>{propertyDetails?.title}</h3>
            <h3 className='text-[#161e2d] md:text-4xl text-2xl font-semibold'>${propertyDetails?.price}</h3>
          </div>
          <div className='flex md:flex-row flex-col justify-start md:items-center items-start gap-6 md:gap-14'>
            <div className='flex flex-col justify-start items-start gap-4'>
              <h3 className='text-[#5c6368] text-base font-semibold'>Features</h3>
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-1">
                  <BedDouble size={18} className="text-[#a3abb0]" />
                  <span className="text-[#a3abb0] text-sm">
                    Beds: <small className="text-[#1e1e2d] text-sm font-semibold">{propertyDetails?.bedrooms}</small>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath size={18} className="text-[#a3abb0]" />
                  <span className="text-[#a3abb0] text-sm">
                    Baths: <small className="text-[#1e1e2d] text-sm font-semibold">{propertyDetails?.bathrooms}</small>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <LandPlot size={18} className="text-[#a3abb0]" />
                  <span className="text-[#a3abb0] text-sm">
                    Sqft: <small className="text-[#1e1e2d] text-sm font-semibold">{propertyDetails?.size}</small>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start gap-4'>
              <h3 className='text-[#5c6368] text-base font-semibold'>Location</h3>
              <div className="flex items-center gap-1">
                <MapPin size={18} className="text-[#a3abb0]" />
                <span className='text-[#5c6368] text-sm'>{propertyDetails?.location}</span>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3.5 md:ml-auto'>
              <button className='text-[#5c6368] border border-[#e4e4e4] rounded-xl w-10 h-10 flex items-center justify-center transition-colors hover:bg-[#1563df] hover:text-white'>
                <Heart size={18} />
              </button>
              <button className='text-[#5c6368] border border-[#e4e4e4] rounded-xl w-10 h-10 flex items-center justify-center transition-colors hover:bg-[#1563df] hover:text-white'>
                <Move3d size={18} />
              </button>
              <button className='text-[#5c6368] border border-[#e4e4e4] rounded-xl w-10 h-10 flex items-center justify-center transition-colors hover:bg-[#1563df] hover:text-white'>
                <Share2 size={18} />
              </button>
              <button className='text-[#5c6368] border border-[#e4e4e4] rounded-xl w-10 h-10 flex items-center justify-center transition-colors hover:bg-[#1563df] hover:text-white'>
                <Printer size={18} />
              </button>
            </div>
          </div>
          <div className="w-full pt-12">
            <Image
              className='w-full rounded-2xl'
              src={propertyDetails?.photos?.[0]}
              alt={propertyDetails?.title}
              width={800}
              height={600}
            />
          </div>
          <section className='py-12 border-b border-[#e4e4e4]'>
            <h3 className='text-2xl font-semibold text-[#161e2d] mb-4'>Description</h3>
            <p className='text-sm text-[#5c6368]'>{propertyDetails?.description}</p>
          </section>
          <section className='py-12 border-b border-[#e4e4e4]'>
            <h3 className='text-2xl font-semibold text-[#161e2d] mb-4'>Overview</h3>
            <div className="flex md:flex-row flex-col justify-start items-start gap-4 md:items-center md:justify-between ">
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <House size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>ID:</span>
                  <span className='text-sm'>{propertyDetails?.propertyId}</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <SlidersHorizontal size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Type:</span>
                  <span className='text-sm'>{propertyDetails?.propertyType}</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <Warehouse size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Garages:</span>
                  <span className='text-sm'>{propertyDetails?.garage}</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <Warehouse size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Bedrooms:</span>
                  <span className='text-sm'>{propertyDetails?.bedrooms} rooms</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <BathIcon size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Bathrooms:</span>
                  <span className='text-sm'>{propertyDetails?.bathrooms} bathrooms</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <CropIcon size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Land Size:</span>
                  <span className='text-sm'>{propertyDetails?.landArea} sqft</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <HammerIcon size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Year Built:</span>
                  <span className='text-sm'>{propertyDetails?.yearBuilt}</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div className='w-10 h-10 border rounded-lg border-[#e4e4e4] flex items-center justify-center'>
                  <RulerIcon size={18} />
                </div>
                <div className="flex flex-col items-start">
                  <span className='text-[#5c6368] opacity-80 text-sm'>Size:</span>
                  <span className='text-sm'>{propertyDetails?.size}</span>
                </div>
              </div>
            </div>
          </section>
          <section className='py-12 border-b border-[#e4e4e4]'>
            <h3 className='text-2xl font-semibold text-[#161e2d] mb-4'>Amenities and Features</h3>
            <ul className='flex md:flex-row flex-col items-start md:gap-16 gap-4 md:items-center ml-4'>
              {propertyDetails?.amenities?.map((item, index) => (
                <li key={index} className='text-base list-disc text-[#5c6368]'>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className='w-[inherit] py-12 border-b border-[#e4e4e4]'>
            <h3 className='text-2xl font-semibold text-[#161e2d] mb-4'>Leave a Comment</h3>
            <div className='bg-[#f7f7f7] w-full p-5 rounded-lg'>
              <div className='w-full flex md:flex-row flex-col gap-5 md:items-center items-start justify-start'>
                <div className='w-full md:w-1/2 gap-2.5 flex flex-col justify-start'>
                  <label htmlFor="name" className='text-xs font-semibold text-[#161e2d]'>Name</label>
                  <input className='bg-white w-full rounded-full border border-[#e4e4e4] outline-none px-5 py-4 text-sm text-[#161e2d]' type="text" name='name' id='name' placeholder='Your Name' />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-start gap-2.5'>
                  <label htmlFor="name" className='text-xs font-semibold text-[#161e2d]'>Review</label>
                  <div className='bg-white w-full rounded-full border border-[#e4e4e4] flex items-center px-5 py-4 gap-1'>
                    {[...Array(5)].map((_, i) => {
                      const starValue = i + 1;
                      return (
                        <Star
                          key={starValue}
                          size={24}
                          onMouseEnter={() => setHover(starValue)}
                          onMouseLeave={() => setHover(0)}
                          className={`cursor-pointer transition-colors ${starValue <= (hover || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400 fill-gray-400"}`}
                          onClick={() => handleStarClick(starValue)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='w-full pt-5 flex md:flex-row flex-col gap-5 md:items-center items-start justify-start'>
                <div className='w-full md:w-1/2 gap-2.5 flex flex-col justify-start'>
                  <label htmlFor="comment" className='text-xs font-semibold text-[#161e2d]'>Comment</label>
                  <textarea rows={4} className='bg-white resize-none w-full rounded-2xl border border-[#e4e4e4] outline-none p-5 text-sm text-[#161e2d]' name='comment' id='comment' placeholder='Write a Comment' />
                </div>
              </div>
              <div className='mt-5 text-red-600 font-medium text-sm'></div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default page