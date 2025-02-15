'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileSidebar } from '@/components/ui/MobileSidebar';
import { AuthModals } from '../(auth)/AuthModals';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
            <header className='w-full sticky top-0 left-0 z-[99]'>
                <nav className='bg-white shadow'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between md:px-0 px-6 h-20'>
                        <Link href='/'>
                            <Image src="/logo/logo@2x.png" width={160} height={80} alt='logo'></Image>
                        </Link>
                        <ul className='md:flex hidden items-center justify-between gap-12'>
                            <li className={`${pathname === '/' ? 'text-[#1563df] active-nav' : 'text-[#161e2d] nav-link'} text-base font-medium relative`}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={`${pathname === '/about-us' ? 'text-[#1563df] active-nav' : 'text-[#161e2d] nav-link'} text-base font-medium relative`}>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li className={`${pathname === '/properties' ? 'text-[#1563df] active-nav' : 'text-[#161e2d] nav-link'} text-base font-medium relative`}>
                                <Link href="/properties">Properties</Link>
                            </li>
                            <li className={`${pathname === '/blog' ? 'text-[#1563df] active-nav' : 'text-[#161e2d] nav-link'} text-base font-medium relative`}>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className={`${pathname === '/contact-us' ? 'text-[#1563df] active-nav' : 'text-[#161e2d] nav-link'} text-base font-medium relative`}>
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                            <AuthModals />
                        </ul>
                        <MobileSidebar />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar