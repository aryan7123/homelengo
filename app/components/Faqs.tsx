import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePathname } from "next/navigation";

const Faqs = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full py-10">
        <div className="flex items-center mx-auto justify-center flex-col">
          <span className="text-[#1563df] font-medium">FAQS</span>
          <h2 className="mt-2 text-[#161e2d] font-semibold md:text-4xl text-2xl">
            Frequently Asked Questions
          </h2>
        </div>

        {pathname === "/contact-us" && (
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
        )}

        {pathname === "/our-services" && (
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
                How can I rent an apartment through Homelengo?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  You can search for available apartments on our website by choosing your city, budget, and property type. Once you find a place you like, contact us to schedule a visit or apply online. Our team will help you with the rental agreement and moving process.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 mb-3 data-[state=open]:shadow-md"
              value="item-2"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Does Homelengo help with buying houses or just renting?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Homelengo offers both rental and buying services. If you’re looking to buy a house, we provide property listings, connect you with agents, and guide you through the buying process, including inspections, paperwork, and closing.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
              value="item-3"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Are the listings on Homelengo verified and updated?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Yes, all property listings on Homelengo are verified by our team to ensure they are real and accurate. We update the listings regularly so you can find the most recent and available options.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
              value="item-4"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                What documents do I need to rent a property in the USA?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  To rent a property, you usually need ID proof (passport or driver’s license), proof of income or job offer, a credit check, and sometimes a reference from a previous landlord. Our team will guide you based on the landlord’s requirements.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border border-[#e4e4e4] rounded-2xl py-1 px-6 data-[state=open]:shadow-md"
              value="item-5"
            >
              <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
                Can I find short-term rental or fully furnished apartments on Homelengo?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <p className="text-sm text-[#5c6368] font-medium">
                  Yes, Homelengo offers various types of rentals, including short-term and fully furnished apartments. Use the filters on the website to find properties that match your needs.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </>
  );
};

export default Faqs;
