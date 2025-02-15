'use client';

import React, { useState, ReactNode } from "react";
import { useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import { redirect } from 'next/navigation';
import Loader from "../components/Loader";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const sidebarProps = {
    showSidebar,
    handleSidebar,
    session
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { sidebarProps });
    }
    return child;
  });

  if (status === "loading") {
    return <Loader />
  }

  if (!session) {
    redirect('/');
  }

  return (
    <>
      <Sidebar {...sidebarProps} />
      <main className={`bg-[#f7f7f7] relative w-full h-full ${showSidebar ? "md:pl-0" : "md:pl-[230px]"}`}>
        {childrenWithProps}
      </main>
    </>
  );
}
