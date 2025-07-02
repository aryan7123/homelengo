'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react'
import { MobileSidebar } from '@/components/ui/MobileSidebar';
import { UserIcon, LayoutDashboard, Edit2Icon, HeartIcon, HouseIcon, LogOutIcon, MenuIcon, CopyIcon } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Session } from 'next-auth';

interface SidebarProps {
    showSidebar: boolean;
    session: Session | null;
    handleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, session, handleSidebar }) => {
    const pathname = usePathname();

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    }

    return (
        <>
            {/* sidebar */}
            <aside className={`fixed md:block hidden dashboard-sidebar w-72 bg-[#161e2d] ${showSidebar ? "translate-x-[-100%]" : "translate-x-0"} transition-transform delay-150 top-0 left-0 bottom-0 h-screen z-[1000] overflow-y-auto overflow-x-hidden scroll-smooth`}>
                <div className='w-[inherit] py-8 px-6 border-b border-[#ffffff0d]'>
                    <Link href="/">
                        <Image src="/logo/logo-footer@2x.png" width={160} height={80} alt='logo'></Image>
                    </Link>
                </div>
                <div className='w-[inherit] py-8 px-6 border-b border-[#ffffff0d]'>
                    <h4 className='text-[#fff6] font-semibold mb-2'>Profile</h4>
                    <div className="flex items-center gap-3">
                        <div className='w-12 h-12 rounded-full flex items-center justify-center text-base bg-[#fff6] text-white'>
                            <UserIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <small className='text-[#fff6]'>Account</small>
                            <small className='text-white'>{session?.user?.email}</small>
                        </div>
                    </div>
                </div>
                <div className='w-[inherit] py-8'>
                    <h4 className='text-[#fff6] font-semibold mb-2 px-6'>Menu</h4>
                    <ul className='mt-4'>
                        <li className='mb-2'>
                            <Link href="/dashboard" className={`flex ${pathname === '/dashboard' ? 'bg-[#1563df]' : 'bg-transparent'} items-center gap-2.5 transition-colors hover:bg-[#1563df] text-white px-6 py-4`}>
                                <LayoutDashboard />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link href="/dashboard/profile" className={`flex ${pathname === '/dashboard/profile' ? 'bg-[#1563df]' : 'bg-transparent'} items-center gap-2.5 transition-colors hover:bg-[#1563df] text-white px-6 py-4`}>
                                <UserIcon />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link href="/dashboard/my-properties" className={`flex ${pathname === '/dashboard/my-properties' ? 'bg-[#1563df]' : 'bg-transparent'} items-center gap-2.5 transition-colors hover:bg-[#1563df] text-white px-6 py-4`}>
                                <Edit2Icon />
                                <span>My Properties</span>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link href="/dashboard/my-favoruites" className={`flex ${pathname === '/dashboard/my-favoruites' ? 'bg-[#1563df]' : 'bg-transparent'} items-center gap-2.5 transition-colors hover:bg-[#1563df] text-white px-6 py-4`}>
                                <HeartIcon />
                                <span>My Favoruites</span>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <Link href="/dashboard/add-property" className={`flex ${pathname === '/dashboard/add-property' ? 'bg-[#1563df]' : 'bg-transparent'} items-center gap-2.5 transition-colors hover:bg-[#1563df] text-white px-6 py-4`}>
                                <HouseIcon />
                                <span>Add Property</span>
                            </Link>
                        </li>
                        <li className='mb-2'>
                            <button type='button' onClick={handleLogout} className={`w-full flex items-center gap-2.5 text-white px-6 transition-colors hover:bg-[#1563df] py-4`}>
                                <LogOutIcon />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            {/* navbar */}
            <nav className='bg-white md:block hidden sticky top-0 left-0 w-full shadow-md z-[999]'>
                <div className='max-w-7xl mx-auto transition-all flex items-center justify-between md:px-0 px-6 h-20'>
                    <ul className={`md:flex hidden items-center justify-between gap-10 ${showSidebar ? "pl-0" : "md:pl-[230px]"}`}>
                        <Link href="/" className={`${showSidebar ? "block" : "hidden"}`}>
                            <Image src="/logo/logo@2x.png" width={160} height={80} alt='logo'></Image>
                        </Link>
                        <button type="button" onClick={handleSidebar}>
                            <MenuIcon />
                        </button>
                        <li className={`text-base font-medium relative hover:text-[#1563df] transition-colors`}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`text-base font-medium relative hover:text-[#1563df] transition-colors`}>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className={`text-base font-medium relative hover:text-[#1563df] transition-colors`}>
                            <Link href="/properties">Properties</Link>
                        </li>
                        <li className={`text-base font-medium relative hover:text-[#1563df] transition-colors`}>
                            <Link href="/our-services">Our Services</Link>
                        </li>
                        <li className={`text-base font-medium relative hover:text-[#1563df] transition-colors`}>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className={`text-base font-medium relative hover:text-[#1563df] transition-colors`}>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className='flex items-center'>
                                <Image 
                                    src={session?.user?.avatar}
                                    width={25}
                                    height={25}
                                    className='rounded-full'
                                    alt={session?.user?.name}
                                />
                                {session?.user?.name}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 z-[1000]">
                            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <span>My Properties</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>My Favoruites</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>My Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Add Property</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <MobileSidebar />
                </div>
            </nav>
            {/* mobile navbar */}
            <nav className='bg-white md:hidden block sticky top-0 left-0 w-full shadow-md z-[99]'>
                <div className='max-w-7xl mx-auto transition-all flex items-center justify-between md:px-0 px-6 h-20'>
                    <Link href="/">
                        <Image src="/logo/logo@2x.png" width={160} height={80} alt='logo'></Image>
                    </Link>
                    <div className="flex items-center gap-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{session?.user?.name}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 z-[1000]">
                                <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <span>My Properties</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>My Favoruites</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>My Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Add Property</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <MobileSidebar />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar