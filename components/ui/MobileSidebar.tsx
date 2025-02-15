'use client'

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu, Mail, PhoneCallIcon } from 'lucide-react';


export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="md:hidden bg-transparent text-[#1563df] hover:bg-[#1563df] hover:text-white">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] z-[100] max-w-[300px] p-0 md:hidden">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <ScrollArea className="h-full">
          <div className="flex flex-col space-y-4">
            <div className='bg-white shadow py-5 px-4'>
              <Link href='/'>
                <Image src="/logo/logo@2x.png" width={160} height={80} alt='logo'></Image>
              </Link>
            </div>
            <nav className="flex flex-col py-5 px-4 border-b border-[#e4e4e4]">
              <Link href="/" className="text-sm mb-2.5 hover:text-[#1563df]">Home</Link>
              <Link href="/about-us" className="text-sm mb-2.5 hover:text-[#1563df]">About Us</Link>
              <Link href="/properties" className="text-sm mb-2.5 hover:text-[#1563df]">Properties</Link>
              <Link href="/" className="text-sm mb-2.5 hover:text-[#1563df]">Blog</Link>
              <Link href="/contact-us" className="text-sm hover:text-[#1563df]">Contact Us</Link>
            </nav>
            <div className="px-4 pb-5 w-full border-b border-[#e4e4e4]">
              <button type="button" className='bg-[#1563df] py-2 w-[inherit] rounded-full text-white text-sm font-semibold transition-colors hover:bg-[#0e49a6]'>
                Submit Property
              </button>
            </div>
            <div className='flex items-center gap-1.5 px-4 pb-5 border-b border-[#e4e4e4]"'>
              <PhoneCallIcon className='text-[#161e2d]' size={18} />
              <span className='text-[#161e2d]'>1-333-345-3868</span>
            </div>
            <div className='flex items-center gap-1.5 px-4'>
              <Mail className='text-[#161e2d]' size={18} />
              <span className='text-[#161e2d]'>themesflat@gmail.com</span>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

