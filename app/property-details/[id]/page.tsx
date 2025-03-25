'use client';

import React, { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useParams } from 'next/navigation'
import axios from 'axios'

const page = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const { id } = useParams();

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
            <div className='flex md:flex-row flex-col justify-start md:items-center items-start md:gap-0 gap-4'>
              <div className='flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-4'>
                <h3 className='text-[#5c6368] text-base font-medium'>Features</h3>

              </div>
            </div>
          </div>
        </main>
        <Footer />
    </>
  )
}

export default page