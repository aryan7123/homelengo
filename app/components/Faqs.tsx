import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <>
      <div className="w-full py-10">
        <div className="flex items-center mx-auto justify-center flex-col">
          <span className="text-[#1563df] font-medium">FAQS</span>
          <h2 className="mt-2 text-[#161e2d] font-semibold md:text-4xl text-2xl">
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
              What types of accommodation are available in the USA for long-term
              stays?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <p className="text-sm text-[#5c6368] font-medium">
                In the USA, long-term accommodation options include apartments,
                single-family homes, condominiums, townhouses, and shared
                housing. Many areas also offer furnished corporate rentals and
                extended-stay hotels for professionals or temporary residents.
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
                  Suburban and smaller-town areas are generally more affordable
                  than coastal metro regions.
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
                Landlords may accept a larger security deposit, a co-signer, or
                proof of income or employment, especially for international
                renters or new arrivals.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border border-[#e4e4e4] rounded-2xl mb-3 py-1 px-6 data-[state=open]:shadow-md"
            value="item-4"
          >
            <AccordionTrigger className="text-xl text-[#161e2d] font-semibold data-[state=open]:text-blue-600">
              What’s the process of buying a house in the USA as a non-resident?
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
                Not always. Rules vary by city and state. Some cities (e.g. San
                Francisco, New York, Los Angeles) have strict regulations on
                short-term rentals. It’s important to check local laws and
                obtain permits or licenses if you plan to rent out a property.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Faqs;
