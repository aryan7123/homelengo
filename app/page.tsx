'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input"
import { SearchIcon, LocateIcon } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <section className="banner-slider w-full relative z-50 h-screen md:bg-fixed">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:px-0 px-6 md:py-36 py-20">
          <div className="w-full z-10 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-center md:text-[80px] text-white font-semibold">Find Your <br className="md:hidden block" /> Perfect Home</h1>
            <span className="text-white text-center text-base mt-[30px]">We are a real estate agency that will help you find the best residence you dream of, <br className="md:block hidden" /> let’s discuss for your dream house?</span>
            <Tabs defaultValue="for_rent" className="w-full mt-8 md:mt-24">
              <TabsList className="flex items-center justify-center gap-5 bg-transparent">
                <TabsTrigger className="relative rounded-3xl text-base py-3 w-44 border data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=active]:border-[#1563df] data-[state=inactive]:border-[#ffffff] text-white nav-tab-item" value="for_rent">For Rent</TabsTrigger>
                <TabsTrigger className="relative rounded-3xl text-base py-3 w-44 border data-[state=active]:bg-[#1563df] data-[state=active]:text-white data-[state=active]:border-[#1563df] data-[state=inactive]:border-[#ffffff] text-white nav-tab-item" value="for_sale">For Sale</TabsTrigger>
              </TabsList>
              <TabsContent value="for_rent">
                <div className="w-full md:rounded-full rounded-2xl mt-8 md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow-sm">
                  <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
                    <label htmlFor="type" className="text-[#a3abb0]">Type</label>
                    <Select>
                      <SelectTrigger className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="All">All</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Studio">Studio</SelectItem>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Office">Office</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
                    <label htmlFor="type" className="text-[#a3abb0]">Location</label>
                    <div className="flex items-center justify-between">
                      <Input type="text" placeholder="Search Location" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                      <LocateIcon size={18} className="mr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label htmlFor="type" className="text-[#a3abb0]">Keyword</label>
                    <Input type="text" placeholder="Keyword" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                  </div>
                  <button type="button" className="bg-[#1563df] flex items-center justify-center rounded-full gap-3 w-full md:w-1/4 py-3 text-white text-base transition-colors">
                    <span>Search</span>
                    <SearchIcon size={20} />
                  </button>
                </div>
              </TabsContent>
              <TabsContent value="for_sale">
                <div className="w-full md:rounded-full rounded-2xl mt-8 md:px-10 px-4 py-5 flex md:flex-row flex-col gap-4 items-center bg-white shadow-sm">
                  <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
                    <label htmlFor="type" className="text-[#a3abb0]">Type</label>
                    <Select>
                      <SelectTrigger className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="All">All</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Studio">Studio</SelectItem>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Office">Office</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/4 md:border-r border-r-0 border-[#e4e4e4]">
                    <label htmlFor="type" className="text-[#a3abb0]">Location</label>
                    <div className="flex items-center justify-between">
                      <Input type="text" placeholder="Search Location" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                      <LocateIcon size={18} className="mr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label htmlFor="type" className="text-[#a3abb0]">Keyword</label>
                    <Input type="text" placeholder="Keyword" className="border-none outline-none focus:ring-0 focus:ring-offset-0 shadow-none transition-colors" />
                  </div>
                  <button type="button" className="bg-[#1563df] flex items-center justify-center rounded-full gap-3 w-full md:w-1/4 py-3 text-white text-base transition-colors">
                    <span>Search</span>
                    <SearchIcon size={20} />
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#161e2d] opacity-30 content-['']"></div>
      </section>
      <motion.section 
        className="w-full bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod nostrum alias, quisquam repudiandae, omnis eaque fugit, exercitationem pariatur maiores est. Reprehenderit natus voluptatem delectus. Omnis numquam porro nulla ad, debitis sapiente suscipit odio quidem est rem amet ipsum adipisci facilis quia sint nihil nisi quae itaque tenetur, hic iste? Quaerat perferendis eaque facilis, laborum vero labore quia, natus, illum ullam at nobis. Voluptate, omnis. Totam, officiis eaque, rerum commodi magnam sunt recusandae officia fugiat laudantium aliquid et possimus voluptatem! Minus ipsam ratione beatae. Id itaque voluptatibus, illo quaerat, assumenda eligendi repellat iusto quam laboriosam exercitationem, delectus expedita eaque quos. Repellat id eveniet minus error corrupti sed eius ut deserunt molestiae fugiat, facere atque voluptas soluta similique deleniti quasi voluptatibus aut animi necessitatibus delectus harum voluptatem labore, maiores perferendis. Inventore iusto sed blanditiis sequi, dolores ab quae adipisci. Dolor vero rem voluptatibus neque beatae iure sint porro sit similique eveniet, aspernatur quibusdam architecto? Rerum optio repellat commodi assumenda veniam? Consectetur vel asperiores iure incidunt dolor excepturi quod in nostrum repudiandae perferendis atque repellat, tempore eum quia et numquam tempora ratione id! Voluptate doloribus eaque labore quaerat est molestiae deserunt! Provident pariatur, possimus cupiditate numquam nulla deleniti nam dolor quidem nostrum perspiciatis natus iusto optio eligendi nobis. Consectetur quia quisquam dignissimos recusandae dolores delectus nam debitis similique laboriosam quaerat illo, in esse! Est impedit deleniti rerum dolor exercitationem a et ullam! Est commodi, architecto ab autem dignissimos dolore enim rerum velit placeat asperiores libero. Obcaecati eos, tempora sed laboriosam assumenda nulla molestiae voluptates deserunt nesciunt similique voluptas temporibus dicta enim adipisci corporis ab iusto ex quo quis hic, voluptatem nisi sunt. Reprehenderit, nisi officia voluptates perferendis obcaecati iusto voluptatibus animi distinctio libero natus deserunt temporibus qui? Cum voluptatem reprehenderit veniam porro atque ullam totam molestias ad tenetur ratione maiores possimus, error autem, dolore commodi fugit adipisci. Quos soluta labore non unde doloremque, distinctio sed quod quidem quas illo corrupti dicta autem, exercitationem fugiat nobis! Neque quas quam architecto libero consequuntur magnam quis reiciendis! Perferendis recusandae eligendi atque iste maiores ipsa quidem dolorem quos voluptas ut. Praesentium ipsa, hic ipsam veritatis non eligendi aliquid atque quidem qui similique sit et reiciendis iusto excepturi velit nesciunt, dolorem perferendis. Et molestiae architecto aspernatur quasi quae nam dolore quidem animi nobis necessitatibus voluptatum tenetur eum velit odit doloribus, quas enim qui voluptatibus repudiandae. Cumque, numquam temporibus! Velit eaque delectus, minima sapiente quam, ullam nemo optio quasi culpa sunt labore. Perferendis doloribus quae quia quidem odit provident debitis aspernatur omnis id deleniti voluptas repellendus explicabo voluptatem numquam ea tempora voluptatum, animi eos quas veniam vitae iste voluptatibus. Alias ab, excepturi aut pariatur dignissimos sapiente corrupti quis aperiam magni facere expedita ex saepe neque consequatur adipisci est dolores blanditiis sed minima eos odit. Temporibus non esse corporis sunt voluptate magni, quam eum ab error, ducimus repellat ut inventore unde reiciendis quod aspernatur iure dicta? Quae possimus quidem debitis voluptatem magni rerum nobis dolore vero officia aperiam numquam odit, molestias quasi vitae eveniet, praesentium architecto modi minima recusandae.
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
