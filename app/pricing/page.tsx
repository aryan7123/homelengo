"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, CircleCheck } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Partners from "../components/Partners";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative pricing-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Pricing</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-medium mt-4">
                Pricing
              </h2>
            </div>
          </div>
          <div className="w-[inherit] mx-auto py-12">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[#1563df] uppercase text-sm font-semibold mb-2">
                pricing
              </span>
              <h2 className="text-4xl font-extrabold text-[#161e2d] capitalize">
                our subscription
              </h2>
            </div>
            <div className="w-full mt-12 flex md:flex-row flex-col items-center gap-10">
              <div className="group w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#1563df] hover:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-[#161e2d] text-4xl font-semibold group-hover:text-white">
                    $20
                  </h3>
                  <span className="text-[#5c6368] text-sm group-hover:text-white">
                    /month
                  </span>
                </div>
                <h3 className="text-[#161e2d] text-2xl font-semibold mb-2 group-hover:text-white">
                  Intro
                </h3>
                <span className="text-[#5c6368] text-sm group-hover:text-white">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Transportation for you
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      A hotel or homestay
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Free meals and drinks
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#a3abb0] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      24/7 Support
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck
                      size={14}
                      className="text-[#a3abb0] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Unlimited users
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full group-hover:bg-white group-hover:text-[#161e2d] mt-5 rounded-3xl bg-[#1563df] text-white transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5"
                >
                  <span>View All Properties</span>
                  <ArrowRight />
                </button>
              </div>
              <div className="w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm group cursor-pointer transition-all duration-300 hover:bg-[#1563df] hover:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-[#161e2d] text-4xl font-semibold group-hover:text-white">
                    $99
                  </h3>
                  <span className="text-[#5c6368] text-sm group-hover:text-white">
                    /month
                  </span>
                </div>
                <h3 className="text-[#161e2d] text-2xl font-semibold mb-2 group-hover:text-white">
                  Base
                </h3>
                <span className="text-[#5c6368] text-sm group-hover:text-white">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Transportation for you
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      A hotel or homestay
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Free meals and drinks
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#a3abb0] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      24/7 Support
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck
                      size={14}
                      className="text-[#a3abb0] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Unlimited users
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full group-hover:bg-white group-hover:text-[#161e2d] mt-5 rounded-3xl bg-[#1563df] text-white transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5"
                >
                  <span>View All Properties</span>
                  <ArrowRight />
                </button>
              </div>
              <div className="w-full bg-[#1563df] md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm group cursor-pointer md:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-white text-4xl font-semibold">$150</h3>
                  <span className="text-white text-sm">/month</span>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-2">Pro</h3>
                <span className="text-white text-sm">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck size={14} className="text-white" />
                    <span className="text-sm text-white">
                      Transportation for you
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck size={14} className="text-white" />
                    <span className="text-sm text-white">
                      A hotel or homestay
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck size={14} className="text-white" />
                    <span className="text-sm text-white">
                      Free meals and drinks
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck size={14} className="text-white" />
                    <span className="text-sm text-white">24/7 Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck size={14} className="text-white" />
                    <span className="text-sm text-white">Unlimited users</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-5 rounded-3xl bg-white text-[#161e2d] transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5"
                >
                  <span>View All Properties</span>
                  <ArrowRight />
                </button>
              </div>
              <div className="group w-full md:w-1/4 p-7 rounded-2xl border border-[#e4e4e4] shadow-sm group cursor-pointer transition-all duration-300 hover:bg-[#1563df] hover:scale-105">
                <div className="flex items-end mb-5">
                  <h3 className="text-[#161e2d] text-4xl font-semibold group-hover:text-white">
                    $200
                  </h3>
                  <span className="text-[#5c6368] text-sm group-hover:text-white">
                    /month
                  </span>
                </div>
                <h3 className="text-[#161e2d] text-2xl font-semibold mb-2 group-hover:text-white">
                  Enterprise
                </h3>
                <span className="text-[#5c6368] text-sm group-hover:text-white">
                  Join us every month for a very reasonable price
                </span>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Transportation for you
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      A hotel or homestay
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Free meals and drinks
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      24/7 Support
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck
                      size={14}
                      className="text-[#1563df] group-hover:text-white"
                    />
                    <span className="text-sm group-hover:text-white">
                      Unlimited users
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full group-hover:bg-white group-hover:text-[#161e2d] mt-5 rounded-3xl bg-[#1563df] text-white transition-colors text-base font-semibold flex items-center justify-center gap-1.5 py-3.5"
                >
                  <span>View All Properties</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[inherit] mx-auto py-6">
            <div className="flex flex-col">
              <span className="text-[#1563df] text-center uppercase text-sm font-semibold">
                faqs
              </span>
              <h2 className="mt-2 text-[#161e2d] text-center font-extrabold md:text-4xl text-2xl">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full mt-10"
              defaultValue="item-1"
            >
              <AccordionItem
                className="border border-[#e4e4e4] rounded-2xl py-1 px-6 mb-3 data-[state=open]:shadow-md"
                value="item-1"
              >
                <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                  What upfront costs should I expect when renting a property?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p className="text-sm text-[#5c6368] font-medium">
                    Most rental agreements require a security deposit (typically
                    1–2 months’ rent), the first month’s rent, and occasionally
                    a non-refundable application or service fee.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-[#e4e4e4] rounded-2xl py-1 px-6 mb-3 data-[state=open]:shadow-md"
                value="item-2"
              >
                <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                  Are there any hidden charges in rental or property agreements?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p className="text-sm text-[#5c6368] font-medium">
                    Always review the lease agreement. Some landlords may charge
                    for maintenance, utilities, or parking separately. Clarify
                    these before signing to avoid surprises.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
                value="item-3"
              >
                <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                  Can I negotiate the rental price or payment terms?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p className="text-sm text-[#5c6368] font-medium">
                    Yes, in many cases. Depending on market demand and the
                    landlord&apos;s flexibility, you may negotiate rent, payment
                    deadlines, or include certain utilities in the monthly
                    price.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
                value="item-4"
              >
                <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                  What payment methods are accepted for rent or property
                  purchases?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p className="text-sm text-[#5c6368] font-medium">
                    Landlords or agencies typically accept bank transfers,
                    online payment portals, post-dated cheques, or credit/debit
                    cards. Always get receipts or digital confirmations.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-[#e4e4e4] rounded-2xl py-1 px-6 data-[state=open]:shadow-md"
                value="item-5"
              >
                <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                  Is the security deposit refundable?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p className="text-sm text-[#5c6368] font-medium">
                    Yes, if there are no damages or unpaid dues. The deposit is
                    usually refunded after a final inspection, as per the terms
                    in the rental agreement.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <Partners />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
