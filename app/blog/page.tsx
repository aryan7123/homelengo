'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUpButton from '../components/ScrollUpButton';

const page = () => {
  return (
    <>
      <Navbar />
      <ScrollUpButton />
      <Footer />
    </>
  )
}

export default page