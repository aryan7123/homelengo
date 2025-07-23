"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          <div className="relative faqs-page-title">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="flex text-sm items-center justify-center gap-1">
                <Link href="/">Home</Link> /<span>Pages</span> /
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-extrabold mt-4">
                FAQs
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <h2 className="mt-2 text-[#161e2d] text-center font-extrabold md:text-4xl text-2xl">
            Overview
          </h2>
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
                What types of accommodation are available in the USA for
                long-term stays?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  In the USA, long-term accommodation options include
                  apartments, single-family homes, condominiums, townhouses, and
                  shared housing. Many areas also offer furnished corporate
                  rentals and extended-stay hotels for professionals or
                  temporary residents.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 mb-3 data-[state=open]:shadow-md"
              value="item-2"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                What is the average rent in major U.S. cities?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  <li className="mb-1">
                    New York City: $2,500 – $4,000/month for a 1-bedroom
                  </li>
                  <li className="mb-1">Los Angeles: $2,200 – $3,500/month</li>
                  <li className="mb-1">Chicago: $1,500 – $2,800/month</li>
                  <li>
                    Suburban and smaller-town areas are generally more
                    affordable than coastal metro regions.
                  </li>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
              value="item-3"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Do I need a U.S. credit history to rent a property?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  While a credit history helps, it’s not always required.
                  Landlords may accept a larger security deposit, a co-signer,
                  or proof of income or employment, especially for international
                  renters or new arrivals.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
              value="item-4"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                What’s the process of buying a house in the USA as a
                non-resident?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  <li className="mb-1">Hiring a local real estate agent</li>
                  <li className="mb-1">
                    Getting pre-approved for financing (if needed)
                  </li>
                  <li className="mb-1">
                    Making an offer and signing a purchase agreement
                  </li>
                  <li>Completing legal and financial due diligence</li>
                  <li>Closing with a title company or attorney</li>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 data-[state=open]:shadow-md"
              value="item-5"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Are short-term rentals like Airbnb legal in all U.S. cities?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Not always. Rules vary by city and state. Some cities (e.g.
                  San Francisco, New York, Los Angeles) have strict regulations
                  on short-term rentals. It’s important to check local laws and
                  obtain permits or licenses if you plan to rent out a property.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <h2 className="mt-2 text-[#161e2d] text-center font-extrabold md:text-4xl text-2xl">
            Cost Payments
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-10"
            defaultValue="item-2"
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
                  1–2 months’ rent), the first month’s rent, and occasionally a
                  non-refundable application or service fee.
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
                  deadlines, or include certain utilities in the monthly price.
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
                  Landlords or agencies typically accept bank transfers, online
                  payment portals, post-dated cheques, or credit/debit cards.
                  Always get receipts or digital confirmations.
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
                  usually refunded after a final inspection, as per the terms in
                  the rental agreement.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <h2 className="mt-2 text-[#161e2d] text-center font-extrabold md:text-4xl text-2xl">
            Safety and Security
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-10"
            defaultValue="item-3"
          >
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 mb-3 data-[state=open]:shadow-md"
              value="item-1"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                How can I ensure the property is located in a safe neighborhood?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Research crime rates online, visit the area at different times
                  of the day, and speak with current residents or neighbors to
                  gauge safety.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 mb-3 data-[state=open]:shadow-md"
              value="item-2"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Is renters&apos; or homeowners’ insurance necessary?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  While not always mandatory, insurance is strongly recommended.
                  It protects your belongings and provides coverage against
                  theft, fire, or other unforeseen damages.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
              value="item-3"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Are background checks done on tenants or landlords?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Yes. Landlords often run tenant background checks, and tenants
                  should verify landlord credentials, especially when dealing
                  with private listings or online ads.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
              value="item-4"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                What safety features should I look for in a rental property?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Look for working smoke detectors, secure locks on
                  doors/windows, fire extinguishers, gated access, and
                  surveillance cameras where applicable.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 data-[state=open]:shadow-md"
              value="item-5"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                How is maintenance or emergency support handled?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Confirm if there’s a 24/7 helpline or a dedicated property
                  manager. Check the response time for emergency repairs and
                  whether those costs are covered by the landlord.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ScrollUpButton />
      <Footer />
    </>
  );
};

export default page;
