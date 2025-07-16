"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../components/Footer";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");

  return(
    <>
        <Navbar />

        <section className="w-full bg-white">
            
        </section>

        <ScrollUpButton />
        <Footer />
    </>
  )
};

export default page;
